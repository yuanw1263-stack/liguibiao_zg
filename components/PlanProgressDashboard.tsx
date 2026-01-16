
import React from 'react';
import { CheckCircle2, AlertCircle, Clock, MousePointerClick } from 'lucide-react';
import CircleProgress from './CircleProgress';

interface PlanProgressDashboardProps {
  onNavigateSub?: (view: string) => void;
}

const PlanProgressDashboard: React.FC<PlanProgressDashboardProps> = ({ onNavigateSub }) => {
  const metrics = [
    { label: '预计营收 (亿元)', value: '312.4', target: '330.0', trend: '-5.3%', trendColor: 'text-red-500', barColor: 'bg-indigo-500' },
    { label: '预计成本 (亿元)', value: '180.5', target: '175.0', trend: '+3.1%', trendColor: 'text-red-500', barColor: 'bg-pink-500' },
    { label: '飞机利用率 (Hrs)', value: '10.42', target: '11.5', trend: '-9%', trendColor: 'text-red-500', barColor: 'bg-cyan-500' },
    { label: '日均起降 (架次)', value: '65.70', target: '71.0', trend: '+5%', trendColor: 'text-emerald-500', barColor: 'bg-emerald-500' },
  ];

  const milestones = [
    { name: '公司规划', id: 'corp', status: 'active', tasks: [
      { name: '飞机引进', status: 'done' },
      { name: '利用率', status: 'done' },
      { name: '飞机停场', status: 'alert' },
      { name: '维修计划', status: 'done' },
      { name: '质量管控', status: 'done' },
      { name: '改装计划', status: 'done' },
    ]},
    { name: '航网规划', id: 'marketing', status: 'active', tasks: [
      { name: '航线网络', status: 'done' },
      { name: '航班调减', status: 'alert' },
    ]},
    { name: '飞行员', id: 'pilot', status: 'active', tasks: [
      { name: '休假计划', status: 'done' },
      { name: '公务计划', status: 'done' },
      { name: '体检计划', status: 'alert' },
      { name: '训练计划', status: 'done' },
      { name: '人力分析', status: 'done' },
    ]},
    { name: '乘务员', id: 'crew', status: 'active', tasks: [
      { name: '休假计划', status: 'done' },
      { name: '公务计划', status: 'done' },
      { name: '体检计划', status: 'done' },
      { name: '训练计划', status: 'done' },
      { name: '人力分析', status: 'done' },
    ]},
    { name: '安全员', id: 'security', status: 'active', tasks: [
      { name: '人力分析', status: 'done' },
      { name: '训练计划', status: 'done' },
      { name: '体检计划', status: 'done' },
      { name: '公务计划', status: 'done' },
    ]},
    { name: '运行分析', id: 'ops', status: 'active', tasks: [ // Renamed from 运行支持
      { name: '新航线', status: 'done' },
      { name: '地服评估', status: 'done' },
      { name: '行政评估', status: 'done' },
    ]},
    { name: '训练管控', id: 'training', status: 'pending', tasks: [
      { name: '训练评估', status: 'pending' },
      { name: '资源准备', status: 'pending' },
    ]},
    { name: '运行评估', id: 'eval', status: 'pending', tasks: [
      { name: '延误评估', status: 'alert' },
      { name: '性能评估', status: 'pending' },
    ]},
  ];

  const getTaskIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle2 size={12} className="text-emerald-500" />;
      case 'alert': return <AlertCircle size={12} className="text-red-500" />;
      case 'pending': return <Clock size={12} className="text-slate-300" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold text-slate-900 tracking-wide">计划进度管理</h1>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-[10px]">系统管理员 ID: 4022-X9</span>
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] border border-slate-200 text-slate-600 font-bold">AD</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 lg:col-span-9 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">核心运营指标</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-[10px] text-slate-400 mb-2 uppercase font-bold tracking-wider">{m.label}</p>
                <div className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-tabular-nums">{m.value}</div>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mb-2">
                  <div className={`h-full ${m.barColor}`} style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">目标: {m.target}</span>
                  <span className={`${m.trendColor} font-bold`}>{m.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">机组资源配置</h3>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center gap-3 px-1">
            <CircleProgress label="飞行员" value={178} max={200} color="stroke-cyan-500" />
            <CircleProgress label="乘务员" value={289} max={305} color="stroke-emerald-500" />
            <CircleProgress label="安全员" value={78} max={85} color="stroke-orange-500" />
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-indigo-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">关键事项进度监控</h3>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-100 z-0 mx-8"></div>
          
          <div className="flex justify-between relative z-10 px-4 overflow-x-auto pb-4 gap-6 scroll-smooth scrollbar-hide">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[140px]">
                <div className={`w-8 h-8 rounded-full border-4 mb-4 flex items-center justify-center transition-all ${
                  m.status === 'active' ? 'bg-white border-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.2)]' : 'bg-white border-slate-100'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${m.status === 'active' ? 'bg-cyan-500' : 'bg-slate-200'}`}></div>
                </div>
                <button 
                  onClick={() => {
                    if (m.id === 'marketing' && onNavigateSub) onNavigateSub('network-planning');
                    if (m.id === 'pilot' && onNavigateSub) onNavigateSub('pilot-analysis');
                    // Add logic for others as needed
                  }}
                  className={`group relative flex flex-col items-center text-[11px] font-bold mb-4 transition-all hover:scale-105 active:scale-95 px-2 py-0.5 rounded cursor-pointer whitespace-nowrap ${
                    m.status === 'active' ? 'text-cyan-600 bg-cyan-50 hover:bg-cyan-100' : 'text-slate-400 bg-slate-50 cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {m.name}
                    {m.status === 'active' && <MousePointerClick size={10} className="animate-pulse" />}
                  </div>
                  {m.status === 'active' && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] bg-slate-800 text-white px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      点击查看
                    </span>
                  )}
                </button>
                <div className="space-y-1.5 w-full">
                  {m.tasks.map((t, tidx) => (
                    <div key={tidx} className="bg-slate-50 border border-slate-100 rounded px-2 py-1.5 flex items-center gap-2 group hover:border-blue-200 transition-colors cursor-default">
                      <div className="shrink-0">{getTaskIcon(t.status)}</div>
                      <span className="text-[10px] text-slate-600 truncate flex-1 font-bold">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanProgressDashboard;
