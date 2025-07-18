import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const ResearchSignificance: React.FC = () => {
  return (
    <CollapsibleSection title="研究意義">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
        <div className="bg-white/50 p-6 rounded-lg border border-[#eee8d5] shadow-sm">
          <h3 className="font-serif font-bold text-xl text-[#073642] mb-3">理論意義</h3>
          <p className="leading-relaxed">
            《中原音韵》作為一部音韵學經典，在元代語言學背景下具有不可替代的地位。深入研究其版本，有助於揭示元代音系的結構、音韵變化規律，完善古漢語音韵學體系，並推動音韵學與古文獻學、歷史學等領域的跨學科融合。
          </p>
        </div>
        <div className="bg-white/50 p-6 rounded-lg border border-[#eee8d5] shadow-sm">
          <h3 className="font-serif font-bold text-xl text-[#073642] mb-3">實踐意義</h3>
          <p className="leading-relaxed">
            在當前資訊技術飛速發展的背景下，對《中原音韵》的數位化研究，尤其是版本間音韵差異的精確比對，能為現代語音識別、自然語言處理等技術提供寶貴的歷史音韵數據，為構建更具歷史深度的現代漢語標準提供理論基礎。
          </p>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default ResearchSignificance;