
import React, { useState } from 'react';
import { 
  CalendarRange, 
  FileSearch,
  Plane,
  Settings,
  Home,
  ChevronDown,
  ChevronRight,
  BarChart4,
  TableProperties,
  ClipboardList,
  FileSpreadsheet,
  Fuel,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(true);

  return (
    <div className="w-64 bg-[#0b1426] flex flex-col h-full overflow-y-auto">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
          <Plane className="text-white fill-white" size={24} />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-white leading-tight">战规系统</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">AERO STRATEGY</p>
        </div>
      </div>

      <div className="px-2 py-4 flex-1">
        <p className="text-[10px] font-bold text-slate-500 px-4 mb-4 uppercase tracking-wider">业务流程</p>
        <nav className="space-y-1">
          {/* 首页 */}
          <button
            onClick={() => setActiveTab('execution')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 group relative ${
              activeTab === 'execution' 
                ? 'bg-blue-600/10 text-blue-400' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Home size={18} className={activeTab === 'execution' ? 'text-blue-400' : 'group-hover:text-white'} />
            <span className="font-medium text-sm">首页</span>
          </button>

          {/* 公司计划 - 现在作为直接点击项，隐藏二级菜单计划进度管理 */}
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('evaluation-list')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 group ${
                activeTab === 'evaluation-list'
                  ? 'bg-blue-600/10 text-blue-400' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileSearch size={18} className={activeTab === 'evaluation-list' ? 'text-blue-400' : 'group-hover:text-white'} />
              <span className="font-medium text-sm">公司计划</span>
            </button>
          </div>

          {/* 公司计划分析 - 一级菜单 */}
          <div className="space-y-1">
            <button
              onClick={() => setIsAnalysisOpen(!isAnalysisOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded transition-all duration-200 group ${
                activeTab.startsWith('report-') 
                  ? 'bg-blue-600/10 text-blue-400' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <BarChart4 size={18} className={activeTab.startsWith('report-') ? 'text-blue-400' : 'group-hover:text-white'} />
                <span className="font-medium text-sm">公司计划分析</span>
              </div>
              {isAnalysisOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>

            {/* 二级菜单列表 */}
            {isAnalysisOpen && (
              <div className="pl-9 pr-2 space-y-0.5">
                {[
                  { id: 'report-prod-stats', label: '生产统计表', icon: TableProperties },
                  { id: 'report-trans-stats', label: '运输生产统计表', icon: TrendingUp },
                  { id: 'report-manifest', label: '舱单信息管理', icon: ClipboardList },
                  { id: 'report-yy', label: 'YY报表', icon: FileSpreadsheet },
                  { id: 'report-yt', label: 'YT报表', icon: FileSpreadsheet },
                  { id: 'report-carbon', label: '碳排放统计', icon: Fuel },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded transition-all duration-200 group ${
                      activeTab === item.id 
                        ? 'text-blue-400 font-bold bg-blue-400/5' 
                        : 'text-slate-500 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon size={15} />
                    <span className="font-medium text-[12px]">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-white transition-colors text-sm">
          <Settings size={18} />
          <span className="font-medium text-xs">系统配置</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
