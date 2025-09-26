import React, { ReactElement } from 'react';
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
import './AdminDashboard.css';
import {
    BarChart2Filled,
    CircleInfoLined,
    ExclamationMarkFilled,
    LineChartArrowLined,
    UsersFilled,
} from '@tag/tag-icons';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';

interface KPIData {
    label: string;
    value: string;
    change: string;
    description?: string;
}

interface PerformanceData {
    name: string;
    value: number;
    benchmark: number;
    budget?: number;
    attainment?: number;
}

interface QuarterlyData {
    quarter: string;
    current: number;
    previous: number;
    budget?: number;
}

interface PipelineData {
    name: string;
    value: number;
    color: string;
    [key: string]: string | number;
}

interface TerritoryData {
    salesRep: string;
    territory: string;
    devision: string;
    annualTarget: string;
    pipeline: string;
    coverage: string;
    attainment: string;
    gapStatus: string;
}

interface InsightData {
    type: string;
    icon: ReactElement;
    title: string;
    description: string;
    bgColor: string;
    color: string;
}

const AdminDashboard: React.FC = () => {
    const kpiData: KPIData[] = [
        {
            label: 'Total Annual Target',
            value: '$23,000,000',
            change: '+12%',
            description: '1 Sales Territories',
        },
        {
            label: 'Total Pipeline',
            value: '$15,700,000',
            change: '+8%',
            description: '2.8x Average Coverage',
        },
        {
            label: 'Average Attainment',
            value: '21.5%',
            change: '-3%',
            description: 'YTD Performance',
        },
        {
            label: 'Pipeline Gap',
            value: '$64,800,000',
            change: '+15%',
            description: 'Additional Pipeline Needed',
        },
    ];

    const performanceData: PerformanceData[] = [
        {
            name: 'John',
            value: 8.0, // $8M
            benchmark: 6.5, // $6.5M
            budget: 7.5, // $7.5M
            attainment: +((8.0 / 7.5) * 100).toFixed(1), // 106.7%
        },
        {
            name: 'Sarah',
            value: 9.0, // $9M
            benchmark: 4.5, // $4.5M
            budget: 10.0, // $10M
            attainment: +((9.0 / 10.0) * 100).toFixed(1), // 90.0%
        },
        {
            name: 'Michael',
            value: 8.0, // $8M
            benchmark: 5.5, // $5.5M
            budget: 8.5, // $8.5M
            attainment: +((8.0 / 8.5) * 100).toFixed(1), // 94.1%
        },
    ];

    const quarterlyData: QuarterlyData[] = [
        { quarter: 'Q1', current: 75, previous: 65, budget: 20 },
        { quarter: 'Q2', current: 80, previous: 70 },
        { quarter: 'Q3', current: 85, previous: 75 },
        { quarter: 'Q4', current: 90, previous: 80 },
    ];

    const pipelineData: PipelineData[] = [
        { name: 'Run Rate 23%', value: 23, color: '#00bfae' },
        { name: 'Cross-Sell 27%', value: 27, color: '#5c1a33' },
        { name: 'Upsell 34%', value: 30, color: '#d32f2f' },
        { name: 'New Business 17%', value: 20, color: '#80deea' },
    ];

    const territoryData: TerritoryData[] = [
        {
            salesRep: 'John Smith',
            territory: 'APAC - Singapore/Malaysia',
            devision: 'ERP DST',
            annualTarget: '$14,000,000	',
            pipeline: '$8,700,000',
            coverage: '2.5x',
            attainment: '23%',
            gapStatus: 'Gap: $3,500,000',
        },
        {
            salesRep: 'Sarah Johnson',
            territory: 'EMEA - UK/France',
            devision: 'CRM',
            annualTarget: '$12,000,000',
            pipeline: '$8,400,000',
            coverage: '2.8x',
            attainment: '40%',
            gapStatus: 'Gap: $2,400,000',
        },
        {
            salesRep: 'Michael Wong',
            territory: 'APAC - Australia/NZ',
            devision: 'HCM',
            annualTarget: '$9,000,000',
            pipeline: '$7,000,000',
            coverage: '3.1x',
            attainment: '20%',
            gapStatus: 'Gap: $900,000',
        },
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
            bgColor: '#FEFCE8',
            title: 'Pipeline Mix',
            description:
                'New business pipeline makes up only 17% of total pipeline. Consider increasing focus on new customer acquisition for long-term growth.',
        },
        {
            type: 'info',
            icon: <LineChartArrowLined accent="green" />,
            color: '#4CAF50',
            bgColor: '#d1eed2ff',
            title: 'Top Performers',
            description:
                '1 territories are exceeding 30% attainment YTD. Review best practices from these reps to share across the organization.',
        },
        {
            type: 'success',
            icon: <UsersFilled accent="blue" />,
            color: '#2196F3',
            bgColor: '#c4daecff ',
            title: 'Resource Allocation',
            description:
                'APAC region shows the highest pipeline coverage at 2.8x. Consider redistributing enablement resources to support underperforming regions.',
        },
    ];

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <div className="dashboard-header">
                <h1 className="dashboard-title">Admin Dashboard</h1>
                <p className="dashboard-subtitle">
                    Compare performance across all sales territories and identify opportunities for
                    improvement.
                </p>
            </div>

            <div className="tpo-section">
                {/* KPI Cards */}
                <div className="kpi-section">
                    <div className="kpi-header">
                        <h2 className="section-title">Territory Performance Overview</h2>
                        <div className="filters">
                            <FilterDropdown
                                options={['All', 'APAC', 'EMEA', 'North America', 'LATAM']}
                                value={'All'}
                                onChange={(val: any) => console.log('Region:', val)}
                            />
                            <FilterDropdown
                                options={['All', 'ERP DST', 'CRM', 'HCM']}
                                value={'All'}
                                onChange={(val: any) => console.log('Division:', val)}
                            />
                        </div>
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

                {/* Charts Section - Top Row */}
                <div className="charts-row">
                    {/* Performance Comparison */}
                    <div className="chart-container ">
                        <h3 className="chart-title">Rep Performance Comparison</h3>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={performanceData} barCategoryGap="8%">
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />

                                {/* X Axis */}
                                <XAxis dataKey="name" stroke="#666" fontSize={12} />

                                {/* Left Y Axis - Amount ($M) */}
                                <YAxis
                                    yAxisId="left"
                                    orientation="left"
                                    stroke="#666"
                                    fontSize={12}
                                    domain={[0, 16]}
                                    ticks={[0, 4, 8, 12, 16]}
                                    label={{
                                        value: 'Amount ($M)',
                                        angle: -90,
                                        position: 'insideLeft',
                                    }}
                                />

                                {/* Right Y Axis - Attainment (%) */}
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    stroke="#666"
                                    fontSize={12}
                                    domain={[0, 40]}
                                    ticks={[0, 10, 20, 30, 40]}
                                    label={{
                                        value: 'Attainment (%)',
                                        angle: 90,
                                        position: 'insideRight',
                                    }}
                                />

                                {/* Bars */}
                                <Bar
                                    dataKey="value"
                                    yAxisId="left"
                                    fill="#00bfae"
                                    radius={[2, 2, 0, 0]}
                                />
                                <Bar
                                    dataKey="benchmark"
                                    yAxisId="left"
                                    fill="#5c1a33"
                                    radius={[2, 2, 0, 0]}
                                />
                                <Bar
                                    dataKey="budget"
                                    yAxisId="left"
                                    fill="#d32f2f"
                                    radius={[2, 2, 0, 0]}
                                />
                                {/* Remove Attainment bar if not present in data */}
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="chart-legend">
                            <span className="legend-item">
                                <span
                                    className="legend-dot"
                                    style={{ backgroundColor: '#17a2b8' }}
                                ></span>
                                <span style={{ color: '#17a2b8' }}>Target</span>
                            </span>
                            <span className="legend-item">
                                <span
                                    className="legend-dot"
                                    style={{ backgroundColor: '#6f42c1' }}
                                ></span>
                                <span style={{ color: '#6f42c1' }}>Pipeline</span>
                            </span>
                            <span className="legend-item">
                                <span
                                    className="legend-dot"
                                    style={{ backgroundColor: '#dc3545' }}
                                ></span>
                                <span style={{ color: '#dc3545' }}>Attainment %</span>
                            </span>
                        </div>
                    </div>

                    {/* Pipeline Composition as Pie Chart */}
                    <div className="chart-container ">
                        <h3 className="chart-title">Pipeline Composition</h3>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={pipelineData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label={({ name }) => name}
                                >
                                    {pipelineData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Quarterly Performance */}
                <div className="quarterly-section">
                    <h3 className="chart-title">Quarterly Performance</h3>
                    <div className="quarterly-charts">
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={quarterlyData} barCategoryGap="10%">
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                                <XAxis dataKey="quarter" stroke="#666" fontSize={12} />
                                <YAxis stroke="#666" fontSize={12} />
                                <Bar
                                    dataKey="current"
                                    fill="#00bfae"
                                    radius={[2, 2, 0, 0]}
                                    name="Group 1"
                                />
                                <Bar
                                    dataKey="previous"
                                    fill="#5c1a33"
                                    radius={[2, 2, 0, 0]}
                                    name="Group 2"
                                />
                                <Bar
                                    dataKey="budget"
                                    fill="#dc3545"
                                    radius={[2, 2, 0, 0]}
                                    name="Budget"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-legend">
                        <span className="legend-item">
                            <span
                                className="legend-dot"
                                style={{ backgroundColor: '#17a2b8' }}
                            ></span>
                            <span style={{ color: '#17a2b8' }}>Target</span>
                        </span>
                        <span className="legend-item">
                            <span
                                className="legend-dot"
                                style={{ backgroundColor: '#6f42c1' }}
                            ></span>
                            <span style={{ color: '#6f42c1' }}>Pipeline</span>
                        </span>
                        <span className="legend-item">
                            <span
                                className="legend-dot"
                                style={{ backgroundColor: '#dc3545' }}
                            ></span>
                            <span style={{ color: '#dc3545' }}>Actual</span>
                        </span>
                    </div>
                </div>
            </div>
            <br></br>

            {/* Territory Performance Table */}
            <div className="tpo-section">
                <h3 className="section-title">Territory Plan Comparison</h3>
                <div className="table-wrapper">
                    <table
                        className="territory-table"
                        style={{ margin: '0 auto', textAlign: 'center' }}
                    >
                        <thead className="table-header">
                            <tr>
                                <td>SALES REP</td>
                                <td>TERRITORY</td>
                                <td>DIVISION</td>
                                <td>ANNUAL TARGET</td>
                                <td>PIPELINE</td>
                                <td>COVERAGE</td>
                                <td>ATTAINMENT</td>
                                <td>GAP STATUS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {territoryData.map((row, index) => (
                                <tr className="table-row" key={index}>
                                    <td>{row.salesRep}</td>
                                    <td>{row.territory}</td>
                                    <td>{row.devision}</td>
                                    <td>{row.annualTarget}</td>
                                    <td>{row.pipeline}</td>
                                    <td>
                                        <span className="highlight-yellow">
                                            {row.coverage}
                                        </span>{' '}
                                    </td>
                                    <td>{row.attainment}</td>
                                    <td>
                                        <span className="highlight-red">{row.gapStatus}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            {/* Key Insights */}
            <div className="tpo-section">
                <h3 className="section-title">Key Insights</h3>
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
            <br></br>
        </div>
    );
};

export default AdminDashboard;
