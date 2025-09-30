import React from 'react';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

type DataItem = {
    name: string;
    target?: number;
    pipeline?: number;
    attainment?: number;
};
const CustomLegend = () => (
    <div className="chart-legend">
        <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: '#00bfae' }}></span>
            <span style={{ color: '#00bfae' }}>Target</span>
        </span>
        <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: '#5c1a33' }}></span>
            <span style={{ color: '#5c1a33' }}>Pipeline</span>
        </span>
        <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: '#d32f2f' }}></span>
            <span style={{ color: '#d32f2f' }}>Attainment %</span>
        </span>
    </div>
);
type Props = {
    data: DataItem[];
};

const TPBarChart: React.FC<Props> = ({ data }) => {
    console.log(
        'Attainment values:',
        data.map((item) => item.attainment),
    );

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} barCategoryGap="8%">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />

                <XAxis dataKey="name" stroke="#666" fontSize={12} />

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

                <Tooltip />
                <Legend content={CustomLegend} />
                <Bar dataKey="target" yAxisId="left" fill="#00bfae" radius={[2, 2, 0, 0]} />
                <Bar dataKey="pipeline" yAxisId="left" fill="#5c1a33" radius={[2, 2, 0, 0]} />
                <Bar dataKey="attainment" yAxisId="right" fill="#d32f2f" radius={[2, 2, 0, 0]} />
            </BarChart>
            {/* <div className="chart-legend">
                <span className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#17a2b8' }}></span>
                    <span style={{ color: '#17a2b8' }}>Target</span>
                </span>
                <span className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#6f42c1' }}></span>
                    <span style={{ color: '#6f42c1' }}>Pipeline</span>
                </span>
                <span className="legend-item">
                    <span className="legend-dot" style={{ backgroundColor: '#dc3545' }}></span>
                    <span style={{ color: '#dc3545' }}>Attainment %</span>
                </span>
            </div> */}
        </ResponsiveContainer>
    );
};

export default TPBarChart;
