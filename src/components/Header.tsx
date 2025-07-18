import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';

const Header: React.FC = () => {
  return (
    <header className="text-center pb-8 border-b-2 border-dashed border-[#cb4b16]/30">
      <div className="flex justify-center items-center gap-4 mb-4">
        <BookOpenIcon className="w-12 h-12 text-[#b58900]" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#073642] tracking-wider">
          《中原音韵》版本考
        </h1>
      </div>
      <div className="mt-8 text-sm text-[#657b83] space-y-1">
        <p><strong>院系:</strong> 文學院</p>
        <p><strong>學生:</strong> 曾怡涵, 馮曦, 李銘芳</p>
        <p><strong>指導教師:</strong> 李寒光 副教授</p>
      </div>
    </header>
  );
};

export default Header;