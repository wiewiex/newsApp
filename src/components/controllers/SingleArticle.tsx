import { IArticle } from '@/data/types';
import { useState } from 'react';
import {
  SingleArticleContainer,
  Row,
  Column,
  ThumbnailContainer,
} from '../views/styledContainers';
import { H3, Text } from '../views/styledTexts';
import ArticleFullScreen from './ArticleFullScreen';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store/types';
import Image from 'next/image';

export default function SingleArticle({ article }: { article: IArticle }) {
  const {
    title,
    author,
    source,
    publishedAt,
    content,
    description,
    url,
    urlToImage,
  } = article;
  const [isOpen, setIsOpen] = useState(false);

  const isList = useSelector<IRootState>(
    (state) => state.articlesLayout.isList
  ) as boolean;

  return (
    <>
      <SingleArticleContainer isList={isList} onClick={() => setIsOpen(true)}>
        <H3>{title}</H3>
        <Row justifyContent="space-between">
          {!isList && (
            <ThumbnailContainer>
              <Image
                src={urlToImage ? urlToImage : '/placeholder.webp'}
                width={100}
                height={100}
                alt="article image"
              />
            </ThumbnailContainer>
          )}
          <Column>
            <Text>{author}</Text>
            <Text>{new Date(publishedAt).toLocaleDateString()}</Text>
          </Column>
        </Row>
      </SingleArticleContainer>
      {isOpen && (
        <ArticleFullScreen
          setIsOpen={setIsOpen}
          title={title}
          author={author}
          source={source}
          publishedAt={publishedAt}
          content={content}
          url={url}
          urlToImage={urlToImage}
          description={description}
        />
      )}
    </>
  );
}
