import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { H1 } from '@/components/views/styledTexts';
import { useTheme } from 'styled-components';
import { PopupContainer } from '@/components/views/styledContainers';
import { ThemeInterface } from '@/utils/theme';

export default function Home() {
  const router = useRouter();
  const { appName, colors } = useTheme() as ThemeInterface;

  useEffect(() => {
    router.push('/country/pl');
  }, []);

  return (
    <PopupContainer>
      <H1>{appName}</H1>
      <ReactLoading
        type="spin"
        color={colors.quaternary}
        height={'10vh'}
        width={'10vh'}
      />
    </PopupContainer>
  );
}
