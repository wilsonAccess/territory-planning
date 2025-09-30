import React from 'react';
import './LoadingRefresh.css';

const LoadingRefresh: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Refreshing data...</p>
        </div>
    );
};

export default LoadingRefresh;
