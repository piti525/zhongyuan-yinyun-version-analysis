import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#b58900] inline-block">
        {children}
      </h2>
      <div className="mt-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#cb4b16]/50 to-transparent"></div>
    </div>
  );
};

export default SectionTitle;
