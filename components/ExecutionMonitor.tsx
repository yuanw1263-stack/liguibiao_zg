
import React, { useState } from 'react';
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChevronDown, Calendar, BarChart3, Users, Clock, Activity, AlertTriangle, TrendingUp, DollarSign, Layout, Layers, FileText } from 'lucide-react';

const ExecutionMonitor: React.FC = () => {
  const [monitorType, setMonitorType] = useState<'annual' | 'monthly'>('annual');
  const [selectedMonth, setSelectedMonth] = useState('10月');
  const [selectedYear, setSelectedYear] = useState('2026年');
  
  const dashboardMetrics = [
    { label: "计划达成率", value: "98.2%", trend: "+2.4%", trendColor: 'text-emerald-500', icon: BarChart3, color: "text-blue-500" },
    { label: "资源饱和度", value: "92%", trend: "-1.2%", trendColor: 'text-red-500', icon: Users, color: "text-purple-500" },
    { label: "平均利用率", value: "10.8h", trend: "+0.5h", trendColor: 'text-emerald-500', icon: Clock, color: "text-green-500" },
    { label: "运行风险点", value: "3", trend: "需关注", trendColor: 'text-orange-500', icon: AlertTriangle, color: "text-red-500" },
  ];

  const metricsCards = [
    { label: '总营收', val: '285.2亿', target: '312.4亿', rate: '91.2%', color: 'bg-red-500' },
    { label: '飞机利用率', val: '10.42', target: '10.85 Hrs', rate: '96%', color: 'bg-cyan-500' },
    { label: '起降架次', val: '24,111', target: '24,999', rate: '96.4%', color: 'bg-emerald-500' },
    { label: '客座率', val: '91.5%', target: '92.0%', rate: '99.4%', color: 'bg-orange-500' },
  ];

  const annualTableData = [
    { name: '平均飞机架数', unit: '', standard: '17.00', challenge: '18.00', ly: '16.50', actual: '17.00', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '座公里', unit: '(万座公里)', standard: '712,039', challenge: '750,000', ly: '680,450', actual: '712,039', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '客公里', unit: '(万人公里)', standard: '654,981', challenge: '690,000', ly: '620,330', actual: '654,981', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '客座率', unit: '(%)', standard: '92.0', challenge: '94.0', ly: '91.2', actual: '91.5', diff: '-0.5%', diffColor: 'text-red-500' },
    { name: '旅客人数', unit: '(人次)', standard: '3,828,227', challenge: '4,100,000', ly: '3,650,400', actual: '3,828,227', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '起降架次', unit: '(架次)', standard: '23,468', challenge: '25,000', ly: '22,800', actual: '23,468', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '飞行里程', unit: '(万公里)', standard: '3,905', challenge: '4,100', ly: '3,750', actual: '3,905', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '平均航距', unit: '(公里)', standard: '1,479', challenge: '1,500', ly: '1,450', actual: '1,479', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '每客运程', unit: '(公里)', standard: '1,518', challenge: '1,550', ly: '1,500', actual: '1,518', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '轮档小时', unit: '(小时)', standard: '59,985', challenge: '63,000', ly: '57,400', actual: '59,985', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '飞机日利用率', unit: '(h/d)', standard: '10.0', challenge: '11.2', ly: '9.8', actual: '10.2', diff: '+2.0%', diffColor: 'text-emerald-500' },
    { name: '货邮运量', unit: '(吨)', standard: '10,972', challenge: '12,000', ly: '10,200', actual: '10,972', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '小时ASK', unit: '', standard: '11.8', challenge: '12.5', ly: '11.5', actual: '11.8', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '小时油耗', unit: '(吨)', standard: '2.43', challenge: '2.35', ly: '2.45', actual: '2.43', diff: '+0.0%', diffColor: 'text-emerald-500' },
    { name: '耗油量', unit: '(吨)', standard: '145,892', challenge: '155,000', ly: '140,200', actual: '145,892', diff: '+0.0%', diffColor: 'text-emerald-500' },
  ];

  const rawMonthlyData = [
    { name: '1月', budgetHours: 4525, actualHours: 4505, budgetUtil: 9.74, actualUtil: 9.69 },
    { name: '2月', budgetHours: 4139, actualHours: 4142, budgetUtil: 9.86, actualUtil: 9.86 },
    { name: '3月', budgetHours: 4015, actualHours: 3850, budgetUtil: 8.63, actualUtil: 8.28 },
    { name: '4月', budgetHours: 4401, actualHours: 4012, budgetUtil: 9.16, actualUtil: 8.46 },
    { name: '5月', budgetHours: 4448, actualHours: 4352, budgetUtil: 8.97, actualUtil: 8.78 },
    { name: '6月', budgetHours: 4610, actualHours: 4842, budgetUtil: 9.61, actualUtil: 10.09 },
    { name: '7月', budgetHours: 5222, actualHours: 5356, budgetUtil: 10.53, actualUtil: 10.80 },
    { name: '8月', budgetHours: 5247, actualHours: 5354, budgetUtil: 10.57, actualUtil: 10.80 },
    { name: '9月', budgetHours: 4239, actualHours: 4289, budgetUtil: 8.83, actualUtil: 8.93 },
    { name: '10月', budgetHours: 4628, actualHours: 4434, budgetUtil: 9.33, actualUtil: 8.94 },
    { name: '11月', budgetHours: 4060, actualHours: 4127, budgetUtil: 8.46, actualUtil: 8.60 },
    { name: '12月', budgetHours: 4244, actualHours: 0, budgetUtil: 8.56, actualUtil: 0 },
  ];

  const monthlyChartData = rawMonthlyData.map(item => ({
    name: item.name,
    budgetHours: item.budgetHours,
    actualHours: item.actualHours,
    budgetUtil: item.budgetUtil,
    actualUtil: item.actualUtil
  })).filter(d => d.actualHours > 0 || d.name === '1月');

  const renderDataSection = (title: string) => (
    <>
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-3 bg-blue-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800">{title}执行达成监控</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsCards.map((m, i) => (
            <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] text-slate-500 uppercase font-bold">{m.label}</p>
                <span className="text-[9px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-bold">达成率 {m.rate}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">{m.val}</span>
                <span className="text-xs text-slate-400 font-medium">/ {m.target}</span>
              </div>
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className={`h-full ${m.color}`} style={{ width: m.rate }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {dashboardMetrics.map((m, i) => (
          <div key={i} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-center gap-4">
             <div className={`p-3 rounded-lg bg-slate-50 ${m.color}`}>
               <m.icon size={22} />
             </div>
             <div>
               <p className="text-[10px] text-slate-500 font-bold uppercase">{m.label}</p>
               <div className="flex items-baseline gap-2">
                 <h4 className="text-xl font-bold text-slate-900">{m.value}</h4>
                 <span className={`${m.trendColor} text-[10px] font-bold`}>{m.trend}</span>
               </div>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm overflow-hidden mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800">公司年度目标对比</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold">
              <tr>
                <th className="py-3 px-4">指标项目</th>
                <th className="py-3 px-4 text-center">标准版 (2026)</th>
                <th className="py-3 px-4 text-center">挑战版 (2026)</th>
                <th className="py-3 px-4 text-center">25年同期</th>
                <th className="py-3 px-4 text-center">实际完成</th>
                <th className="py-3 px-4 text-center">预实偏差</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {annualTableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-medium text-slate-900">{row.name}</span>
                    {row.unit && <span className="text-[9px] text-slate-400 ml-1">{row.unit}</span>}
                  </td>
                  <td className="py-3 px-4 text-center text-slate-500 font-tabular-nums">{row.standard}</td>
                  <td className="py-3 px-4 text-center text-blue-600 font-bold font-tabular-nums">{row.challenge}</td>
                  <td className="py-3 px-4 text-center text-slate-400 font-tabular-nums">{row.ly}</td>
                  <td className="py-3 px-4 text-center font-black text-slate-900 font-tabular-nums">{row.actual}</td>
                  <td className={`py-3 px-4 text-center font-bold font-tabular-nums ${row.diffColor}`}>{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6">
        <div className="p-6 border-b border-slate-100">
           <div className="flex items-center gap-2">
              <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-slate-800">轮挡小时与利用率对比曲线图</h3>
           </div>
        </div>
        <div className="p-8 h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Tooltip />
              <Bar yAxisId="left" dataKey="budgetHours" name="计划小时" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar yAxisId="left" dataKey="actualHours" name="实际执行" fill="#6ee7b7" radius={[4, 4, 0, 0]} barSize={20} />
              <Line yAxisId="right" type="monotone" dataKey="actualUtil" name="利用率" stroke="#10b981" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm overflow-hidden mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-3 bg-indigo-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800">轮挡小时与利用率对比明细</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center text-[10px] border-collapse min-w-[1200px]">
            <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600">
              <tr>
                <th className="py-3 px-4 text-left border-r border-slate-200 sticky left-0 bg-slate-50 z-10">指标/月份</th>
                {['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1-11月累计', '预实差异'].map(m => (
                  <th key={m} className="py-3 px-2 border-r border-slate-200">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="py-4 px-4 text-left font-bold text-slate-900 border-r border-slate-200 sticky left-0 bg-white z-10">预算轮挡小时</td>
                {[4525, 4139, 4015, 4401, 4448, 4610, 5222, 5247, 4239, 4628, 4060, 4244, 49534].map((v, i) => <td key={i} className="py-4 px-2 border-r border-slate-200 font-tabular-nums">{v}</td>)}
                <td className="py-4 px-2 border-r border-slate-200 bg-slate-50/50"></td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-left font-bold text-slate-900 border-r border-slate-200 sticky left-0 bg-white z-10">实际轮挡小时</td>
                {[4505, 4142, 3850, 4012, 4352, 4842, 5356, 5354, 4289, 4434, 4127, '-', 49266].map((v, i) => <td key={i} className="py-4 px-2 border-r border-slate-200 font-tabular-nums">{v}</td>)}
                <td className="py-4 px-2 border-r border-slate-200 text-red-500 font-bold">-101</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-left font-bold text-slate-900 border-r border-slate-200 sticky left-0 bg-white z-10">预算利用率</td>
                {[9.74, 9.86, 8.63, 9.16, 8.97, 9.61, 10.53, 10.57, 8.83, 9.33, 8.46, 8.56, 9.43].map((v, i) => <td key={i} className="py-4 px-2 border-r border-slate-200 font-tabular-nums">{v}</td>)}
                <td className="py-4 px-2 border-r border-slate-200 bg-slate-50/50"></td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-left font-bold text-slate-900 border-r border-slate-200 sticky left-0 bg-white z-10">实际利用率</td>
                {[9.69, 9.86, 8.28, 8.46, 8.78, 10.09, 10.80, 10.80, 8.93, 8.94, 8.60, '-', 9.39].map((v, i) => <td key={i} className="py-4 px-2 border-r border-slate-200 font-tabular-nums">{v}</td>)}
                <td className="py-4 px-2 border-r border-slate-200 text-red-500 font-bold">-0.13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderMonthlyView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">当月营收</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">24.5亿</h4>
            <span className="text-emerald-500 text-[10px] font-bold">+1.2%</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">飞机小时利用率</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">9.7h</h4>
            <span className="text-red-500 text-[10px] font-bold">-0.3h</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">月度航班架次</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">2,104</h4>
            <span className="text-emerald-500 text-[10px] font-bold">+52</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">月度客座率</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">91.8%</h4>
            <span className="text-emerald-500 text-[10px] font-bold">+0.8%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 overflow-hidden">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">10月保障实力进度监控</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
            <p className="text-[10px] text-slate-400 font-black uppercase mb-3 tracking-widest">飞行员计划 (h)</p>
            <h4 className="text-3xl font-black text-slate-800 tracking-tight">4,500</h4>
            <p className="text-[9px] text-slate-400 mt-2 font-bold bg-white inline-block px-2 py-1 rounded shadow-sm">基准参考值</p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
            <p className="text-[10px] text-slate-400 font-black uppercase mb-3 tracking-widest">乘务员计划 (h)</p>
            <h4 className="text-3xl font-black text-slate-800 tracking-tight">4,300</h4>
            <p className="text-[9px] text-slate-400 mt-2 font-bold bg-white inline-block px-2 py-1 rounded shadow-sm">基准参考值</p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
            <p className="text-[10px] text-slate-400 font-black uppercase mb-3 tracking-widest">安全员计划 (h)</p>
            <h4 className="text-3xl font-black text-slate-800 tracking-tight">4,700</h4>
            <p className="text-[9px] text-slate-400 mt-2 font-bold bg-white inline-block px-2 py-1 rounded shadow-sm">基准参考值</p>
          </div>
        </div>

        <div className="relative mt-8 px-4 pb-12">
          <div className="absolute top-0 bottom-12 left-[48.39%] w-px bg-red-500 z-10 flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 -mt-1 shadow-md ring-4 ring-red-100"></div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <span className="w-16 text-xs font-black text-slate-600 text-right">安全员</span>
              <div className="flex-1 relative h-7 bg-slate-100 rounded-full overflow-hidden flex items-center shadow-inner">
                 <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000 flex items-center justify-end px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" style={{ width: '53.19%' }}>
                   <span className="text-[10px] font-black text-white tracking-wider">2500 h</span>
                 </div>
                 <span className="absolute right-4 text-[10px] text-slate-400 font-black tracking-tighter">计划总额 4700</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <span className="w-16 text-xs font-black text-slate-600 text-right">乘务员</span>
              <div className="flex-1 relative h-7 bg-slate-100 rounded-full overflow-hidden flex items-center shadow-inner">
                 <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-1000 flex items-center justify-end px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" style={{ width: '58.13%' }}>
                   <span className="text-[10px] font-black text-white tracking-wider">2500 h</span>
                 </div>
                 <span className="absolute right-4 text-[10px] text-slate-400 font-black tracking-tighter">计划总额 4300</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <span className="w-16 text-xs font-black text-slate-600 text-right">飞行员</span>
              <div className="flex-1 relative h-7 bg-slate-100 rounded-full overflow-hidden flex items-center shadow-inner">
                 <div className="h-full bg-gradient-to-r from-amber-600 to-orange-700 transition-all duration-1000 flex items-center justify-end px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" style={{ width: '55.55%' }}>
                   <span className="text-[10px] font-black text-white tracking-wider">2500 h</span>
                 </div>
                 <span className="absolute right-4 text-[10px] text-slate-400 font-black tracking-tighter">计划总额 4500</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-10 px-16 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            <span>0%</span>
            <span>20%</span>
            <span>40%</span>
            <span>60%</span>
            <span>80%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-slate-900 tracking-wide">首页 · 执行监控</h1>
          <div className="flex bg-[#f1f5f9] p-1 rounded-xl border border-slate-200 shadow-sm">
            {[
              { id: 'annual', label: '年度计划', icon: Layout },
              { id: 'monthly', label: '月度计划', icon: FileText }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setMonitorType(tab.id as any)} 
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
                  monitorType === tab.id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <tab.icon size={14} className={monitorType === tab.id ? 'text-blue-600' : 'text-slate-400'} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
              <Calendar size={14} className="text-blue-500" />
              <span>{monitorType === 'annual' ? '当前年份' : '当前月份'}: {monitorType === 'annual' ? selectedYear : selectedMonth}</span>
              <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {monitorType === 'annual' && ['2025年', '2026年', '2027年'].map(y => (
                  <button key={y} onClick={() => setSelectedYear(y)} className={`w-full text-left px-4 py-2 text-[11px] font-bold ${selectedYear === y ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>{y}</button>
                ))}
                {monitorType === 'monthly' && ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'].map(m => (
                  <button key={m} onClick={() => setSelectedMonth(m)} className={`w-full text-left px-4 py-2 text-[11px] font-bold ${selectedMonth === m ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>{m}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {monitorType === 'monthly' ? renderMonthlyView() : renderDataSection('年度')}
    </div>
  );
};

export default ExecutionMonitor;
