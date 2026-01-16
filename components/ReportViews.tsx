
import React from 'react';
import { Search, Calendar, MoreHorizontal, Clock, Plane, Users, BarChart3, Package, TrendingUp } from 'lucide-react';

interface ReportHeaderProps {
  title: string;
  filters?: React.ReactNode;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({ title, filters }) => (
  <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
      <h2 className="text-base font-bold text-slate-900">{title}</h2>
    </div>
    <div className="flex items-center gap-3 flex-wrap">
      {filters}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
        <Search size={14} /> 查询
      </button>
    </div>
  </div>
);

// 1. 生产统计表
export const ProductionStats: React.FC = () => {
  const metricsData = [
    { label: '累计运输小时', value: (55382 * 1.2).toFixed(0).toLocaleString(), unit: 'h', trend: '+12.5%', icon: Clock, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: '累计起降架次', value: (23468 * 1.2).toFixed(0).toLocaleString(), unit: '次', trend: '+8.3%', icon: Plane, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { label: '平均日利用率', value: (10.2 * 1.2).toFixed(1), unit: 'h/d', trend: '+2.1%', icon: TrendingUp, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { label: '高原运行占比', value: '38.4%', unit: '', trend: '-0.5%', icon: BarChart3, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  ];

  const metrics = [
    { label: '运输小时数 (小时)', values: [4891.0, 4496.8, 4180.4, 4356.3, 4725.4, 5256.5, 5814.8, 5812.8, 4656.3, 4814.4, 4481.2, 4597.3].map(v => (v * 1.2).toFixed(1)) },
    { label: '飞行小时同比增长率', values: ['8.57%', '-2.77%', '1.85%', '6.89%', '9.64%', '14.15%', '10.90%', '9.16%', '1.89%', '6.84%', '11.49%', '4.84%'] },
    { label: '运输架次', values: [2003, 1848, 1754, 1715, 1871, 2133, 2370, 2380, 1846, 1934, 1780, 1824].map(v => (v * 1.2).toFixed(0)) },
    { label: '高原小时数 (小时)', values: [2065.0, 1929.5, 2025.2, 2336.4, 2510.7, 2801.0, 3101.2, 3082.4, 2455.9, 2441.4, 2272.5, 2248.8].map(v => (v * 1.2).toFixed(1)) },
    { label: '高原架次', values: [416, 384, 408, 468, 507, 595, 682, 682, 497, 497, 450, 444].map(v => (v * 1.2).toFixed(0)) },
    { label: '飞机日利用率 (小时/日)', values: [10.52, 10.71, 8.99, 9.19, 9.53, 10.95, 11.72, 11.72, 9.70, 9.71, 9.34, 8.91].map(v => (v * 1.2).toFixed(2)) },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((item, i) => (
          <div key={i} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}>
              <item.icon size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-900">{item.value}</span>
                <span className="text-xs text-slate-400 font-bold">{item.unit}</span>
                <span className={`text-[10px] font-bold ml-2 ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                  {item.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <ReportHeader 
          title="生产统计表" 
          filters={
            <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-slate-500 mr-2">统计日期:</span>
              <input type="number" defaultValue={2026} className="bg-transparent text-xs font-bold w-16 outline-none text-slate-700" />
              <Calendar size={14} className="text-slate-400" />
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-center text-[11px] border-collapse">
            <thead>
              <tr className="bg-slate-50 font-bold text-slate-500 border-b border-slate-200">
                <th className="py-4 px-6 text-left border-r border-slate-200 sticky left-0 bg-slate-50 z-10 min-w-[400px]">统计指标</th>
                {Array.from({ length: 12 }, (_, i) => (
                  <th key={i} className="py-4 px-4 border-r border-slate-100 min-w-[100px]">{`2026年${String(i + 1).padStart(2, '0')}月`}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {metrics.map((m, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="py-3 px-6 text-left font-bold text-slate-700 border-r border-slate-200 sticky left-0 bg-white z-10 group-hover:bg-blue-50/30">{m.label}</td>
                  {m.values.map((v, j) => (
                    <td key={j} className="py-3 px-4 border-r border-slate-100 font-medium font-tabular-nums text-slate-600">{v}</td>
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

// 2. 运输生产统计表
export const TransportStats: React.FC = () => {
  const summaryMetrics = [
    { label: '平均客座率', value: (91.5 * 0.9).toFixed(1) + '%', trend: '+2.1%', color: 'text-emerald-600', bgColor: 'bg-emerald-50', icon: BarChart3 },
    { label: '当月航班量', value: (1750 * 0.9).toFixed(0).toLocaleString(), unit: '班', trend: '+6.5%', color: 'text-blue-600', bgColor: 'bg-blue-50', icon: Plane },
    { label: '当月旅客量', value: (31.4 * 0.9).toFixed(1), unit: '万', trend: '+4.2%', color: 'text-indigo-600', bgColor: 'bg-indigo-50', icon: Users },
    { label: '累计总ASK', value: (712039 * 0.9).toFixed(0).toLocaleString(), unit: '万座公里', trend: '+5.0%', color: 'text-cyan-600', bgColor: 'bg-cyan-50', icon: TrendingUp },
  ];

  const data = [
    { cat: '一、综合指标', rows: [
      { name: '1.飞机日利用率 (小时/日)', current: (9.45 * 0.9).toFixed(2), ly: (10.52 * 0.9).toFixed(2), yoy: '-10.1%', prev: (8.91 * 0.9).toFixed(2), mom: '+6.1%', total: (9.45 * 0.9).toFixed(2), totalLy: (10.52 * 0.9).toFixed(2), totalYoy: '-10.1%' },
      { name: '2.在册加权平均飞机架数 (架)', current: '17.0', ly: '15.0', yoy: '13.33%', prev: '16.6', mom: '2.41%', total: '17.0', totalLy: '15.0', totalYoy: '13.33%' },
      { name: '3.起降架次 (架次)', current: (2105 * 0.9).toFixed(0), ly: (2003 * 0.9).toFixed(0), yoy: '5.1%', prev: (1824 * 0.9).toFixed(0), mom: '15.4%', total: (2105 * 0.9).toFixed(0), totalLy: (2003 * 0.9).toFixed(0), totalYoy: '5.1%' },
      { name: '4.航班量 (班)', current: (1750 * 0.9).toFixed(0), ly: (1643 * 0.9).toFixed(0), yoy: '6.5%', prev: (1389 * 0.9).toFixed(0), mom: '26.0%', total: (1750 * 0.9).toFixed(0), totalLy: (1643 * 0.9).toFixed(0), totalYoy: '6.5%' },
    ]},
    { cat: '二、客运指标', rows: [
      { name: '5.可供座公里 (万座公里)', current: (56420.5 * 0.9).toFixed(1), ly: (55647.9 * 0.9).toFixed(1), yoy: '1.4%', prev: (54064.8 * 0.9).toFixed(1), mom: '4.4%', total: (56420.5 * 0.9).toFixed(1), totalLy: (55647.9 * 0.9).toFixed(1), totalYoy: '1.4%' },
      { name: '6.旅客周转量 (万人公里)', current: (49200.0 * 0.9).toFixed(1), ly: (48976.1 * 0.9).toFixed(1), yoy: '0.5%', prev: (48025.2 * 0.9).toFixed(1), mom: '2.4%', total: (49200.0 * 0.9).toFixed(1), totalLy: (48976.1 * 0.9).toFixed(1), totalYoy: '0.5%' },
      { name: '7.旅客运输量 (万人)', current: (31.39 * 0.9).toFixed(2), ly: (30.12 * 0.9).toFixed(2), yoy: '4.2%', prev: (28.99 * 0.9).toFixed(2), mom: '8.3%', total: (31.39 * 0.9).toFixed(2), totalLy: (30.12 * 0.9).toFixed(2), totalYoy: '4.2%' },
      { name: '8.客座率 (%)', current: (87.2 * 0.9).toFixed(1) + '%', ly: (88.0 * 0.9).toFixed(1) + '%', yoy: '-0.8%', prev: (88.8 * 0.9).toFixed(1) + '%', mom: '-1.6%', total: (87.2 * 0.9).toFixed(1) + '%', totalLy: (88.0 * 0.9).toFixed(1) + '%', totalYoy: '-0.8%' },
    ]}
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryMetrics.map((item, i) => (
          <div key={i} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
              <div className={`p-1.5 rounded-lg ${item.bgColor} ${item.color}`}>
                <item.icon size={16} />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900 tracking-tight">{item.value}</span>
              {item.unit && <span className="text-[10px] text-slate-400 font-bold">{item.unit}</span>}
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span className={`text-[10px] font-bold ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                {item.trend}
              </span>
              <span className="text-[9px] text-slate-400 font-medium">较去年同期</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <ReportHeader 
          title="运输生产统计表" 
          filters={
            <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
              <input type="month" defaultValue="2026-01" className="bg-transparent text-xs font-bold outline-none text-slate-700" />
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse">
            <thead>
              <tr className="bg-slate-50 font-bold text-slate-500 border-b border-slate-200">
                <th className="py-4 px-6 w-64 border-r border-slate-200 sticky left-0 bg-slate-50 z-10 min-w-[200px]">统计指标</th>
                {['当月', '去年同期', '同比', '上月', '环比', '今年累计', '同期累计', '同比'].map(h => (
                  <th key={h} className="py-4 px-4 text-center border-r border-slate-100">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((cat, ci) => (
                <React.Fragment key={ci}>
                  <tr className="bg-slate-50/50">
                    <td colSpan={9} className="py-2.5 px-6 font-bold text-blue-600 bg-blue-50/30">{cat.cat}</td>
                  </tr>
                  {cat.rows.map((r, ri) => (
                    <tr key={ri} className="hover:bg-slate-50 transition-colors border-b border-slate-100 group">
                      <td className="py-3 px-6 font-medium text-slate-700 sticky left-0 bg-white z-10 group-hover:bg-slate-50">{r.name}</td>
                      <td className="py-3 px-4 text-center font-tabular-nums">{r.current}</td>
                      <td className="py-3 px-4 text-center font-tabular-nums text-slate-400">{r.ly}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-600">{r.yoy}</td>
                      <td className="py-3 px-4 text-center font-tabular-nums text-slate-400">{r.prev}</td>
                      <td className="py-3 px-4 text-center font-bold text-blue-500">{r.mom}</td>
                      <td className="py-3 px-4 text-center font-tabular-nums">{r.total}</td>
                      <td className="py-3 px-4 text-center font-tabular-nums text-slate-400">{r.totalLy}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-600">{r.totalYoy}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 3. 舱单信息管理
export const ManifestManagement: React.FC = () => {
  const manifestMetrics = [
    { label: '班均旅客', value: '153', trend: '+12', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: '平均载货量', value: '480', unit: 'kg', trend: '+5%', icon: Package, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { label: '航班量', value: '210', unit: '班', trend: '+8', icon: Plane, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {manifestMetrics.map((item, i) => (
          <div key={i} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}>
              <item.icon size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-900">{item.value}</span>
                {item.unit && <span className="text-xs text-slate-400 font-bold">{item.unit}</span>}
                <span className={`text-[10px] font-bold ml-2 text-emerald-500`}>
                  {item.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <ReportHeader 
          title="舱单信息管理" 
          filters={
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
                <input type="date" defaultValue="2026-01-13" className="bg-transparent text-[10px] outline-none" />
                <span className="mx-2 text-slate-400 text-[10px]">~</span>
                <input type="date" defaultValue="2026-01-20" className="bg-transparent text-[10px] outline-none" />
              </div>
              <input type="text" placeholder="航班号" className="bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 text-[10px] outline-none w-24" />
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-center text-[10px] border-collapse min-w-[2200px]">
            <thead className="bg-[#0b1426] text-white">
              <tr className="border-b border-slate-800">
                <th className="py-4 px-3 sticky left-0 bg-[#0b1426] z-10">序号</th>
                <th className="py-4 px-4">计划日期</th>
                <th className="py-4 px-4">航班号</th>
                <th className="py-4 px-4">机号</th>
                <th className="py-4 px-4">机型</th>
                <th className="py-4 px-4">航班性质</th>
                <th className="py-4 px-4">出发到达</th>
                <th className="py-4 px-4">开车</th>
                <th className="py-4 px-4">起飞</th>
                <th className="py-4 px-4">到达</th>
                <th className="py-4 px-4">关车</th>
                <th className="py-4 px-3 bg-blue-900/40">成人</th>
                <th className="py-4 px-3 bg-blue-900/40">儿童</th>
                <th className="py-4 px-3 bg-blue-900/40">婴儿</th>
                <th className="py-4 px-3 bg-blue-900/40">总旅客</th>
                <th className="py-4 px-4 bg-emerald-900/40">旅客重量</th>
                <th className="py-4 px-4 bg-emerald-900/40">货物重量</th>
                <th className="py-4 px-4 bg-emerald-900/40">行李重量</th>
                <th className="py-4 px-4">实际业载</th>
                <th className="py-4 px-4">可供业载</th>
                <th className="py-4 px-4">可供座位</th>
                <th className="py-4 px-4">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {Array.from({ length: 15 }, (_, i) => (
                <tr key={i} className="hover:bg-slate-50 group">
                  <td className="py-3 px-3 font-bold text-blue-600 sticky left-0 bg-white group-hover:bg-slate-50">{i + 1}</td>
                  <td className="py-3 px-4 font-tabular-nums text-slate-500">2026-01-13</td>
                  <td className="py-3 px-4 font-bold">A6710{i}</td>
                  <td className="py-3 px-4 text-slate-500">30A2</td>
                  <td className="py-3 px-4">A320</td>
                  <td className="py-3 px-4">正班</td>
                  <td className="py-3 px-4 font-bold">KMG-TAO</td>
                  <td className="py-3 px-4 font-tabular-nums">09:50</td>
                  <td className="py-3 px-4 font-tabular-nums text-emerald-600 font-bold">09:55</td>
                  <td className="py-3 px-4 font-tabular-nums text-blue-600 font-bold">13:04</td>
                  <td className="py-3 px-4 font-tabular-nums">13:12</td>
                  <td className="py-3 px-3 bg-blue-50/50">142</td>
                  <td className="py-3 px-3 bg-blue-50/50">2</td>
                  <td className="py-3 px-3 bg-blue-50/50">0</td>
                  <td className="py-3 px-3 bg-blue-50 font-black">144</td>
                  <td className="py-3 px-4 bg-emerald-50">10726</td>
                  <td className="py-3 px-4 bg-emerald-50 text-slate-500">505</td>
                  <td className="py-3 px-4 bg-emerald-50 text-slate-500">823</td>
                  <td className="py-3 px-4 font-bold text-slate-900">14670</td>
                  <td className="py-3 px-4 text-slate-400">15481</td>
                  <td className="py-3 px-4 text-slate-400 font-bold">185</td>
                  <td className="py-3 px-4">
                    <button className="text-slate-400 hover:text-blue-600 transition-colors"><MoreHorizontal size={14}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 4. YY报表
export const YYReport: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <ReportHeader 
        title="YY报表 - 航班综合明细" 
        filters={
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
              <input type="date" className="bg-transparent text-[10px] outline-none" />
              <span className="mx-2 text-slate-400 text-[10px]">~</span>
              <input type="date" className="bg-transparent text-[10px] outline-none" />
            </div>
            <input type="text" placeholder="航段" className="bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 text-[10px] outline-none w-32" />
          </div>
        }
      />
      <div className="overflow-x-auto">
        <table className="w-full text-center text-[10px] border-collapse min-w-[2000px]">
          <thead className="bg-slate-50 text-slate-500 font-bold">
            <tr className="border-b border-slate-200">
              {['DATE', 'HBH', 'CODE_SHARE', 'DW', 'FXD', 'JH', 'JX', 'ZDYZ', 'ZDZW', 'HBXZ', '始发', '到达', '起飞', '降落', '验证', 'HDFL'].map(h => (
                <th key={h} className="py-4 px-4 border-r border-slate-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {Array.from({ length: 10 }, (_, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-400">12/14/25</td>
                <td className="py-3 px-4 font-bold text-slate-900">7107</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">A6</td>
                <td className="py-3 px-4 font-medium text-blue-600">KMGA6</td>
                <td className="py-3 px-4 font-bold">B-325Q</td>
                <td className="py-3 px-4">32A</td>
                <td className="py-3 px-4">17825</td>
                <td className="py-3 px-4 font-black">186</td>
                <td className="py-3 px-4">W/Z</td>
                <td className="py-3 px-4">昆明</td>
                <td className="py-3 px-4">青岛</td>
                <td className="py-3 px-4 font-bold text-emerald-600">高原</td>
                <td className="py-3 px-4">否</td>
                <td className="py-3 px-4 text-blue-500 font-bold">TRUE</td>
                <td className="py-3 px-4">DOM</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 5. YT报表
export const YTReport: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <ReportHeader 
        title="YT报表 - 航段运行时间分析" 
        filters={
          <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
            <input type="date" className="bg-transparent text-[10px] outline-none" />
            <span className="mx-2 text-slate-400 text-[10px]">~</span>
            <input type="date" className="bg-transparent text-[10px] outline-none" />
          </div>
        }
      />
      <div className="overflow-x-auto">
        <table className="w-full text-center text-[10px] border-collapse min-w-[1800px]">
          <thead className="bg-slate-50 text-slate-500 font-bold">
            <tr className="border-b border-slate-200">
              {['DATE', 'DW', 'FXD', 'HBH', 'JH', 'JX', 'ZDYZ', 'ZDZW', 'HBXZ', 'HX', 'HD', 'DMSJ', 'KZSJ', 'QFSK', 'JLSK'].map(h => (
                <th key={h} className="py-4 px-4 border-r border-slate-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {Array.from({ length: 8 }, (_, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="py-4 px-4 text-slate-400">12/14/25</td>
                <td className="py-4 px-4">A6</td>
                <td className="py-4 px-4 text-blue-600 font-medium">KMGA6</td>
                <td className="py-4 px-4 font-black text-slate-900">8804</td>
                <td className="py-4 px-4 font-bold">B-306C</td>
                <td className="py-4 px-4">319</td>
                <td className="py-4 px-4">16901</td>
                <td className="py-4 px-4">144</td>
                <td className="py-4 px-4 text-slate-400 font-bold">K/L</td>
                <td className="py-4 px-4">YTY-YTY</td>
                <td className="py-4 px-4">HD-01</td>
                <td className="py-4 px-4 font-tabular-nums font-bold">00:17</td>
                <td className="py-4 px-4 font-tabular-nums font-bold">02:37</td>
                <td className="py-4 px-4 font-tabular-nums">202612140651</td>
                <td className="py-4 px-4 font-tabular-nums">202612140959</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 7. 碳排放统计
export const CarbonEmissionReport: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <ReportHeader 
        title="碳排放统计 - 燃油与排放监测" 
        filters={
          <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
            <input type="date" className="bg-transparent text-[10px] outline-none" />
            <span className="mx-2 text-slate-400 text-[10px]">~</span>
            <input type="date" className="bg-transparent text-[10px] outline-none" />
          </div>
        }
      />
      <div className="overflow-x-auto">
        <table className="w-full text-center text-[10px] border-collapse min-w-[1500px]">
          <thead className="bg-blue-50 text-blue-900/70 font-bold">
            <tr className="border-b border-blue-100">
              <th className="py-4 px-4 border-r border-blue-100">航班日期</th>
              <th className="py-4 px-4 border-r border-blue-100">始发</th>
              <th className="py-4 px-4 border-r border-blue-100">到达</th>
              <th className="py-4 px-4 border-r border-blue-100">机型</th>
              <th className="py-4 px-4 border-r border-blue-100">机号</th>
              <th className="py-4 px-4 border-r border-blue-100 bg-orange-50 text-orange-800">原存油</th>
              <th className="py-4 px-4 border-r border-blue-100 bg-orange-50 text-orange-800">新加油</th>
              <th className="py-4 px-4 border-r border-blue-100 bg-orange-50 text-orange-800">留存油</th>
              <th className="py-4 px-4 border-r border-blue-100 bg-emerald-50 text-emerald-800">碳排放量 (kg)</th>
              <th className="py-4 px-4 border-r border-blue-100">成人</th>
              <th className="py-4 px-4 border-r border-blue-100">货物</th>
              <th className="py-4 px-4">平均油耗率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {Array.from({ length: 14 }, (_, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-tabular-nums">2026/01/13</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">长沙(ZGHA)</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">北京(ZBAD)</td>
                <td className="py-3.5 px-4">A20N</td>
                <td className="py-3.5 px-4 font-bold">B32Q6</td>
                <td className="py-3.5 px-4 bg-orange-50/30 font-tabular-nums text-orange-600">4000</td>
                <td className="py-3.5 px-4 bg-orange-50/30 font-tabular-nums text-orange-600 font-bold">4911</td>
                <td className="py-3.5 px-4 bg-orange-50/30 font-tabular-nums text-orange-600">4000</td>
                <td className="py-3.5 px-4 bg-emerald-50/50 font-black text-emerald-600">28,040</td>
                <td className="py-3.5 px-4">172</td>
                <td className="py-3.5 px-4 font-medium">1285</td>
                <td className="py-3.5 px-4 font-bold text-blue-500">2.43t/h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
