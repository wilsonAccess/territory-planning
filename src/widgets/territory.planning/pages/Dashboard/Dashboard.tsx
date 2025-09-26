import './Dashboard.css';

const Dashboard = () => {
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
                <div className="dashboard-header-right"></div>
            </div>
            <div className="dashboard-erp-grid">
                <div className="dashboard-erp-grid-card">
                    <div className="dashboard-erp-grid-card-title">QUOTA</div>
                    <div className="dashboard-erp-grid-card-value">$3500K</div>
                    <div className="dashboard-erp-grid-card-subtitle">GAP TO QUOTA</div>
                    <div className="dashboard-erp-grid-card-subvalue">$2700K</div>
                </div>
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
                <div className="dashboard-erp-grid-card"></div>
            </div>
            <div className="dashboard-pipeline-trend-container">
                <div className="dashboard-pipeline-trend">
                    <div className="dashboard-pipeline-visualization"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
