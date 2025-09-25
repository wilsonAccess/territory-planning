import Header from './Header';
import Navbar from './Navbar';
import './MainLayout.css';

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <main className="main-content">{children}</main>
        </div>
    );
}

export default MainLayout;
