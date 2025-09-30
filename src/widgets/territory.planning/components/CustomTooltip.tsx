import React from 'react';
import { TooltipContentProps } from 'recharts';
// Had an error with TooltipProps
// Importing TooltipContentProps fixed the error
// for recharts v2.1 and above
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({ active, payload, label }: TooltipContentProps<ValueType, NameType>) => {
    if (!active || !payload || !payload.length) return null;

    const current = payload.find((p) => p.dataKey === 'current')?.value;
    const previous = payload.find((p) => p.dataKey === 'previous')?.value;
    const budget = payload.find((p) => p.dataKey === 'budget')?.value;

    return (
        <div className="custom-tooltip">
            <strong>{label}</strong>
            <div style={{ color: '#00bfae' }}>${current}M</div>
            <div style={{ color: '#5c1a33' }}>${previous}M</div>
            {budget !== undefined && <div style={{ color: '#dc3545' }}>${budget}M</div>}
        </div>
    );
};

export default CustomTooltip;
