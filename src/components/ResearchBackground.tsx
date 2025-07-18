import React from 'react';
import CollapsibleSection from './CollapsibleSection';
import Keyword from './Keyword';

const ResearchBackground: React.FC = () => {
  return (
    <CollapsibleSection title="研究背景">
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          <Keyword definition="元代周德清所著，是研究近代漢語音韻的重要韻書。">《中原音韵》</Keyword>是元代周德清編纂的音韵學經典著作，成書於至正元年（1341年），被譽為<Keyword definition="指其在元代北曲創作中的標準與典範地位。">「北曲之圭臬，官話之正音」</Keyword>。其核心價值在於記錄了14世紀北方官話的語音系統，為研究漢語語音史、戲曲音律及普通話形成歷史提供了關鍵依據。
        </p>
        <p>
          然而，《中原音韵》的版本問題一直是學界研究的重要難點之一。現存版本種類繁多，包括明清時期的刊本和抄本，但元代原刊本至今未被發現，且不同版本間的差異問題始終沒有得到完全解決。這些差異不僅表現在文字上，還涉及內容的刪減、增補及結構上的不同，使得辨析和確認其原始音韵體系成為一項極具挑戰性的研究。
        </p>
      </div>
    </CollapsibleSection>
  );
};

export default ResearchBackground;