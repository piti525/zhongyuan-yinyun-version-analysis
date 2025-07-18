import React, { useState, useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { VersionDetail } from '../types';
import SectionTitle from './SectionTitle';
import { versionDetails, radarData, versionColors } from './versionData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#fdf6e3] text-[#586e75] rounded-md shadow-lg border border-[#eee8d5]">
        <p className="font-bold mb-2 text-[#073642]">{label}</p>
        {payload.map((entry: any) => (
          <p key={`item-${entry.name}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toFixed(1)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const VersionDetailCard: React.FC<{version: VersionDetail | undefined}> = ({ version }) => {
    if (!version) return null;
    return (
        <div className="bg-white/80 p-6 rounded-lg border border-[#eee8d5] shadow-md h-full flex flex-col">
            <h3 className="font-serif text-3xl font-bold text-[#073642]">{version.name}</h3>
            <p className="text-[#b58900] font-semibold mb-4">{version.period}</p>
            <div className="flex-grow space-y-3">
                <p className="font-semibold text-[#657b83]">{version.summary}</p>
                <p className="text-[#586e75] leading-relaxed text-base">{version.analysis}</p>
            </div>
        </div>
    );
}

const VersionAnalysisSection: React.FC<{selectedVersionId: string, onVersionSelect: (id: string) => void}> = ({ selectedVersionId, onVersionSelect }) => {
  const [isCompareMode, setCompareMode] = useState(false);
  const [comparisonVersionId, setComparisonVersionId] = useState<string | null>(null);

  const selectedVersion = useMemo(() => versionDetails.find(v => v.id === selectedVersionId), [selectedVersionId]);
  const comparisonVersion = useMemo(() => versionDetails.find(v => v.id === comparisonVersionId), [comparisonVersionId]);

  const handleLegendClick = (data: any) => {
      const { dataKey } = data;
      onVersionSelect(dataKey);
  }

  return (
    <section id="version-analysis">
      <SectionTitle>版本特徵分析</SectionTitle>
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Version Selector */}
        <div className="lg:w-1/4 flex-shrink-0">
          <div className="sticky top-8 bg-white/50 p-4 rounded-lg border border-[#eee8d5] shadow-sm">
            <h3 className="font-serif font-bold text-lg text-[#073642] mb-3">選擇版本</h3>
            <div className="space-y-2">
              {versionDetails.map(v => (
                <button
                  key={v.id}
                  onClick={() => onVersionSelect(v.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-all duration-200 text-base ${selectedVersionId === v.id ? 'bg-[#b58900] text-white shadow' : 'hover:bg-[#eee8d5] text-[#586e75]'}`}
                >
                  {v.name}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-dashed border-[#cb4b16]/30">
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" checked={isCompareMode} onChange={(e) => {
                        setCompareMode(e.target.checked);
                        if (!e.target.checked) setComparisonVersionId(null);
                        else {
                            const defaultComparison = versionDetails.find(v => v.id !== selectedVersionId);
                            setComparisonVersionId(defaultComparison?.id || null);
                        }
                    }} className="form-checkbox h-5 w-5 text-[#b58900] rounded focus:ring-[#b58900]" />
                    <span className="ml-3 text-[#073642] font-semibold">開啟對比模式</span>
                </label>
                {isCompareMode && (
                    <div className="mt-2">
                        <select
                         value={comparisonVersionId || ''}
                         onChange={e => setComparisonVersionId(e.target.value)}
                         className="w-full p-2 border border-[#ddd3bb] rounded-md bg-white focus:ring-2 focus:ring-[#b58900] focus:border-[#b58900]"
                        >
                           {versionDetails.filter(v => v.id !== selectedVersionId).map(v => (
                               <option key={v.id} value={v.id}>{v.name}</option>
                           ))}
                        </select>
                    </div>
                )}
            </div>
          </div>
        </div>

        {/* Details and Chart */}
        <div className="lg:w-3/4">
            <div className={`grid gap-8 ${isCompareMode ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
                <VersionDetailCard version={selectedVersion} />
                {isCompareMode && <VersionDetailCard version={comparisonVersion} />}
            </div>

            <div className="mt-8 pt-8 border-t border-dashed border-[#cb4b16]/30 bg-white/80 p-6 md:p-8 rounded-lg border border-[#eee8d5] shadow-md">
                 <h4 className="text-center font-serif text-2xl font-bold text-[#073642] mb-4">特徵雷達圖</h4>
                 <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#ddd3bb" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#586e75', fontSize: 14 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#93a1a1' }} />
                            
                            {Object.keys(versionColors).map(version => {
                                let opacity = 0.15;
                                let strokeWidth = 1.5;
                                let strokeOpacity = 0.4;

                                if (!isCompareMode && selectedVersion?.name === version) {
                                    opacity = 0.7;
                                    strokeWidth = 3;
                                    strokeOpacity = 1;
                                } else if (isCompareMode && (selectedVersion?.name === version || comparisonVersion?.name === version)) {
                                     opacity = 0.6;
                                     strokeWidth = 2.5;
                                     strokeOpacity = 0.9;
                                }

                                return (
                                    <Radar 
                                        key={version} 
                                        name={version} 
                                        dataKey={version} 
                                        stroke={versionColors[version]} 
                                        fill={versionColors[version]} 
                                        fillOpacity={opacity}
                                        strokeWidth={strokeWidth}
                                        strokeOpacity={strokeOpacity}
                                    />
                                );
                            })}
                            
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ color: '#586e75', paddingTop: '20px', cursor: 'pointer' }} onClick={handleLegendClick} />
                        </RadarChart>
                    </ResponsiveContainer>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VersionAnalysisSection;