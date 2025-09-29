import React from 'react';
import './Navbar.css';

export interface NavItem {
    label: string;
    path: string;
}

interface NavbarProps {
    items: NavItem[];
    activePath: string;
    onSelect: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, activePath, onSelect }) => {
    return (
        <div className="nav-tabs">
            {items.map((item) => (
                <button
                    key={item.path}
                    className={`tab ${activePath === item.path ? 'active' : ''}`}
                    onClick={() => onSelect(item.path)}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default Navbar;
