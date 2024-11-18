import { ReactNode, useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';

import * as S from './styles'

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Estado que acompanha o recolhimento da Sidebar

  return (
    <S.Container>
          {/* Sidebar */}
          {/* <Sidebar onCollapseChange={setIsSidebarCollapsed} /> */}

          {/* Conteúdo */}
          <main
            className={`flex-1 p-4 transition-all duration-300 ease-in-out overflow-auto ${
              isSidebarCollapsed ? 'md:ml-20' : ''
            }`}
          >
            <S.ContainerContent className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
              {children}
            </S.ContainerContent>
          </main>
    </S.Container>
  );
};