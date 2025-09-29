import React from 'react';
import './mainLayout.css';
import Navbar, { NavItem } from '../navbar/Navbar';
import Header from '../header/Header';
import AdminDashboard from '../../pages/adminDashboard/AdminDashboard';
import Dashboard from '../../pages/dashboard/Dashboard';
import GapAnalysis from '../../pages/gapAnalysis/GapAnalysis';
import QuotaPipeline from '../../pages/quotaPipeline/QuotaPipeline';

interface MainLayoutProps {
    items: NavItem[];
    activePath: string;
    onSelect: (path: string) => void;
}

function MainLayout({ items, activePath, onSelect }: MainLayoutProps) {
    function renderPage() {
        switch (activePath) {
            case 'AdminDashboard':
                return <AdminDashboard />;
            case 'Dashboard':
                return <Dashboard />;
            case 'QuotaPipeline':
                return <QuotaPipeline />;
            case 'GapAnalysis':
                return <GapAnalysis />;
            default:
                return <GapAnalysis />;
        }
    }

    return (
        <div className="layout">
            <Header />
            <Navbar items={items} activePath={activePath} onSelect={onSelect} />
            <main className="main-content">{renderPage()}</main>
        </div>
    );
}

export default MainLayout;
