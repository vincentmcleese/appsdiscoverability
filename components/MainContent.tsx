import { ReactNode } from 'react';
import { CornerMask } from './ui/CornerMask';

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-10 bg-white rounded-b-[2.5rem] md:rounded-b-[3.5rem] shadow-xl mb-0 md:mb-[400px] min-h-screen pt-[104px]">
      {children}
      <CornerMask />
    </main>
  );
}
