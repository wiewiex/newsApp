import { FooterContainer } from '../views/styledContainers';
import { Text } from '../views/styledTexts';
import { useTranslation } from 'react-i18next';
import useCurrentTime from '@/hooks/useCurrentTime';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store/types';

export default function Footer() {
  const { t } = useTranslation('');
  const currentTime = useCurrentTime();
  const numberOfNewsForCurrentCountry = useSelector<IRootState>(
    (state) => state.numberOfNewsForCurrentCountry.numberOfNews
  );

  return (
    <FooterContainer>
      <Text width="80px">{currentTime}</Text>
      <Text>
        {`${t('Footer.numberOfNews')} ${numberOfNewsForCurrentCountry}`}
      </Text>
    </FooterContainer>
  );
}
