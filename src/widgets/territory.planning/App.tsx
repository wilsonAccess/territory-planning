import { useState } from 'react';
import { useWidgetElement, useWidgetSettings } from '@workspace/utils-react';
import { WidgetSettings } from './WidgetSettings';
import { AppHeader } from '@tag/tag-components-react-v4';
import { DashboardFilled, DeleteFilled, RefreshFilled, SearchFilled } from '@tag/tag-icons';
import { SelectedMenuItem } from '@tag/tag-components-react-v4/dist/components/workspace/shared/menu/types';
import { Root } from 'react-dom/client';
import MainLayout from './layouts/mainLayout/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import { NavItem } from './layouts/navbar/Navbar';

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

    const appHeader = 'Territory Planning';

    const navItems: NavItem[] = [
        { label: 'Admin Dashboard', path: 'AdminDashboard' },
        { label: 'Dashboard', path: 'Dashboard' },
        { label: 'Quota & Pipeline', path: 'QuotaPipeline' },
        { label: 'Gap Analysis', path: 'GapAnalysis' },
    ];

    const [activePage, setActivePage] = useState<string>('GapAnalysis');

    function handleRefresh() {
        console.log('Refresh clicked');
    }

    return (
        <>
            <AppHeader
                accent="blue"
                icon={<DashboardFilled />}
                className="drag-handle"
                menuItems={[
                    { icon: <RefreshFilled />, name: 'refresh', text: 'Refresh' },
                    { icon: <DeleteFilled />, name: 'remove', text: 'Remove' },
                ]}
                heading={appHeader}
                onMenuItemClick={(e: SelectedMenuItem) => {
                    if (e.name === 'remove') remove();
                    if (e.name === 'refresh') handleRefresh();
                }}
            />

            <MainLayout items={navItems} activePath={activePage} onSelect={setActivePage} />
        </>
    );
};

export default App;
