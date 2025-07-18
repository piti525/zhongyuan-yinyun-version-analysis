import React from 'react';
import CollapsibleSection from './CollapsibleSection';
import Keyword from './Keyword';

const ResearchMethods: React.FC = () => {
  return (
    <CollapsibleSection title="研究方法與挑戰">
      <div className="text-lg leading-relaxed space-y-8">
        <div className="bg-white/50 p-6 md:p-8 rounded-lg border border-[#eee8d5] shadow-sm">
          <h3 className="font-serif font-bold text-xl text-[#073642] mb-3">研究方法</h3>
          <p className="mb-2">
            本計畫綜合運用傳統文獻學方法與現代數位技術，主要採用以下兩種研究方法：
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#586e75]">
            <li>
              <strong><Keyword definition="一種通過搜集、鑑別、整理文獻，並對其內容進行客觀分析以形成認識的研究方法。">文獻分析法</Keyword>:</strong> 全面搜集、整理與《中原音韵》相關的各類文獻資料，包括近現代刊行本、古籍善本、學者論著等，構建詳實資料庫，為版本源流、歷史價值的深入剖析奠定基礎。
            </li>
            <li>
              <strong>比較分析與<Keyword definition="利用計算機技術對比古籍不同版本，以發現異文、訛誤，提高校勘效率與準確性。">數位化校勘</Keyword>:</strong> 對現存的多種版本進行細緻入微的對比研究，不僅關注字詞異同、韵類調整等宏觀差異，更借助 <code className="bg-[#eee8d5] px-1 py-0.5 rounded text-[#cb4b16]">Diffchecker</code> 等數位化工具進行高效文本比對，探究抄寫、刻印、編者意圖等導致差異的深層原因。
            </li>
          </ul>
        </div>
        <div className="bg-white/50 p-6 md:p-8 rounded-lg border border-[#eee8d5] shadow-sm">
          <h3 className="font-serif font-bold text-xl text-[#073642] mb-3">主要挑戰</h3>
          <p className="mb-2">
            在研究過程中，版本校勘面臨著獨特的挑戰：
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#586e75]">
            <li>
              <strong>版本的複雜性:</strong> 各版本在文字、內容、結構上均存在差異。例如，明代刊本常增補註釋，而清代校本則對原文進行修訂，導致音韵條目不一致，增加了恢復原貌的難度。
            </li>
            <li>
              <strong>原始文獻的缺失:</strong> 元代原版文獻的缺失是本研究最大的限制，所有結論都基於對後世版本的推斷和比較，這要求研究者具備紮實的音韵學和文獻學功底。
            </li>
          </ul>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default ResearchMethods;