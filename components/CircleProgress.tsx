
import React from 'react';

interface CircleProgressProps {
  label: string;
  value: number;
  max: number;
  color: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ label, value, max, color }) => {
  const percentage = (value / max) * 100;
  const radius = 22; 
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className="relative w-14 h-14">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            className="text-slate-50"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[9px] text-slate-900 font-black">{Math.round(percentage)}%</span>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-[10px] font-black leading-none mb-0.5 whitespace-nowrap ${color.replace('stroke-', 'text-')}`}>{label}</p>
        <p className="text-[8px] text-slate-400 font-bold whitespace-nowrap">{value}/{max}</p>
      </div>
    </div>
  );
};

export default CircleProgress;
