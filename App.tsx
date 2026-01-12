
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PlanProgressDashboard from './components/PlanProgressDashboard';
import ExecutionMonitor from './components/ExecutionMonitor';
import EvaluationList from './components/EvaluationList';
import { 
  Bell, 
  Search,
  ArrowLeft,
  AlertTriangle,
  Info,
  ArrowUpRight,
  TrendingDown,
  Users2,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('execution');
  const [subTab, setSubTab] = useState<string | null>(null);

  const handleDetailedAnalysis = () => {
    setActiveTab('annual-plan');
    setSubTab(null);
  };

  const renderMarketingAnalysis = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <button onClick={() => setSubTab(null)} className="p-2 hover:bg-white bg-white rounded-lg transition-colors border border-slate-200 shadow-sm">
            <ArrowLeft size={18} className="text-slate-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 bg-cyan-500 rounded-full"></div>
            <h1 className="text-xl font-bold text-slate-900">营销测算中心分析</h1>
          </div>
          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
            <CheckCircle2 size={12} /> 已确认
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-[10px]">版本: 2026-V1.2</span>
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] border border-slate-200 text-slate-600 font-bold">V</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "日均航班量", value: "326", trend: "+2.4%", color: "text-blue-700" },
          { label: "客公里收入", value: "0.512", trend: "+5.01%", color: "text-blue-600" },
          { label: "平均票价", value: "39,720", trend: "+3.01%", color: "text-indigo-600" },
          { label: "飞机利用率", value: "10.85", trend: "+0.5h", color: "text-purple-600" },
          { label: "座公里收入", value: "0.457", trend: "+3.01%", color: "text-cyan-600" },
          { label: "客座率", value: "91.5%", trend: "+2.1%", color: "text-emerald-600" }
        ].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[11px] text-slate-500 mb-3 font-bold uppercase tracking-wider">{m.label}</p>
            <div className={`text-3xl font-black ${m.color} mb-2 tracking-tight`}>{m.value}</div>
            <div className="text-emerald-500 text-[10px] flex items-center gap-1 font-bold">
              <ArrowUpRight size={12} /> {m.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 flex items-center gap-2 border-b border-slate-100">
            <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">航线计划说明</h3>
          </div>
          <div className="p-6 space-y-5 flex-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">计划新增航点</span>
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">西安, 重庆</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">运力投放</span>
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">长沙 7; 昆明 5; 无锡 5</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">总航线条数</span>
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">72条 (增加4条)</span>
            </div>
            <div className="mt-6 p-4 bg-slate-50 border border-slate-100 rounded-lg">
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                <span className="font-bold text-slate-800">调整说明:</span> 本次调整主要优化华东区域时刻质量，提升单位航段收益，针对高流量季节性航点进行了运力倾斜。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 flex items-center gap-2 border-b border-slate-100">
            <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">总营收分析</h3>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 144 144">
                <circle cx="72" cy="72" r="62" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                <circle cx="72" cy="72" r="62" stroke="#0ea5e9" strokeWidth="10" fill="transparent" strokeDasharray="389.5" strokeDashoffset="15.6" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[10px] text-slate-400 font-bold">达成率</span>
                <span className="text-xl font-black text-slate-900">104%</span>
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-widest">预计总营收估算</span>
              <div className="flex items-baseline justify-center sm:justify-start gap-1 mb-2">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">2,600,000,000</span>
                <span className="text-xs text-slate-400 font-bold">元</span>
              </div>
              <div className="bg-emerald-50 text-emerald-600 text-[10px] px-2 py-1 rounded-md border border-emerald-100 font-bold self-center sm:self-start flex items-center gap-1">
                <ArrowUpRight size={12} /> 同比去年 +4.13%
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 flex items-center gap-2 border-b border-slate-100">
            <div className="w-1 h-3 bg-red-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">总成本分析</h3>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 144 144">
                <circle cx="72" cy="72" r="62" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                <circle cx="72" cy="72" r="62" stroke="#f43f5e" strokeWidth="10" fill="transparent" strokeDasharray="389.5" strokeDashoffset="46.7" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[10px] text-slate-400 font-bold">预算使用</span>
                <span className="text-xl font-black text-slate-900">88%</span>
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-widest">预计总成本估算</span>
              <div className="flex items-baseline justify-center sm:justify-start gap-1 mb-2">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">1,950,000,000</span>
                <span className="text-xs text-slate-400 font-bold">元</span>
              </div>
              <div className="bg-blue-50 text-blue-600 text-[10px] px-2 py-1 rounded-md border border-blue-100 font-bold self-center sm:self-start flex items-center gap-1">
                <TrendingDown size={12} /> 同比去年 -2.15%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 flex items-center gap-2 border-b border-slate-100">
          <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800">航网规划明细</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
              <tr>
                <th className="py-4 px-6">架次</th>
                <th className="py-4 px-4">出发</th>
                <th className="py-4 px-4">到达1</th>
                <th className="py-4 px-4">到达2</th>
                <th className="py-4 px-4">出发时刻</th>
                <th className="py-4 px-4">到达时刻</th>
                <th className="py-4 px-4">机型</th>
                <th className="py-4 px-4">班期</th>
                <th className="py-4 px-4">有效期</th>
                <th className="py-4 px-4">客座率</th>
                <th className="py-4 px-6 text-right">营收 (元)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: '01', dep: '长沙', arr1: '成都天府', arr2: '烟台', depT: '07:20', arrT: '10:15', type: 'A320', schedule: '1/2/3/4/5/6/7', validity: '2025-10-30 ~ 2026-03-27', load: '95%', rev: '43,211' },
                { id: '02', dep: '昆明', arr1: '海拉尔', arr2: '青岛', depT: '09:20', arrT: '12:40', type: 'A320', schedule: '1/2/3/4/5/6/7', validity: '2025-10-30 ~ 2026-03-27', load: '92%', rev: '38,540' },
                { id: '03', dep: '无锡', arr1: '三亚', arr2: '长沙', depT: '08:15', arrT: '11:50', type: 'A321', schedule: '1/3/5/7', validity: '2025-11-15 ~ 2026-02-28', load: '94%', rev: '41,800' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">{row.id}</td>
                  <td className="py-4 px-4">{row.dep}</td>
                  <td className="py-4 px-4">{row.arr1}</td>
                  <td className="py-4 px-4">{row.arr2}</td>
                  <td className="py-4 px-4 font-medium">{row.depT}</td>
                  <td className="py-4 px-4 font-medium">{row.arrT}</td>
                  <td className="py-4 px-4"><span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-500">{row.type}</span></td>
                  <td className="py-4 px-4 text-blue-600 font-bold">{row.schedule}</td>
                  <td className="py-4 px-4 whitespace-nowrap text-[10px] text-slate-400 font-medium">{row.validity}</td>
                  <td className="py-4 px-4 font-black text-blue-600">{row.load}</td>
                  <td className="py-4 px-6 text-right font-bold text-slate-900">{row.rev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderHRAssessment = () => {
    const monthsShort = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={() => setSubTab(null)} className="p-2 hover:bg-white bg-white rounded-lg transition-colors border border-slate-200 shadow-sm">
              <ArrowLeft size={18} className="text-slate-600" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4 bg-cyan-500 rounded-full"></div>
              <h1 className="text-xl font-bold text-slate-900">飞行员分析</h1>
            </div>
            <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded border border-orange-100 flex items-center gap-1">
              <Clock size={12} /> 待确认
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <p className="text-[11px] text-slate-500 mb-4 font-bold uppercase tracking-widest">机组人数</p>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-600 font-bold">机长</span>
                <span className="text-sm font-black text-blue-600">85<span className="text-xs text-slate-400 font-medium">(87)</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-600 font-bold">副驾</span>
                <span className="text-sm font-black text-indigo-600">92<span className="text-xs text-slate-400 font-medium">(90)</span></span>
              </div>
            </div>
          </div>
          {[
            { label: "月均小时", value: "78.5", unit: "h", color: "text-blue-600" },
            { label: "人机比", value: "8 : 1", unit: "", color: "text-indigo-600" },
            { label: "日均小时", value: "2.57", unit: "h", color: "text-cyan-600" }
          ].map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[11px] text-slate-500 mb-4 font-bold uppercase tracking-widest">{m.label}</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-black ${m.color} tracking-tighter`}>{m.value}</span>
                {m.unit && <span className="text-sm text-slate-400 font-bold">{m.unit}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 flex items-center gap-2 border-b border-slate-100 bg-slate-50/50">
            <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">飞行员保障效能测算 (年度明细)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-[11px] border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-[#fff9db] font-bold text-slate-900 border-b border-slate-300">
                  <th className="py-3 px-4 border-r border-slate-300 bg-[#fff9db] sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">月份</th>
                  {monthsShort.map(m => <th key={m} className="py-3 px-4 border-r border-slate-300">{m}</th>)}
                </tr>
              </thead>
              <tbody className="font-bold text-slate-800">
                <tr className="border-b border-slate-200">
                  <td className="py-2.5 px-4 bg-[#fff9db] border-r border-slate-300 sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">月天数</td>
                  {[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-300">{v}</td>)}
                </tr>
                {/* Crew Utilization moved below Monthly Days */}
                <tr className="border-b border-slate-200">
                  <td className="py-2.5 px-4 bg-[#fff9db] border-r border-slate-300 sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">机组利用率</td>
                  {[11.34, 12.70, 11.57, 11.61, 11.48, 12.82, 13.72, 13.91, 12.30, 12.03, 10.51, 10.98].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-300">{v}</td>)}
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2.5 px-4 bg-[#fff9db] border-r border-slate-300 sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">机长理论月均飞行小时</td>
                  {[84.94, 76.72, 84.94, 79.5, 82.15, 79.5, 82.15, 82.15, 79.5, 82.15, 82.2, 84.94].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-300">{v}</td>)}
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2.5 px-4 bg-[#fff9db] border-r border-slate-300 sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">副驾驶月均飞行小时</td>
                  {[84.94, 79.46, 84.94, 79.5, 82.15, 79.5, 82.15, 82.15, 79.5, 82.15, 82.2, 84.94].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-300">{v}</td>)}
                </tr>
                {/* Background color removed for this row */}
                <tr className="border-b border-slate-300 bg-white">
                  <td className="py-2.5 px-4 font-black border-r border-slate-300 sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">机组总保障小时</td>
                  {[5273.4, 5334.2, 5380.3, 5225.8, 5338.7, 5769.1, 6377.5, 6467.6, 5533.2, 5593.6, 4729.2, 5103.5].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-300">{v}</td>)}
                </tr>
                <tr className="border-b border-slate-300 bg-[#f8d7da]">
                  <td className="py-2.5 px-4 bg-[#f8d7da] border-r border-slate-400 sticky left-0 z-10 shadow-[1px_0_0_0_#fecaca]">市场计划小时</td>
                  {[5127, 5190, 5268, 5065, 5257, 5729, 6314, 6335, 5373, 5365, 4623, 4770].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-400">{v}</td>)}
                </tr>
                <tr className="bg-white">
                  <td className="py-2.5 px-4 bg-white border-r border-slate-300 sticky left-0 z-10 shadow-[1px_0_0_0_#cbd5e1]">差值</td>
                  {[146.3, 143.7, 111.9, 160.4, 82.0, 40.5, 63.2, 133.1, 160.0, 228.9, 105.9, 333.9].map((v, i) => <td key={i} className="py-2.5 px-4 border-r border-slate-300">{v}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 flex items-center gap-2 border-b border-slate-100 bg-slate-50/50">
            <div className="w-1 h-3 bg-indigo-500 rounded-full"></div>
            <h3 className="text-sm font-bold text-slate-800">各职级人力需求/变动明细</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-[11px] border-collapse">
              <thead className="bg-slate-50 font-bold text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-3 px-6 text-left border-r border-slate-200 sticky left-0 bg-slate-50 z-10 shadow-[1px_0_0_0_#e2e8f0] w-48">职级</th>
                  {monthsShort.concat('合计').map(m => (
                    <th key={m} className="py-3 px-1 border-r border-slate-100 uppercase tracking-widest min-w-[60px]">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {[
                  { rank: '高级机长以上', vals: [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4] },
                  { rank: 'B类机长', vals: [1, 1, 3, 0, 4, 1, 0, 0, 0, 0, 0, 0, 10] },
                  { rank: 'A类机长', vals: [1, 1, 3, 0, 4, 1, 0, 0, 0, 0, 0, 0, 10] },
                  { rank: 'F3以上副驾驶', vals: [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4] },
                  { rank: '储备人员', vals: [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4] }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="py-4 px-6 text-left font-bold text-slate-900 border-r border-slate-200 sticky left-0 bg-white z-10 shadow-[1px_0_0_0_#e2e8f0] whitespace-nowrap">{row.rank}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className={`py-4 px-1 border-r border-slate-100 font-tabular-nums ${v > 0 ? 'text-indigo-600 font-bold' : 'text-slate-300'}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'annual-plan':
        if (subTab === 'marketing-analysis') return renderMarketingAnalysis();
        if (subTab === 'hr-assessment') return renderHRAssessment();
        return <PlanProgressDashboard onNavigateSub={setSubTab} />;
      case 'execution':
        return <ExecutionMonitor />;
      case 'evaluation':
        return <EvaluationList onDetailedAnalysis={handleDetailedAnalysis} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setSubTab(null); }} />
      
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span>调度中心</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold">
                {activeTab === 'annual-plan' ? '计划进度情况' : 
                 activeTab === 'execution' ? '运行监控' : '计划评估管理'}
                {subTab && <span className="text-slate-400 ml-1 font-normal">/ {subTab === 'marketing-analysis' ? '营销收益分析' : '飞行员分析'}</span>}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
              <Search size={14} className="text-slate-400" />
              <input type="text" placeholder="快速搜索..." className="bg-transparent border-none outline-none text-[11px] text-slate-600 placeholder:text-slate-400 w-32 font-medium" />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer group pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">产品管理</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-tighter font-bold">战略规划部</p>
              </div>
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs border border-blue-100 transition-all group-hover:border-blue-400">战</div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 scroll-smooth bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
