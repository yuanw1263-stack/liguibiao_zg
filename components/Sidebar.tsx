
import React from 'react';
import { 
  CalendarRange, 
  Activity, 
  Settings, 
  FileSearch,
  Plane
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'execution', label: '运行监控', icon: Activity },
    { id: 'evaluation', label: '计划评估管理', icon: FileSearch },
    { id: 'annual-plan', label: '计划进度情况', icon: CalendarRange },
  ];

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
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 group relative ${
                activeTab === item.id 
                  ? 'bg-blue-600/10 text-blue-400' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={18} className={activeTab === item.id ? 'text-blue-400' : 'group-hover:text-white'} />
              <span className="font-medium text-sm">{item.label}</span>
              {activeTab === item.id && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-l-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              )}
            </button>
          ))}
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
