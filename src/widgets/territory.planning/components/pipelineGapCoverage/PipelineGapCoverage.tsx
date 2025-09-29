import React from 'react';
import './PipelineGapCoverage.css';

interface PipelineGapCoverageProps {
    coverage: number; // current pipeline in $M
    target: number; // target in $M
}

const PipelineGapCoverage: React.FC<PipelineGapCoverageProps> = ({ coverage, target }) => {
    const percentage = Math.min((coverage / target) * 100, 100); // cap at 100

    return (
        <div className="pipeline-gap-container">
            <div className="pipeline-gap-header">
                <span>Pipeline Gap Coverage: {percentage.toFixed(0)}%</span>
                <span>Target: 100%</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            <br></br>
            <br></br>{' '}
            <div className="pipeline-labels">
                <span>$0</span>
                <span>${target}M</span>
            </div>
        </div>
    );
};

export default PipelineGapCoverage;
