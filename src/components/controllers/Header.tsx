import { HeaderContainer } from '../views/styledContainers';
import { H1 } from '../views/styledTexts';
import { useTheme } from 'styled-components';
import LangSelect from './LangSelect.';
import Link from 'next/link';
import { Row } from '../views/styledContainers';
import ArticlesLayoutSwitcher from './ArticlesLayoutSwitcher';
import MyMessage from './MyMessage';

export default function Header() {
  const { appName } = useTheme() as { appName: string };

  return (
    <HeaderContainer>
      <Link href="/">
        <H1>{appName}</H1>
      </Link>
      <Row justifyContent="flex-end">
        <MyMessage />
        <ArticlesLayoutSwitcher />
        <LangSelect />
      </Row>
    </HeaderContainer>
  );
}
