import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import { AppContainer, MainContainer } from '../views/styledContainers';

const SideMenu = dynamic(() => import('./SideMenu'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <SideMenu />
        {children}
      </MainContainer>
      <Footer />
    </AppContainer>
  );
}
