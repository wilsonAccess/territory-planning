import { useWidgetElement, useWidgetSettings } from '@workspace/utils-react';
import { WidgetSettings } from './WidgetSettings';
import { AppHeader } from '@tag/tag-components-react-v4';
import { DeleteFilled, SearchFilled } from '@tag/tag-icons';
import { SelectedMenuItem } from '@tag/tag-components-react-v4/dist/components/workspace/shared/menu/types';
import { Root } from 'react-dom/client';

type AppProps = {
    root: Root;
};

const App = (props: AppProps) => {
    const widgetSettings = useWidgetSettings<WidgetSettings>();
    const { element, remove } = useWidgetElement({
        onRemove: () => {
            props.root.unmount();
        },
    });

    const appHeader = 'App Test';
    return (
        <>
            <AppHeader
                accent="teal"
                icon={<SearchFilled />}
                className="drag-handle"
                menuItems={[
                    {
                        icon: <DeleteFilled />,
                        name: 'remove',
                        text: 'Remove',
                    },
                ]}
                heading={appHeader}
                onMenuItemClick={(e: SelectedMenuItem) => {
                    if (e.name === 'remove') {
                        remove();
                    }
                }}
            ></AppHeader>
        </>
    );
};

export default App;
