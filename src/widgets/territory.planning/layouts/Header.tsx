import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-top">Territory Planning Tool (P4S) - Access APAC</div>
                <div className="header-bottom">
                    <div className="header-salesrep">
                        <span>Sales Rep: Admin User</span>
                    </div>
                    <div className="header-territory">
                        <span>Territory: Global</span>
                    </div>
                    <div className="header-divisions">
                        <span>Division: All Divisions</span>
                    </div>
                    <div className="header-target">
                        <span>FY2025 Target: $14.0M</span>
                    </div>
                    <div className="header-apps"></div>
                    <div className="header-time"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
