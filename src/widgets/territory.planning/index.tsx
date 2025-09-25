import { Spinner } from '@tag/tag-components-react-v4';
import { WidgetLoadProps } from '@workspace/utils';
import { WidgetContainer } from '@workspace/utils-react';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { WidgetSettings } from './WidgetSettings';

const App = lazy(() => import('./App'));

export function load(props: WidgetLoadProps<WidgetSettings>) {
    const root = createRoot(props.widget.element);
    root.render(
        <React.StrictMode>
            <WidgetContainer {...props}>
                <Suspense fallback={<Spinner>Loading</Spinner>}>
                    <App root={root} />
                </Suspense>
            </WidgetContainer>
        </React.StrictMode>,
    );
}
