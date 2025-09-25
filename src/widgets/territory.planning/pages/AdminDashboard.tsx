import './AdminDashboard.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

/* --- TypeScript Interfaces --- */
interface RepData {
    name: string;
    target: number;
    attainment: number;
}

interface PipelineData {
    name: string;
    value: number;
    [key: string]: string | number;
}

interface TerritoryData {
    rep: string;
    team: string;
    division: string;
    subDivision: string;
    annualTarget: number;
    pipeline: number;
    coverage: number;
    attainment: number;
    gap: number;
}

/* --- Sample Data --- */
const repData: RepData[] = [
    { name: 'John', target: 10, attainment: 8 },
    { name: 'Sarah', target: 12, attainment: 15 },
    { name: 'David', target: 8, attainment: 9 },
    { name: 'Michael', target: 11, attainment: 10 },
];

const pipelineData: PipelineData[] = [
    { name: 'Cross-Sell', value: 25 },
    { name: 'New Business', value: 37 },
    { name: 'Upsell', value: 34 },
    { name: 'Lost', value: 4 },
];

const pipelineColors: string[] = ['#F9A825', '#8E24AA', '#039BE5', '#FF7043'];

const territoryData: TerritoryData[] = [
    {
        rep: 'John Smith',
        team: 'Downtown',
        division: 'AMC',
        subDivision: 'ERP-237',
        annualTarget: 7400000,
        pipeline: 6700000,
        coverage: 15,
        attainment: 23,
        gap: 700000,
    },
    {
        rep: 'Sarah Johnson',
        team: 'SWIM',
        division: 'CRM',
        subDivision: 'CRM',
        annualTarget: 12100000,
        pipeline: 8400000,
        coverage: 14,
        attainment: 40,
        gap: 3700000,
    },
    {
        rep: 'Michael Wong',
        team: 'AMC',
        division: 'HCM',
        subDivision: 'HCM',
        annualTarget: 8000000,
        pipeline: 7200000,
        coverage: 17,
        attainment: 20,
        gap: 800000,
    },
];

/* --- Component --- */
const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>

            {/* Rep Performance Chart */}
            <div className="chart-card">
                <h3>Rep Performance Comparison</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={repData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" stroke="#0D9488" />
                        <YAxis yAxisId="right" orientation="right" stroke="#B91C1C" />
                        <Tooltip />
                        <Legend />
                        <Bar
                            yAxisId="left"
                            dataKey="target"
                            fill="#0D9488"
                            barSize={20}
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            yAxisId="right"
                            dataKey="attainment"
                            fill="#B91C1C"
                            barSize={20}
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Pipeline Pie Chart */}
            <div className="chart-card">
                <h3>Pipeline Composition</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={pipelineData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            labelLine={false}
                        >
                            {pipelineData.map((entry, idx) => (
                                <Cell
                                    key={idx}
                                    fill={pipelineColors[idx % pipelineColors.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Territory Table */}
            <div className="table-card">
                <h3>Territory Plan Comparison</h3>
                <table className="table">
                    <thead>
                        <tr>
                            {[
                                'Rep',
                                'Team',
                                'Division',
                                'Sub Division',
                                'Annual Target',
                                'Pipeline',
                                'Coverage',
                                'Attainment',
                                'Gap',
                            ].map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {territoryData.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.rep}</td>
                                <td>{row.team}</td>
                                <td>{row.division}</td>
                                <td>{row.subDivision}</td>
                                <td>${row.annualTarget.toLocaleString()}</td>
                                <td>${row.pipeline.toLocaleString()}</td>
                                <td>{row.coverage}x</td>
                                <td>{row.attainment}%</td>
                                <td>${row.gap.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
