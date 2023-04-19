import Link from 'next/link';
import { useRouter } from 'next/router';
import { LangSelectContainer } from '../views/styledContainers';

const switchIndex = (indexOfCurrentLang: number, languages: string[]) =>
  indexOfCurrentLang < languages.length - 1 ? indexOfCurrentLang + 1 : 0;

const LangSelect = () => {
  const router = useRouter();
  const { pathname, query, asPath } = router;

  const locale = router.locale as string;
  const locales = router.locales as string[];

  const nextLang =
    locales && locales[switchIndex(locales.indexOf(locale), locales)];

  return (
    <LangSelectContainer>
      <Link href={{ pathname, query }} as={asPath} locale={nextLang}>
        {locale}
      </Link>
    </LangSelectContainer>
  );
};

export default LangSelect;
