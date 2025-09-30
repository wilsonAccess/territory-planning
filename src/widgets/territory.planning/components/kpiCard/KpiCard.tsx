/* eslint-disable react/prop-types */
import React from 'react';
import './KpiCard.scss';

// Define a type for a single KPI item
interface KpiItem {
    label: string;
    value: string | number;
    description: string;
}

// Single KPI Card component
const KpiCard: React.FC<KpiItem> = ({ label, value, description }) => {
    return (
        <div className="kpi-card">
            <div className="kpi-label">{label}</div>
            <div className="kpi-value">{value}</div>
            <div className="kpi-description">{description}</div>
        </div>
    );
};

// KPI Grid component props
interface KpiGridProps {
    kpiData: KpiItem[];
}

// KPI Grid component
const KpiGrid: React.FC<KpiGridProps> = ({ kpiData }) => {
    return (
        <div className="kpi-grid">
            {kpiData.map((kpi, index) => (
                <KpiCard
                    key={index}
                    label={kpi.label}
                    value={kpi.value}
                    description={kpi.description}
                />
            ))}
        </div>
    );
};

export default KpiGrid;
