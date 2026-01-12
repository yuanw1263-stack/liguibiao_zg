
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
import { ChevronDown, Calendar, BarChart3, Users, Clock, Activity, AlertTriangle } from 'lucide-react';

const ExecutionMonitor: React.FC = () => {
  const [monitorType, setMonitorType] = useState<'annual' | 'monthly'>('annual');
  const [selectedMonth, setSelectedMonth] = useState('10月');
  const [selectedYear, setSelectedYear] = useState('2026年');
  
  const dashboardMetrics = [
    { label: "年度计划达成率", value: "98.2%", trend: "+2.4%", trendColor: 'text-emerald-500', icon: BarChart3, color: "text-blue-500" },
    { label: "飞行员资源饱和度", value: "92%", trend: "-1.2%", trendColor: 'text-red-500', icon: Users, color: "text-purple-500" },
    { label: "平均飞机利用率", value: "10.8h", trend: "+0.5h", trendColor: 'text-emerald-500', icon: Clock, color: "text-green-500" },
    { label: "运行风险点", value: "3", trend: "需关注", trendColor: 'text-orange-500', icon: AlertTriangle, color: "text-red-500" },
  ];

  const metricsCards = [
    { label: '累计飞机利用率', val: '10.42', target: '10.85 Hrs', rate: '96%', color: 'bg-cyan-500' },
    { label: '累计起降架次', val: '24,111', target: '24,999', rate: '96.4%', color: 'bg-emerald-500' },
    { label: '累计客座率', val: '91.5%', target: '92.0%', rate: '99.4%', color: 'bg-orange-500' },
    { label: '累计总营收', val: '285.2亿', target: '312.4亿', rate: '91.2%', color: 'bg-red-500' },
  ];

  const annualTableData = [
    { name: '平均飞机架数', unit: '', standard: '17.00', challenge: '18.00', ly: '16.50', actual: '17.00' },
    { name: '座公里', unit: '万座公里', standard: '712,039', challenge: '750,000', ly: '680,450', actual: '712,039' },
    { name: '客公里', unit: '万人公里', standard: '654,981', challenge: '690,000', ly: '620,330', actual: '654,981' },
    { name: '客座率', unit: '%', standard: '92.0', challenge: '94.0', ly: '91.2', actual: '91.5' },
    { name: '旅客人数', unit: '人次', standard: '3,828,227', challenge: '4,100,000', ly: '3,650,400', actual: '3,828,227' },
    { name: '起降架次', unit: '架次', standard: '23,468', challenge: '25,000', ly: '22,800', actual: '23,468' },
    { name: '飞行里程', unit: '万公里', standard: '3,905', challenge: '4,100', ly: '3,750', actual: '3,905' },
    { name: '平均航距', unit: '公里', standard: '1,479', challenge: '1,500', ly: '1,450', actual: '1,479' },
    { name: '每客运程', unit: '公里', standard: '1,518', challenge: '1,550', ly: '1,500', actual: '1,518' },
    { name: '轮档小时', unit: '小时', standard: '59,985', challenge: '63,000', ly: '57,400', actual: '59,985' },
    { name: '飞机日利用率', unit: 'h/d', standard: '10.0', challenge: '11.2', ly: '9.8', actual: '10.2' },
    { name: '货邮运量', unit: '吨', standard: '10,972', challenge: '12,000', ly: '10,200', actual: '10,972' },
    { name: '小时ASK', unit: '', standard: '11.8', challenge: '12.5', ly: '11.5', actual: '11.8' },
    { name: '小时油耗', unit: '吨', standard: '2.43', challenge: '2.35', ly: '2.45', actual: '2.43' },
    { name: '耗油量', unit: '吨', standard: '145,892', challenge: '155,000', ly: '140,200', actual: '145,892' },
  ];

  const rawMonthlyData = [
    { name: '1月', budgetHours: 4913, actualHours: 4891, budgetUtil: 10.57, actualUtil: 10.52 },
    { name: '2月', budgetHours: 4494, actualHours: 4497, budgetUtil: 10.70, actualUtil: 10.71 },
    { name: '3月', budgetHours: 4359, actualHours: 4180, budgetUtil: 9.37, actualUtil: 8.99 },
    { name: '4月', budgetHours: 4778, actualHours: 4356, budgetUtil: 9.95, actualUtil: 9.19 },
    { name: '5月', budgetHours: 4829, actualHours: 4725, budgetUtil: 9.74, actualUtil: 9.53 },
    { name: '6月', budgetHours: 5005, actualHours: 5257, budgetUtil: 10.43, actualUtil: 10.95 },
    { name: '7月', budgetHours: 5669, actualHours: 5815, budgetUtil: 11.43, actualUtil: 11.72 },
    { name: '8月', budgetHours: 5696, actualHours: 5813, budgetUtil: 11.48, actualUtil: 11.72 },
    { name: '9月', budgetHours: 4602, actualHours: 4656, budgetUtil: 9.59, actualUtil: 9.70 },
    { name: '10月', budgetHours: 5024, actualHours: 4814, budgetUtil: 10.13, actualUtil: 9.71 },
    { name: '11月', budgetHours: 4408, actualHours: 4481, budgetUtil: 9.18, actualUtil: 9.34 },
    { name: '12月', budgetHours: 4608, actualHours: 0, budgetUtil: 9.29, actualUtil: 0 },
  ];

  const BLOCK_COEFF = 9.31212;
  const UTIL_COEFF = 0.9271;

  const monthlyChartData = rawMonthlyData.map(item => ({
    name: item.name,
    budgetHours: Math.round((item.budgetHours * BLOCK_COEFF) / 10),
    actualHours: item.actualHours > 0 ? Math.round((item.actualHours * BLOCK_COEFF) / 10) : 0,
    budgetUtil: parseFloat((item.budgetUtil * UTIL_COEFF).toFixed(2)),
    actualUtil: item.actualUtil > 0 ? parseFloat((item.actualUtil * UTIL_COEFF).toFixed(2)) : 0
  }));

  const filteredChartData = monthlyChartData.filter(d => d.name !== '12月');

  const calcSum = (key: 'budgetHours' | 'actualHours', limit = 11) => 
    monthlyChartData.slice(0, limit).reduce((acc, curr) => acc + curr[key], 0);

  const budgetSum = calcSum('budgetHours');
  const actualSum = calcSum('actualHours');
  const diffHours = actualSum - budgetSum;

  const budgetAvgUtil = (monthlyChartData.slice(0, 11).reduce((acc, curr) => acc + curr.budgetUtil, 0) / 11).toFixed(2);
  const actualAvgUtil = (monthlyChartData.slice(0, 11).reduce((acc, curr) => acc + curr.actualUtil, 0) / 11).toFixed(2);
  const diffUtil = (parseFloat(actualAvgUtil) - parseFloat(budgetAvgUtil)).toFixed(2);

  const renderAnnualView = () => (
    <>
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

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-3 bg-blue-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800">累计执行达成监控</h3>
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

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm overflow-hidden mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800">公司年度目标对比</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 whitespace-nowrap sticky left-0 bg-slate-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">指标项目</th>
                <th className="py-3 px-4 text-center">标准版 (2026)</th>
                <th className="py-3 px-4 text-center">挑战版 (2026)</th>
                <th className="py-3 px-4 text-center">25年同期</th>
                <th className="py-3 px-4 text-center">实际完成</th>
                <th className="py-3 px-4 text-center">预实偏差</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {annualTableData.map((row, idx) => {
                const actualVal = parseFloat(row.actual.replace(/,/g, ''));
                const standardVal = parseFloat(row.standard.replace(/,/g, ''));
                const diff = actualVal - standardVal;
                const diffPercent = standardVal !== 0 ? ((diff / standardVal) * 100).toFixed(1) : '0.0';
                const isPositive = diff >= 0;

                return (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900 whitespace-nowrap sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                      {row.name} {row.unit && <span className="text-[10px] text-slate-400 font-normal">({row.unit})</span>}
                    </td>
                    <td className="py-4 px-4 text-center font-tabular-nums">{row.standard}</td>
                    <td className="py-4 px-4 text-center text-blue-600 font-semibold font-tabular-nums">{row.challenge}</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-tabular-nums">{row.ly}</td>
                    <td className="py-4 px-4 text-center font-bold text-slate-900 bg-blue-50/10 font-tabular-nums">{row.actual}</td>
                    <td className={`py-4 px-4 text-center font-bold font-tabular-nums ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                      {isPositive ? '+' : ''}{diffPercent}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-slate-800">预算情况对比</h3>
           </div>
           <div className="flex items-center gap-2 text-slate-400">
              <span className="text-[10px] font-bold">湖南航空 · Air Travel</span>
           </div>
        </div>
        <div className="p-8 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={filteredChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 7000]} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[6.00, 12.00]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '11px' }}
              />
              <Legend iconType="circle" verticalAlign="top" wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 600 }} />
              <Bar yAxisId="left" dataKey="budgetHours" name="预算轮档小时" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={24} />
              <Bar yAxisId="left" dataKey="actualHours" name="实际轮档小时" fill="#6ee7b7" radius={[4, 4, 0, 0]} barSize={24} />
              <Line yAxisId="right" type="monotone" dataKey="budgetUtil" name="预算利用率" stroke="#94a3b8" strokeWidth={2} dot={{ stroke: '#94a3b8', strokeWidth: 2, r: 4, fill: '#fff' }} strokeDasharray="5 5" />
              <Line yAxisId="right" type="monotone" dataKey="actualUtil" name="实际利用率" stroke="#10b981" strokeWidth={2} dot={{ stroke: '#10b981', strokeWidth: 2, r: 4, fill: '#10b981' }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  const renderMonthlyView = () => (
    <div className="space-y-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
             <h3 className="text-sm font-bold text-slate-800 tracking-tight">计划分析</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase">市场计划</span>
              <div className="flex items-baseline gap-1">
                 <span className="text-[10px] text-slate-500">时长小时需求 (h):</span>
                 <span className="text-base font-black text-slate-900 tracking-tight">4200</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center text-[11px] border-collapse min-w-[1000px]">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase tracking-wider">
              <tr>
                <th rowSpan={2} className="py-4 px-4 text-left border-r border-slate-200 bg-slate-50 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">空勤单位</th>
                <th colSpan={6} className="py-2.5 px-4 bg-slate-100/50 border-b border-slate-200">机组保障</th>
              </tr>
              <tr className="bg-slate-50/80">
                <th className="py-3 px-4 border-r border-slate-200">10月可保障人数</th>
                <th className="py-3 px-4 border-r border-slate-200">日均飞行小时 (h)</th>
                <th className="py-3 px-4 border-r border-slate-200">10月保障实力 (h)</th>
                <th className="py-3 px-4 border-r border-slate-200">日均保障小时 (h)</th>
                <th className="py-3 px-4 border-r border-slate-200">10月运行裕度 (h)</th>
                <th className="py-3 px-4">日均运行裕度 (h)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-5 px-4 text-left font-bold text-slate-900 bg-white sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">飞行员</td>
                <td className="py-5 px-4 font-semibold">70/75</td>
                <td className="py-5 px-4">2.23</td>
                <td className="py-5 px-4 font-bold text-emerald-600">4500</td>
                <td className="py-5 px-4">150</td>
                <td className="py-5 px-4 text-slate-400">170</td>
                <td className="py-5 px-4 text-slate-400">4.2</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-5 px-4 text-left font-bold text-slate-900 bg-white sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">乘务员</td>
                <td className="py-5 px-4 font-semibold">200/205</td>
                <td className="py-5 px-4">2.41</td>
                <td className="py-5 px-4 font-bold text-emerald-600">4300</td>
                <td className="py-5 px-4">160</td>
                <td className="py-5 px-4 text-slate-400">600</td>
                <td className="py-5 px-4 text-slate-400">15.5</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-5 px-4 text-left font-bold text-slate-900 bg-white sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">安全员</td>
                <td className="py-5 px-4 font-semibold">60/65</td>
                <td className="py-5 px-4">2</td>
                <td className="py-5 px-4 font-bold text-emerald-600">4700</td>
                <td className="py-5 px-4">150</td>
                <td className="py-5 px-4 text-slate-400">200</td>
                <td className="py-5 px-4 text-slate-400">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-1 h-3 bg-red-400 rounded-full"></div>
             <h3 className="text-sm font-bold text-slate-800 tracking-tight">实际分析</h3>
          </div>
          <span className="text-[10px] font-bold text-slate-400">数据截至当日 23:59</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center text-[11px] border-collapse min-w-[1000px]">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase tracking-wider">
              <tr>
                <th className="py-4 px-4 text-left sticky left-0 bg-slate-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">空勤单位</th>
                <th className="py-4 px-4">可保障人数</th>
                <th className="py-4 px-4">保障实力已使用</th>
                <th className="py-4 px-4 text-red-500 bg-red-50/30">保障实力剩余 (h)</th>
                <th className="py-4 px-4 text-red-500 bg-red-50/30">日均保障小时 (h)</th>
                <th className="py-4 px-4 text-red-500 bg-red-50/30">运行裕度剩余</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {[
                { label: '飞行员', people: '70/75', used: 2500, remain: 1000, daily: 100, margin: 28 },
                { label: '乘务员', people: '200/205', used: 2500, remain: 1000, daily: 100, margin: 35 },
                { label: '安全员', people: '60/65', used: 2500, remain: 1000, daily: 100, margin: 42 }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-4 text-left font-bold text-slate-900 bg-white sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">{row.label}</td>
                  <td className="py-5 px-4 text-slate-700">{row.people}</td>
                  <td className="py-5 px-4 text-slate-700 font-tabular-nums">{row.used}</td>
                  <td className="py-5 px-4 font-black text-red-600 text-sm bg-red-50/10 font-tabular-nums">{row.remain}</td>
                  <td className="py-5 px-4 text-red-500 text-sm bg-red-50/10 font-tabular-nums">{row.daily}</td>
                  <td className="py-5 px-4 text-red-600 text-sm font-black bg-red-50/10 font-tabular-nums">{row.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-slate-900 tracking-wide">执行实时监控</h1>
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 shadow-sm">
            <button 
              onClick={() => setMonitorType('annual')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${monitorType === 'annual' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-700'}`}
            >
              年度监控
            </button>
            <button 
              onClick={() => setMonitorType('monthly')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${monitorType === 'monthly' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-700'}`}
            >
              月度监控
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
              <Calendar size={14} className="text-blue-500" />
              <span>{monitorType === 'annual' ? '当前年份' : '当前月份'}: {monitorType === 'annual' ? selectedYear : selectedMonth}</span>
              <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
               <div className="py-1">
                 {monitorType === 'annual' ? ['2025年', '2026年', '2027年'].map(y => (
                   <button key={y} onClick={() => setSelectedYear(y)} className={`w-full text-left px-4 py-2 text-[11px] font-bold ${selectedYear === y ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>{y}</button>
                 )) : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'].map(m => (
                   <button key={m} onClick={() => setSelectedMonth(m)} className={`w-full text-left px-4 py-2 text-[11px] font-bold ${selectedMonth === m ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>{m}</button>
                 ))}
               </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[10px]">系统管理员 ID: 4022-X9</span>
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] border border-slate-200 text-slate-600 font-bold">AD</div>
          </div>
        </div>
      </div>
      {monitorType === 'annual' ? renderAnnualView() : renderMonthlyView()}
    </div>
  );
};

export default ExecutionMonitor;
