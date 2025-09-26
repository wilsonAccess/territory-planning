import React from 'react';
import './FilterDropdown.css';
import { FilterFilled } from '@tag/tag-icons';

interface FilterDropdownProps {
    options: string[];
    value: string;
    onChange: (val: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, value, onChange }) => {
    return (
        <div className="filter-dropdown">
            <FilterFilled />
            <select
                className="filter-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterDropdown;
