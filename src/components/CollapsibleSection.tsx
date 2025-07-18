import React, { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 border-b-2 border-[#eee8d5]"
      >
        <div className="text-center flex-grow">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#b58900] inline-block">
            {title}
          </h2>
           <div className="mt-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#cb4b16]/50 to-transparent"></div>
        </div>
        <ChevronIcon className={`w-6 h-6 text-[#b58900] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-6 pb-2">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSection;