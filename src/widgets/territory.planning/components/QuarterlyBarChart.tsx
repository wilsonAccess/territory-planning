import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';

export interface QuarterlyData {
    quarter: string;
    current: number;
    previous: number;
    budget?: number; // optional
}

interface QuarterlyBarChartProps {
    data: QuarterlyData[];
}

const QuarterlyBarChart: React.FC<QuarterlyBarChartProps> = ({ data }) => {
    return (
        <div className="quarterly-charts">
            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data} barCategoryGap="10%">
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="quarter" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Bar dataKey="current" fill="#00bfae" radius={[2, 2, 0, 0]} name="Group 1" />
                    <Bar dataKey="previous" fill="#5c1a33" radius={[2, 2, 0, 0]} name="Group 2" />
                    {data.some((d) => d.budget !== undefined) && (
                        <Bar dataKey="budget" fill="#dc3545" radius={[2, 2, 0, 0]} name="Budget" />
                    )}
                </BarChart>
            </ResponsiveContainer>
            <div className="chart-legend">
                <span className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#17a2b8' }} />
                    <span style={{ color: '#17a2b8' }}>Target</span>
                </span>
                <span className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#6f42c1' }} />
                    <span style={{ color: '#6f42c1' }}>Pipeline</span>
                </span>
                {data.some((d) => d.budget !== undefined) && (
                    <span className="legend-item">
                        <span className="legend-dot" style={{ backgroundColor: '#dc3545' }} />
                        <span style={{ color: '#dc3545' }}>Actual</span>
                    </span>
                )}
            </div>
        </div>
    );
};

export default QuarterlyBarChart;
