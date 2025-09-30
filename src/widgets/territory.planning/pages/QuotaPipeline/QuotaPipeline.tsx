/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactElement, useState } from 'react';
import './QuotaPipeline.css';
import Navbar from '../../layouts/navbar/Navbar';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

import {
    BarChart2Filled,
    ChevronDownLined,
    ChevronUpLined,
    CircleInfoLined,
    DeleteLined,
    LineChartArrowLined,
    UsersFilled,
} from '@tag/tag-icons';

import AddButton from '../../components/addButton/AddButton';

interface CardData {
    title: string;
    value: string;
    subtitle: string;
    description?: string;
}

const navItems = [
    { label: 'Quota Settings', path: 'quota' },
    { label: 'Pipeline Planning', path: 'pipeline' },
    { label: 'Quarterly Breakdown', path: 'quarter' },
];

const QuotaPipeline: React.FC = () => {
    const [activePage, setActivePage] = useState<'quota' | 'pipeline' | 'quarter'>('quota');

    const cardData: CardData[] = [
        {
            title: 'Annual Target',
            value: '$14,000,000',
            subtitle: 'FY2025 Total Quota',
            description: 'Current Attainment: 23%',
        },
        {
            title: 'Pipeline Coverage',
            value: '2.5x',
            subtitle: 'Target: 3.5x',
            description: 'Action needed: Increase pipeline',
        },
        {
            title: 'Gap to Target',
            value: '$3,500,000',
            subtitle: 'Additional pipeline needed',
            description: 'Focus on high-conversion opportunities',
        },
        {
            title: 'Run Rate Business',
            value: '$1,800,000',
            subtitle: '34% of pipeline',
            description: 'Predictable revenue',
        },
    ];

    return (
        <div className="quota-pipeline">
            <div className="tpo-section">
                <div className="sub-tab">
                    <Navbar
                        items={navItems}
                        activePath={activePage}
                        onSelect={(path: string) =>
                            setActivePage(path as 'quota' | 'pipeline' | 'quarter')
                        }
                    />
                </div>
                {activePage === 'quota' && <></>}
                {activePage === 'pipeline' && <></>}
                {activePage === 'quarter' && <></>}
            </div>
            {/* KPI Cards */}
            <div className="quota-card-section">
                <div className="quota-grid">
                    {cardData.map((card, index) => (
                        <div key={index} className="quota-card">
                            <div className="quota-title">{card.title}</div>
                            <div className="quota-value">{card.value}</div>
                            <div className="quota-subtitle">{card.subtitle}</div>
                            <div className="quota-description">{card.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuotaPipeline;
