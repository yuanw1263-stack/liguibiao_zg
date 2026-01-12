
import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ArrowRight,
  Plane,
  Building2,
  Users,
  HardHat,
  MonitorCheck
} from 'lucide-react';
import { WorkflowStatus, DepartmentStatus } from '../types';

const AnnualPlanWorkflow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WorkflowStatus>(WorkflowStatus.NOT_STARTED);
  
  const depts: DepartmentStatus[] = [
    { name: '飞行部', status: 'DONE', progress: 100, lastUpdate: '2024-10-12 10:30', feedback: '飞行员资源评估完成' },
    { name: '乘务部', status: 'PREPARING', progress: 85, lastUpdate: '2024-10-12 14:15', feedback: '外籍乘务员配比优化中' },
    { name: '工程部', status: 'PREPARING', progress: 60, lastUpdate: '2024-10-12 11:20', feedback: '宽体机定检计划录入' },
    { name: '地服部', status: 'ISSUE', progress: 30, lastUpdate: '2024-10-12 09:00', feedback: '三方协议结算延迟' },
    { name: '航安部', status: 'DONE', progress: 100, lastUpdate: '2024-10-11 16:45', feedback: '安全阈值校准' },
  ];

  const handleInitiate = () => {
    setCurrentStep(WorkflowStatus.PREPARING);
    // In real app, this would trigger API notifications
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'DONE': return <span className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs"><CheckCircle2 size={12}/> 已就绪</span>;
      case 'PREPARING': return <span className="flex items-center gap-1 text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded text-xs"><Clock size={12}/> 准备中</span>;
      case 'ISSUE': return <span className="flex items-center gap-1 text-red-400 bg-red-400/10 px-2 py-1 rounded text-xs"><AlertCircle size={12}/> 异常</span>;
      default: return <span className="flex items-center gap-1 text-slate-400 bg-slate-400/10 px-2 py-1 rounded text-xs">待处理</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Initiation Header */}
      <div className="bg-[#0f172a] border border-[#1e293b] p-6 rounded-xl flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">2026 年度计划启动</h2>
          <p className="text-slate-400 text-sm italic">当前计划状态：<span className="text-blue-500 font-semibold">{currentStep}</span></p>
        </div>
        {currentStep === WorkflowStatus.NOT_STARTED && (
          <button 
            onClick={handleInitiate}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            <Play size={18} fill="currentColor" />
            启动年度计划 (10月启动窗)
          </button>
        )}
      </div>

      {/* Progress Timeline */}
      <div className="flex items-center justify-between px-10 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0 mx-20"></div>
        {[
          { icon: Play, label: '计划启动', step: WorkflowStatus.PREPARING },
          { icon: Building2, label: '数据准备', step: WorkflowStatus.PLANNING },
          { icon: Network, label: '航网编排', step: WorkflowStatus.CONFIRMING },
          { icon: MonitorCheck, label: '保障确认', step: WorkflowStatus.APPROVING },
          { icon: FileCheck, label: '公司审批', step: WorkflowStatus.ACTIVE },
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
              idx === 0 ? 'bg-blue-600 border-blue-600' : 'bg-[#0f172a] border-[#1e293b] text-slate-600'
            }`}>
              {idx === 0 ? <CheckCircle2 size={20} className="text-white" /> : <item.icon size={20} />}
            </div>
            <span className="text-xs font-medium text-slate-400">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Department Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl overflow-hidden">
          <div className="p-4 border-b border-[#1e293b] flex justify-between items-center bg-[#131b2e]">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Building2 size={18} className="text-blue-500" />
              部门数据准备监控
            </h3>
            <span className="text-xs text-slate-400">实时同步各业务系统数据状态</span>
          </div>
          <div className="divide-y divide-[#1e293b]">
            {depts.map((dept, i) => (
              <div key={i} className="p-4 hover:bg-white/5 transition-colors">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-200">{dept.name}</span>
                  {getStatusBadge(dept.status)}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        dept.status === 'ISSUE' ? 'bg-red-500' : 'bg-blue-500'
                      }`} 
                      style={{ width: `${dept.progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap">{dept.progress}%</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-[10px] text-slate-500 italic">反馈: {dept.feedback}</span>
                  <span className="text-[10px] text-slate-600">{dept.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Network Planning Info */}
        <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#1e293b] flex justify-between items-center bg-[#131b2e]">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Plane size={18} className="text-indigo-500" />
              营销委：航网编排与连线
            </h3>
            <button className="text-xs text-blue-500 hover:underline">进入编排系统</button>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-1 bg-indigo-500/5 border border-indigo-500/20 rounded-lg p-4 text-center">
                <div className="text-indigo-400 text-xs mb-1 font-medium">投入飞机数</div>
                <div className="text-2xl font-bold text-white tracking-wider">102</div>
              </div>
              <div className="flex-1 bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-blue-400 text-xs mb-1 font-medium">规划连线(Rotation)</div>
                <div className="text-2xl font-bold text-white tracking-wider">102</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">典型航班连线示例</h4>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">B-1801</span>
                  <div className="flex-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                    <span>长沙</span> <ArrowRight size={10}/> <span>成都</span> <ArrowRight size={10}/> <span>北京</span> <ArrowRight size={10}/> <span>成都</span> <ArrowRight size={10}/> <span>长沙</span> <ArrowRight size={10}/> <span>昆明</span> <ArrowRight size={10}/> <span>长沙</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">B-2204</span>
                  <div className="flex-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                    <span>上海</span> <ArrowRight size={10}/> <span>三亚</span> <ArrowRight size={10}/> <span>上海</span> <ArrowRight size={10}/> <span>西安</span> <ArrowRight size={10}/> <span>上海</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-lg">
              <p className="text-xs text-yellow-500/80 leading-relaxed">
                <AlertCircle size={14} className="inline mr-1 -mt-0.5" />
                正在进行航网效益评估：预计年度ASK增长12.4%，当前瓶颈点集中在西北航线时刻资源配比。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualPlanWorkflow;
import { FileCheck, Network } from 'lucide-react';
