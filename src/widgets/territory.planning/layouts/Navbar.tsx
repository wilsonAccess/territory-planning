import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            {/* Navigation Tabs */}
            <div className="nav-tabs">
                <NavLink
                    to="/Admin"
                    className={({ isActive }: { isActive: boolean }) =>
                        `tab ${isActive ? 'active' : ''}`
                    }
                >
                    Admin Dashboard
                </NavLink>

                <NavLink
                    to="/"
                    end
                    className={({ isActive }: { isActive: boolean }) =>
                        `tab ${isActive ? 'active' : ''}`
                    }
                >
                    Dashboard
                </NavLink>
            </div>
        </>
    );
};

export default Navbar;
