import React from 'react';
import CollapsibleSection from './CollapsibleSection';
import Keyword from './Keyword';

const Abstract: React.FC = () => {
  return (
    <CollapsibleSection title="摘要">
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          本研究旨在運用數位化平台對元代周德清所編纂的<Keyword definition="元代周德清所著，是研究近代漢語音韻的重要韻書。">《中原音韵》</Keyword>進行系統的版本校勘與音韻體系視覺化分析。《中原音韵》作為研究元代北方官話音系的核心文獻之一，其版本多樣且存在顯著差異，然而至今尚未有系統的校勘工作。
        </p>
        <p>
          本計畫結合文獻分析與現代數位化工具，對現存版本進行全面比較，揭示版本差異的成因與演變過程。
        </p>
        <p>
          計畫的最終目標是為《中原音韵》提供精確的校勘版本，為音韻學、古文獻學領域的研究提供新的視角與方法，同時為語音識別、自然語言處理等相關技術領域提供寶貴的歷史數據支持。
        </p>
      </div>
    </CollapsibleSection>
  );
};

export default Abstract;