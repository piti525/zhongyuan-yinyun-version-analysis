import React from 'react';
import type { TimelineCategory } from '../types';
import SectionTitle from './SectionTitle';

const timelineData: TimelineCategory[] = [
  {
    name: '全本系列',
    events: [
      { id: '瞿藏本', year: 'c. 1350', title: '瞿藏本', description: '被認為最接近元刊本的版本，具有極高的文獻價值。', color: '#2aa198' },
      { id: '訥庵本', year: '1441', title: '訥庵本', description: '明代正統年間的重刻本，進行了文字修正和編輯。', color: '#2aa198' },
      { id: '嘯餘譜本', year: '1619', title: '嘯餘譜本', description: '明萬曆年間出版，注重校正，內容更完整。', color: '#2aa198' },
      { id: '四庫全書本', year: 'c. 1780', title: '四庫全書本', description: '系統整理版本，對文字和排版進行了規範化。', color: '#2aa198' },
    ],
  },
  {
    name: '節本系列',
    events: [
      { id: '谢天瑞本', year: '1599', title: '謝天瑞《樂府通用》本', description: '縮略版，主要保留《韻譜》部分，方便查閱。', color: '#859900' },
      { id: '汇选本', year: 'c. 1610', title: '《彙選歷代名賢詞府全集》本', description: '收錄《中原音韵》內容的改編版。', color: '#859900' },
    ],
  },
  {
    name: '增訂刪補本系列',
    events: [
      { id: '王文璧本', year: 'c. 1550', title: '王文璧《中州音韵》', description: '基於《中原音韵》編纂，完善了音韵體系。', color: '#d33682' },
      { id: '叶以震本', year: '1601', title: '葉以震《重訂中原音韵》', description: '結合王文璧本進行重新編輯和改編。', color: '#d33682' },
    ],
  },
   {
    name: '現代刊行本系列',
    events: [
      { id: '石山福治本', year: '1925', title: '石山福治《考定中原音韵》本', description: '依據日本內閣文庫本等資料考證形成。', color: '#6c71c4' },
      { id: '赵荫棠本', year: '1936', title: '趙蔭棠《中原音韵研究》', description: '結合現代音韵學理論，用音節表形式排布。', color: '#6c71c4' },
    ],
  },
];

interface TimelineSectionProps {
  onVersionSelect: (id: string) => void;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ onVersionSelect }) => {
  return (
    <section id="timeline">
      <SectionTitle>版本演變時間線</SectionTitle>
      <div className="mt-12 container mx-auto px-4 relative">
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 border-r-2 border-dashed border-[#cb4b16]/30" aria-hidden="true"></div>
        <div className="space-y-12">
          {timelineData.map((category) => (
            <div key={category.name}>
              <div className="flex items-center gap-4 mb-8">
                  <div className="z-10 w-6 h-6 rounded-full" style={{backgroundColor: category.events[0].color}}></div>
                  <h3 className="text-2xl font-serif font-bold" style={{color: category.events[0].color}}>
                    {category.name}
                  </h3>
              </div>
              <div className="space-y-8 pl-10 relative">
                {category.events.map((event) => {
                  const isClickable = ['瞿藏本', '訥庵本', '嘯餘譜本', '四庫全書本', '王文璧本', '葉以震本', '趙蔭棠本'].includes(event.id);
                  return (
                    <div key={event.id} className="relative">
                      <div className="absolute -left-12 top-1.5 z-10 w-4 h-4 rounded-full border-4 border-[#fdf6e3]" style={{backgroundColor: event.color}}></div>
                      <button 
                        onClick={() => isClickable && onVersionSelect(event.id)} 
                        disabled={!isClickable} 
                        className={`text-left w-full p-4 rounded-lg bg-white/60 border border-gray-200 shadow-sm transition-all duration-300 ${isClickable ? 'cursor-pointer hover:shadow-md hover:border-[#b58900]/50' : 'cursor-default'}`}
                      >
                          <p className="font-bold text-sm text-[#657b83]">{event.year}</p>
                          <h4 className={`font-bold text-xl mb-1 ${isClickable ? 'text-[#073642]' : 'text-gray-500'}`}>{event.title}</h4>
                          <p className="text-base leading-snug text-[#657b83]">{event.description}</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;