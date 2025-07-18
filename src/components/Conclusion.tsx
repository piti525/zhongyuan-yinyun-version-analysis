import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const Conclusion: React.FC = () => {
  return (
    <CollapsibleSection title="結論與展望">
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          本研究透過數位化平台對《中原音韵》的多版本進行了系統的視覺化分析，不僅清晰揭示了版本間的微小差異，更透過圖表有效展現了音韵體系的演變趨勢。研究結果表明，數位化技術在古籍版本校勘中具有巨大的應用潛力，它顯著提升了工作效率，並為音韵學和古文獻學的研究提供了創新的視角與方法。
        </p>
        <p>
          然而，本研究仍存在可深入探索的空間。版本差異背後的深層次原因有待進一步揭示，這需要未來結合更多版本數據與學者協作來完成。
        </p>
        <h3 className="font-serif font-bold text-xl text-[#073642] pt-4 mt-4 border-t border-dashed border-[#cb4b16]/30">未來展望</h3>
        <p>
          展望未來，隨著語音識別和人工智能技術的進步，《中原音韵》的數位化成果可為智能語音技術的研發提供寶貴的歷史數據支持。我們期待未來能借助更先進的技術工具和跨學科合作，推動《中原音韵》及相關古籍的全面研究，為中華優秀傳統文化的保護與傳承做出更大的貢獻。
        </p>
      </div>
    </CollapsibleSection>
  );
};

export default Conclusion;