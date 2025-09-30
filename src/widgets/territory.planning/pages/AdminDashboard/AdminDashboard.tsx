/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react';
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
import './AdminDashboard.scss';
import { BarChart2Filled, CircleInfoLined, LineChartArrowLined, UsersFilled } from '@tag/tag-icons';

import adminDashboardData from '../../data/adminDashboard.json';
import KpiCard from '../../components/kpiCard/KpiCard';
import TPPieChart from '../../components/tpPieChart/TPPieChart';
import TPBarChart from '../../components/tpBarChart/TPBarChart';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';

interface KPIData {
    label: string;
    value: string;
    change: string;
    description?: string;
}

interface KpiItem {
    label: string;
    value: string | number;
    description: string;
}
const kpiDataExample: KpiItem[] = [
    { label: 'Revenue', value: '$12,000', description: 'Monthly revenue' },
    { label: 'Users', value: '1,200', description: 'Active users' },
    { label: 'Tickets', value: '320', description: 'Support tickets' },
];

interface PerformanceData {
    name: string;
    target?: number;
    pipeline?: number;
    attainment: number;
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
    const [kpiData, setKpiData] = useState<KPIData[]>([]);
    const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
    const [quarterlyData, setQuarterlyData] = useState<QuarterlyData[]>([]);
    const [pipelineData, setPipelineData] = useState<PipelineData[]>([]);
    const [territoryData, setTerritoryData] = useState<TerritoryData[]>([]);
    const [insights, setInsights] = useState<InsightData[]>([]);

    useEffect(() => {
        if (adminDashboardData) {
            setKpiData(adminDashboardData.kpiData);
            // Compute attainment here
            const perf = adminDashboardData.performanceData.map((p: any) => ({
                ...p,
                // attainment: p.budget ? +((p.value / p.budget) * 100).toFixed(1) : 0,
            }));
            setPerformanceData(perf);
            setQuarterlyData(adminDashboardData.quarterlyData);
            setPipelineData(adminDashboardData.pipelineData);
            setTerritoryData(adminDashboardData.territoryData);

            // Map icons from string → ReactElement
            const iconMap: Record<string, ReactElement> = {
                CircleInfoLined: <CircleInfoLined accent="teal" />,
                BarChart2Filled: <BarChart2Filled accent="purple" />,
                LineChartArrowLined: <LineChartArrowLined accent="green" />,
                UsersFilled: <UsersFilled accent="blue" />,
            };
            setInsights(
                adminDashboardData.insights.map((insight: any) => ({
                    ...insight,
                    icon: iconMap[insight.icon] || <CircleInfoLined />,
                })),
            );
        }
    }, []);

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
                    <KpiCard kpiData={kpiDataExample} />
                </div>

                {/* Charts Section - Top Row */}
                <div className="charts-row">
                    {/* Performance Comparison */}
                    <div className="chart-container ">
                        <h3 className="chart-title">Rep Performance Comparison</h3>
                        <TPBarChart data={performanceData} />
                    </div>

                    {/* Pipeline Composition as Pie Chart */}
                    <div className="chart-container ">
                        <h3 className="chart-title">Pipeline Composition</h3>
                        <TPPieChart data={pipelineData} />
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
