
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: { value: string; positive: boolean };
  icon: LucideIcon;
  colorClass: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ label, value, subValue, trend, icon: Icon, colorClass }) => {
  return (
    <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-xl">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg bg-opacity-10 ${colorClass.replace('text', 'bg')}`}>
          <Icon className={colorClass} size={20} />
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend.positive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {trend.value}
          </span>
        )}
      </div>
      <div>
        <p className="text-slate-400 text-sm mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-white">{value}</h3>
          {subValue && <span className="text-slate-500 text-xs">{subValue}</span>}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
