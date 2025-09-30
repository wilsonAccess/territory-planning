import React, { ReactElement } from 'react';
import { TertiaryButton } from '@tag/tag-components-react-v4';
import './Dashboard.css';
import PipelineCardSection from '../../components/PipelineCardSection';
import { BarChart2Filled, CircleInfoLined, TickFilled } from '@tag/tag-icons';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';

interface QData {
    title: string;
    value: string;
    subtitle: string;
    subvalue?: string;
}

interface PData {
    dataOne: string;
    dataTwo: string;
    dataThree: string;
    dataFour: string;
}

interface InsightData {
    type: string;
    icon: ReactElement;
    title: string;
    description: string;
    bgColor: string;
    color: string;
}

interface PipelineCard {
    name: string;
    value: string;
    color: string;
}

const Dashboard = () => {
    const quotaData: QData[] = [
        { title: 'QUOTA', value: '$3500K', subtitle: 'GAP TO QUOTA', subvalue: '$2700K' },
        { title: 'CLOSED WON', value: '$800K', subtitle: '1 DAY CHANGE', subvalue: '$0' },
        { title: 'AI PROJECTION', value: '$3480K', subtitle: 'GAP TO QUOTA', subvalue: '$20K' },
        { title: 'COMMIT', value: '$1500K', subtitle: 'GAP TO QUOTA', subvalue: '$-2000K' },
        { title: 'COVERAGE', value: '2.5X', subtitle: 'TARGET', subvalue: '3.5X' },
    ];

    const productPipeline: PipelineCard[] = [
        { name: 'ERP DST', value: '$3.5M', color: '#6366F1' }, // Purple
        { name: 'CRM', value: '$2.6M', color: '#64748B' }, // Gray
        { name: 'HCM', value: '$1.7M', color: '#FFFFFF' }, // Default black
        { name: 'SCM', value: '$0.9M', color: '#22C55E' }, // Green
    ];

    const companyTypePipeline: PipelineCard[] = [
        { name: 'Software', value: '$3.0M', color: '#FFFFFF' }, // White
        { name: 'Manufacturing', value: '$2.3M', color: '#6366F1' }, // Gray
        { name: 'Financial', value: '$1.7M', color: '#64748B' }, // Default black
        { name: 'Healthcare', value: '$1.0M', color: '#22C55E' }, // Green
    ];

    const insights: InsightData[] = [
        {
            type: 'alert',
            icon: <CircleInfoLined accent="teal" />,
            bgColor: '#FEF2F2',
            color: '#E95050',
            title: 'Gap Alert',
            description:
                '3 of 3 territories have insufficient pipeline coverage. Total gap across all territories: $98,400,000.',
        },
        {
            type: 'warning',
            icon: <BarChart2Filled accent="purple" />,
            color: '#FBC02D',
            bgColor: '#F0FDF4',
            title: 'Pipeline Mix',
            description:
                'New business pipeline makes up only 17% of total pipeline. Consider increasing focus on new customer acquisition for long-term growth.',
        },
    ];
    return (
        <div className="dashboard-container">
            <div className="dashboard-header-container">
                <div className="dashboard-header-left">
                    <div className="dashboard-header-left-title">ERP DST - Deal Shape</div>
                    <div className="dashboard-header-left-item-container">
                        {' '}
                        How is this month shaping up?{' '}
                    </div>
                </div>
                <div className="dashboard-header-right">
                    <div className="dashboard-header-right-components">
                        <FilterDropdown
                            options={['All', 'ERP DST', 'CRM', 'HCM']}
                            value={'All'}
                            onChange={(val: any) => console.log('Division:', val)}
                        />
                        <FilterDropdown
                            options={['All Products', 'ERP DST', 'CRM', 'HCM', 'SCM']}
                            value={'All'}
                            onChange={(val: any) => console.log('Region:', val)}
                        />
                        <TertiaryButton startIcon={<TickFilled />} accent="teal">
                            Apply Filters
                        </TertiaryButton>
                    </div>
                </div>
            </div>
            <div className="dashboard-erp-grid">
                {quotaData.map((quota, index) => (
                    <div key={index} className="dashboard-erp-grid-card">
                        <div className="dashboard-erp-grid-card-title">{quota.title}</div>
                        <div className="dashboard-erp-grid-card-value">{quota.value}</div>
                        <div className="dashboard-erp-grid-card-subtitle">{quota.subtitle}</div>
                        <div className="dashboard-erp-grid-card-subvalue">{quota.subvalue}</div>
                    </div>
                ))}
            </div>
            <div className="dashboard-pipeline-trend-container">
                <div className="dashboard-pipeline-trend">
                    <div className="dashboard-pipeline-trend-title">Pipeline Trend</div>
                    <div className="dashboard-pipeline-visualization-container">
                        {/* Placeholder for the pipeline trend visualization */}
                        <div className="dashboard-pipeline-visualization-column">
                            <div className="dashboard-pipeline-visualization-icon">SVG ICON</div>
                            <div className="dashboard-pipeline-visualization-subtitle">
                                Pipeline visualization showing trends over time
                            </div>
                            <div className="dashboard-pipeline-visualization-desc">
                                Includes Commit, Best Case, Upside and Pipeline Categories
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-pipeline-card-container">
                <PipelineCardSection title="Pipeline by Product" data={productPipeline} />
                <PipelineCardSection title="Pipeline by Company Type" data={companyTypePipeline} />
            </div>
            <div className="dashboard-insights-section">
                <h3 className="section-title">Key Actions Required</h3>
                <div className="insights-grid">
                    {insights.map((insight, index) => (
                        <div key={index} className={`insight-card `}>
                            <div
                                className="insight-content"
                                style={{
                                    backgroundColor: insight.bgColor,
                                    borderLeft: `5px solid ${insight.color}`,
                                }}
                            >
                                <span className="insight-icon" style={{ color: insight.color }}>
                                    {insight.icon}
                                </span>
                                <div className="insight-text">
                                    <h4
                                        className="insight-title"
                                        style={{
                                            color: insight.color,
                                        }}
                                    >
                                        {insight.title}
                                    </h4>
                                    <p className="insight-description">{insight.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
