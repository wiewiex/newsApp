import {
  PopupContainer,
  ExitIconContainer,
  ArticleFullScreenContainer,
  Row,
  Column,
  ThumbnailContainer,
} from '../views/styledContainers';
import { Dispatch, SetStateAction } from 'react';
import { IArticle } from '@/data/types';
import { H3, Text } from '../views/styledTexts';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface IProps extends IArticle {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ArticleFullScreen({
  setIsOpen,
  title,
  author,
  source,
  publishedAt,
  content,
  description,
  url,
  urlToImage,
}: IProps) {
  const { t } = useTranslation('');

  return (
    <PopupContainer>
      <ExitIconContainer>
        <Image
          src="/exit.svg"
          width={50}
          height={50}
          alt="exit icon"
          onClick={() => setIsOpen(false)}
        />
      </ExitIconContainer>
      <ArticleFullScreenContainer>
        <Column>
          <ThumbnailContainer>
            <Image
              src={urlToImage ? urlToImage : '/placeholder.webp'}
              width={400}
              height={400}
              alt="article image"
            />
          </ThumbnailContainer>
          <Column>
            <H3>{title}</H3>
            <Text>{content}</Text>
            <Text>{description}</Text>
            <Text>{author}</Text>
            <Text>{source.name}</Text>
            <Text>{new Date(publishedAt).toLocaleDateString()}</Text>
            <Link href={url}>{t('ArticleFullScreen.link')}</Link>
          </Column>
        </Column>
      </ArticleFullScreenContainer>
    </PopupContainer>
  );
}
