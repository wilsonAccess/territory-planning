import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container" style={{ padding: '0px' }}>
            <div className="dashboard-header-container">
                <div className="dashboard-header-left">
                    <div className="dashboard-header-left-title">ERP DST - Deal Shape</div>
                    <div className="dashboard-header-left-item-container">
                        {' '}
                        How is this month shaping up?{' '}
                    </div>
                </div>
                <div className="dashboard-header-right"></div>
            </div>
            <div className="dashboard-erp-grid">
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
            </div>
            <div className="dashboard-cards" style={{ display: 'flex', gap: '1rem' }}>
                <div
                    className="card"
                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}
                >
                    <h3>Total Users</h3>
                    <p>1,240</p>
                </div>
                <div
                    className="card"
                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}
                >
                    <h3>Active Projects</h3>
                    <p>18</p>
                </div>
                <div
                    className="card"
                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}
                >
                    <h3>Pending Tasks</h3>
                    <p>42</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
