
import React, { useState } from 'react';
import { Activity, Clock, User, ChevronRight, X, Layout, Layers, FileText, Send, Filter, Search, Calendar } from 'lucide-react';

interface EvaluationListProps {
  onDetailedAnalysis?: () => void;
}

const EvaluationList: React.FC<EvaluationListProps> = ({ onDetailedAnalysis }) => {
  const [activeTab, setActiveTab] = useState('ANNUAL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const evaluations = [
    {
      id: 'A-01',
      category: 'ANNUAL',
      title: '2026年度运行计划-V1.0 (标准版)',
      creator: '张三',
      time: '2025-10-01',
      revenue: '312.4亿',
      cost: '280.1亿',
      crewStatus: '满足运行',
      crewColor: 'text-emerald-600',
      status: '已归档',
      statusColor: 'bg-slate-100 text-slate-500'
    },
    {
      id: 'A-02',
      category: 'ANNUAL',
      title: '2026年度运行计划-V1.1 (挑战版)',
      creator: '张三',
      time: '2025-10-15',
      revenue: '335.2亿',
      cost: '295.4亿',
      crewStatus: '飞行员缺口2人',
      crewColor: 'text-orange-500',
      status: '评估中',
      statusColor: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'Q-01',
      category: 'QUARTERLY',
      title: '26年夏秋航季计划评估-V1.0',
      creator: '李四',
      time: '2026-02-10',
      revenue: '145.2亿',
      cost: '120.5亿',
      crewStatus: '满足运行',
      crewColor: 'text-emerald-600',
      status: '进行中',
      statusColor: 'bg-emerald-50 text-emerald-600'
    }
  ];

  const filteredEvals = evaluations
    .filter(e => e.category === activeTab)
    .filter(e => e.title.includes(searchQuery));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-slate-900 tracking-wide">计划评估管理</h1>
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-sm">
            {[
              { id: 'ANNUAL', label: '年度计划', icon: Layout },
              { id: 'QUARTERLY', label: '季度计划', icon: Layers },
              { id: 'SPECIAL', label: '专项评估', icon: FileText },
            ].map(t => (
              <button 
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${
                  activeTab === t.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <t.icon size={14} />
                {t.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Buttons moved to top right according to the red box in the image */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border transition-all shadow-sm ${
                showFilterPanel ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Filter size={14} /> 筛选
            </button>
            {showFilterPanel && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-4 animate-in fade-in slide-in-from-top-2">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">名称查询</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="输入版本名称..." 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">创建时间</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                      <input 
                        type="date" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <button onClick={() => setShowFilterPanel(false)} className="w-full bg-blue-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors">确认筛选</button>
                </div>
              </div>
            )}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-xs flex items-center gap-2 font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
          >
            <span className="text-lg leading-none">+</span> 创建评估版本
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm min-h-[600px]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
            {activeTab === 'ANNUAL' ? '2026年年度计划评估' : activeTab === 'QUARTERLY' ? '26年夏秋航季计划评估' : '26年春运加班计划评估'}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            {activeTab === 'ANNUAL' ? '统筹管理年度计划测算及其变体版本' : activeTab === 'QUARTERLY' ? '针对航季大交替期间的运力网络及资源饱和度评估' : '针对春运、暑运等高密度运行周期的专项保障测算'}
          </p>
        </div>

        <div className="space-y-4">
          {filteredEvals.map((v) => (
            <div key={v.id} className="bg-white border border-slate-100 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{v.title}</h3>
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 font-medium">
                      <span className="flex items-center gap-1"><User size={12} /> {v.creator}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {v.time}</span>
                      <span className="bg-slate-50 px-2 py-0.5 rounded text-slate-500 border border-slate-100">ID: {v.id}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] px-2.5 py-1 rounded font-bold uppercase ${v.statusColor}`}>{v.status}</span>
                  <button onClick={onDetailedAnalysis} className="text-xs bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-600 px-4 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1">
                    分析详情 <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-50 pt-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">测算总营收</p>
                  <p className="text-lg font-bold text-slate-900">{v.revenue}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">预计总成本</p>
                  <p className="text-lg font-bold text-slate-900">{v.cost}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">资源确认状态</p>
                  <p className={`text-sm font-bold ${v.crewColor}`}>{v.crewStatus}</p>
                </div>
              </div>
            </div>
          ))}
          {filteredEvals.length === 0 && (
            <div className="py-20 text-center text-slate-300 font-medium bg-slate-50 rounded-xl border-dashed border-2 border-slate-200">
               未找到匹配的评估版本
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900">创建计划评估版本</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
            </div>
            <div className="p-8 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">版本标题</label>
                <input type="text" placeholder="例如: 2026年度运行计划-V3.0" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">评估类别</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none">
                    <option value="ANNUAL">年度计划</option>
                    <option value="QUARTERLY">季度计划</option>
                    <option value="SPECIAL">专项评估</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">基准版本</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none">
                    <option>无</option>
                    <option>2026-V1.0 (标准)</option>
                    <option>2026-V1.1 (挑战)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">评估备注</label>
                <textarea rows={3} placeholder="输入该评估版本的核心调整逻辑..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none resize-none"></textarea>
              </div>
            </div>
            <div className="p-6 bg-slate-50 flex gap-3">
               <button onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">取消</button>
               <button className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                 <Send size={16} /> 提交测算
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationList;
