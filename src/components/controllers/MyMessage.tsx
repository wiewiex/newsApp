import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import {
  MyMessageContainer,
  PopupContainer,
  ExitIconContainer,
} from '../views/styledContainers';
import { H2 } from '../views/styledTexts';

export default function MyMessage() {
  const { t } = useTranslation('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <MyMessageContainer onClick={() => setIsOpen(true)}>
        <Image src="/message.svg" alt="message icon" width={30} height={30} />
      </MyMessageContainer>
      {isOpen && (
        <PopupContainer>
          <ExitIconContainer onClick={() => setIsOpen(false)}>
            <Image src="/exit.svg" alt="exit icon" width={50} height={50} />
          </ExitIconContainer>
          <H2>{t('Message')}</H2>
        </PopupContainer>
      )}
    </>
  );
}
