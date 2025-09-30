import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

type dataItem = {
    name: string;
    value: number;
    color: string;
};

interface TPPieChartProps {
    data: dataItem[];
}

const TPPieChart: React.FC<TPPieChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={280}>
            <PieChart>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name }) => name}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TPPieChart;
