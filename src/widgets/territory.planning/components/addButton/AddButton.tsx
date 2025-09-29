import React from 'react';
import './AddButton.css';

interface AddButtonProps {
    label: string;
    onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ label, onClick }) => {
    return (
        <button className="add-btn" onClick={onClick}>
            <span className="plus">+</span>
            {label}
        </button>
    );
};

export default AddButton;
