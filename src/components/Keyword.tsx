import React from 'react';

interface KeywordProps {
  definition: string;
  children: React.ReactNode;
}

const Keyword: React.FC<KeywordProps> = ({ definition, children }) => {
  return (
    <span className="relative group">
      <span className="font-bold text-[#cb4b16] cursor-pointer border-b border-dashed border-[#cb4b16]/50">
        {children}
      </span>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 rounded-md shadow-lg
                      bg-[#073642] text-[#eee8d5] text-sm leading-normal
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {definition}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#073642]"></div>
      </div>
    </span>
  );
};

export default Keyword;