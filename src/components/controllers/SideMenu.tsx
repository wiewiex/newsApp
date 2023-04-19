import { SideMenuContainer } from '../views/styledContainers';
import { useTranslation } from 'next-i18next';
import { H3 } from '../views/styledTexts';
import { CountryListContainer } from '../views/styledContainers';
import { getData } from '@/data';
import SingleMenuLink from './SingleMenuLink';
import { useRouter } from 'next/router';

export default function SideMenu() {
  const { t } = useTranslation('');
  const { locale } = useRouter();
  return (
    <SideMenuContainer>
      <H3>{t('SideMenu.title')}</H3>
      <CountryListContainer>
        {locale &&
          getData(locale).map((el, i) => {
            return <SingleMenuLink country={el} key={i} />;
          })}
      </CountryListContainer>
    </SideMenuContainer>
  );
}
