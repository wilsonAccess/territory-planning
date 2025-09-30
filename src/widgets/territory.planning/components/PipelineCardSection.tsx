import React from 'react';

interface PipelineCard {
    name: string;
    value: string;
    color: string;
}

interface PipelineCardSectionProps {
    title: string;
    data: PipelineCard[];
}

const PipelineCardSection: React.FC<PipelineCardSectionProps> = ({ title, data }) => {
    return (
        <div className="dashboard-pipeline-card">
            <div className="dashboard-pipeline-card-title">{title}</div>
            <div className="dashboard-pipeline-card-content">
                {data.map((item, index) => (
                    <div key={index} className="dashboard-pipeline-card-row">
                        <div className="dashboard-pipeline-card-item">
                            <div className="dashboard-pipeline-card-item-left">
                                <div
                                    className="dashboard-pipeline-card-item-color"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div className="dashboard-pipeline-card-item-name">{item.name}</div>
                            </div>
                            <div className="dashboard-pipeline-card-item-right">
                                <div className="dashboard-pipeline-card-item-value">
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PipelineCardSection;
