/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactElement, useState } from 'react';
import './GapAnalysis.css';
import {
    BarChart2Filled,
    ChevronDownLined,
    ChevronUpLined,
    CircleInfoLined,
    DeleteLined,
    LineChartArrowLined,
    UsersFilled,
} from '@tag/tag-icons';
import PipelineGapCoverage from '../../components/pipelineGapCoverage/PipelineGapCoverage';
import AddButton from '../../components/addButton/AddButton';
import Navbar from '../../layouts/navbar/Navbar';

interface KPIData {
    label: string;
    value: string;
    description?: string;
}

interface TerritoryData {
    type: string;
    strategy: string;
    description: string;
    pipelineTarget: string;
    ratio: string;
}

interface InsightData {
    type: string;
    icon: ReactElement;
    title: string;
    description: string;
    bgColor: string;
    color: string;
    details?: string;
    recommendations?: string[];
}

const GapAnalysis: React.FC = () => {
    const [activePage, setActivePage] = useState<'territory' | 'insights'>('territory');
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [showForm, setShowForm] = useState(false);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    // Sample handler for form submission
    const handleAddStrategy = (e: React.FormEvent) => {
        e.preventDefault();
        // handle form values here (e.g. update state or API call)
        setShowForm(false); // hide form after submit
    };
    const kpiData: KPIData[] = [
        { label: 'Annual Target', value: '$14,000,000', description: 'FY2025 Goal' },
        { label: 'Current Pipeline', value: '$8,700,000', description: '2.5x coverage' },
        { label: 'Pipeline Gap', value: '21.5%', description: 'Additional pipeline needed' },
    ];

    const territoryData: TerritoryData[] = [
        {
            type: 'Expansion',
            strategy: 'Cross-sell',
            description: 'Upselling CRM licenses to existing clients',
            pipelineTarget: '$1,200,000',
            ratio: '2.5x',
        },
        {
            type: 'Acquisition',
            strategy: 'New logos',
            description: 'Targeting healthcare sector in APAC',
            pipelineTarget: '$900,000',
            ratio: '3.0x',
        },
    ];

    const insights: InsightData[] = [
        {
            type: 'alert',
            icon: <CircleInfoLined accent="teal" />,
            bgColor: '#FEF2F2',
            color: '#932f2fff',
            title: 'Pipeline Gap Alert',
            description: 'You need to generate $3,500,000 additional pipeline.',
            details:
                'Focus on EC/NP opportunities (30% conversion) and expand existing customer relationships for higher probability deals. Historical data shows that increasing account review frequency by 50% leads to 30% more expansion opportunities.',
            recommendations: [
                'Schedule account reviews with your top 10 customers',
                'Prepare expansion proposals for accounts with >80% utilization',
                'Engage partners to identify cross-sell opportunities',
            ],
        },
        {
            type: 'warning',
            icon: <BarChart2Filled accent="purple" />,
            color: '#2e8531ff',
            bgColor: '#d1eed2ff',
            title: 'Optimize Pipeline Mix',
            description: 'Current NC/NP pipeline is $1,200,000 with only 12% conversion rate.',
        },
        {
            type: 'info',
            icon: <LineChartArrowLined accent="green" />,
            color: '#1969aaff',
            bgColor: '#c4daecff',
            title: 'Run Rate Expansion',
            description: 'Run rate business at $1,800,000 provides stable base.',
        },
        {
            type: 'success',
            icon: <UsersFilled accent="blue" />,
            color: '#daa82aff',
            bgColor: '#FEFCE8',
            title: 'Q1 Focus Areas',
            description: 'Your Q1 target requires immediate action to ensure pipeline coverage.',
        },
    ];

    // Navbar items to match your tab keys
    const navItems = [
        { label: 'Gap Closing Strategies', path: 'territory' },
        { label: 'AI Insights & Recommendations', path: 'insights' },
    ];

    return (
        <div className="admin-dashboard">
            {/* KPI Section */}
            <div className="tpo-section">
                <div className="kpi-section">
                    <div className="kpi-header">
                        <h2 className="section-title">Gap Analysis</h2>
                    </div>
                    <div className="kpi-grid">
                        {kpiData.map((kpi, index) => (
                            <div key={index} className="kpi-card">
                                <div className="kpi-label">{kpi.label}</div>
                                <div className="kpi-value">{kpi.value}</div>
                                <div className="kpi-description">{kpi.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pipeline-chart">
                    <PipelineGapCoverage coverage={8.7} target={3.5} />
                </div>
            </div>

            <br />

            {/* Replace tabs with Navbar */}
            <div className="tpo-section">
                <div className="sub-tab">
                    <Navbar
                        items={navItems}
                        activePath={activePage}
                        onSelect={(path: string) => setActivePage(path as 'territory' | 'insights')}
                    />
                </div>
                {/* Render tab/page content */}
                {activePage === 'territory' && (
                    <>
                        <div className="table-wrapper">
                            <table className="territory-table">
                                <thead>
                                    <tr>
                                        <td>TYPE</td>
                                        <td>STRATEGY</td>
                                        <td>DESCRIPTION</td>
                                        <td>PIPELINE TARGET</td>
                                        <td>RATIO</td>
                                        <td>ACTION</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {territoryData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.type}</td>
                                            <td>{row.strategy}</td>
                                            <td>{row.description}</td>
                                            <td>{row.pipelineTarget}</td>
                                            <td>{row.ratio}</td>
                                            <td>
                                                <DeleteLined />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tr style={{ backgroundColor: '#f6f6f6ff' }}>
                                    <td>Total Pipeline from Strategies</td>
                                    <td></td>
                                    <td></td>
                                    <td>$2,100,000</td>
                                    <td>Gap Closed</td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <br></br>
                        {!showForm ? (
                            <AddButton label="Add New Strategy" onClick={() => setShowForm(true)} />
                        ) : (
                            <form className="add-strategy-form" onSubmit={handleAddStrategy}>
                                <h3>Add New Strategy</h3>

                                <div className="form-row">
                                    <div className="form-control">
                                        <label>Strategy</label>
                                        <select name="type" required>
                                            <option value="EC/EP">
                                                EC/EP - Existing Customer/Existing Product
                                            </option>
                                            <option value="NC/NP">
                                                NC/NP - New Customer/New Product
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label>Pipeline Target Value ($)</label>
                                        <input
                                            type="number"
                                            name="pipelineTarget"
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label>Strategy Name</label>
                                    <input
                                        type="text"
                                        name="strategy"
                                        placeholder="e.g., Security Suite Cross-sell Campaign"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        placeholder="e.g., Target 25 existing customers with compliance requirements"
                                    />
                                </div>

                                <div className="form-actions">
                                    <button
                                        type="button"
                                        className="btn btn-cancel"
                                        onClick={() => setShowForm(false)} // 👈 hide form, show button again
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Add Strategy
                                    </button>
                                </div>
                            </form>
                        )}
                    </>
                )}

                {activePage === 'insights' && (
                    <div className="insights-grid">
                        {insights.map((insight, index) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                            <div
                                key={index}
                                className="insight-card"
                                onClick={() => toggleExpand(index)}
                                style={{ cursor: insight.details ? 'pointer' : 'default' }}
                            >
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
                                            style={{ color: insight.color }}
                                        >
                                            {insight.title}
                                        </h4>
                                        <p className="insight-description">{insight.description}</p>
                                    </div>
                                    {/* Toggle icon */}
                                    <span className="chevron-icon">
                                        {expandedIndex === index ? (
                                            <ChevronUpLined />
                                        ) : (
                                            <ChevronDownLined />
                                        )}
                                    </span>
                                </div>

                                {/* Expanded details */}
                                {expandedIndex === index && insight.details && (
                                    <div
                                        className="insight-details"
                                        style={{
                                            backgroundColor: insight.bgColor,
                                            borderLeft: `5px solid ${insight.color}`,
                                            borderTop: insight.bgColor,
                                        }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor: insight.bgColor,
                                                borderLeft: `1px solid #9c9c9cff`,
                                                borderTop: insight.bgColor,
                                                marginRight: '-10px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    backgroundColor: insight.bgColor,
                                                    borderTop: insight.bgColor,
                                                    marginLeft: '20px',
                                                }}
                                            >
                                                <div className="insight-deta">
                                                    {' '}
                                                    {insight.details}
                                                </div>
                                                <h5>Recommended Actions:</h5>
                                                <ul>
                                                    {(insight.recommendations ?? []).map(
                                                        (item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GapAnalysis;
function setShowForm(arg0: boolean) {
    throw new Error('Function not implemented.');
}
