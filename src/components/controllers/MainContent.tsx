import { IApiResponse } from '@/data/types';
import { MainContentContainer } from '../views/styledContainers';
import SingleArticle from './SingleArticle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateNumberOfNews } from '@/store/numberOfNewsForCurrentCountry';
import { IRootState } from '@/store/types';

export default function MainContent({ news }: { news: IApiResponse }) {
  const dispatch = useDispatch();
  const isList = useSelector<IRootState>(
    (state) => state.articlesLayout.isList
  ) as boolean;

  useEffect(() => {
    dispatch(updateNumberOfNews(news.totalResults));
  }, [news]);

  return (
    <MainContentContainer isList={isList}>
      {news.articles?.map((el, i) => {
        return <SingleArticle key={i} article={el} />;
      })}
    </MainContentContainer>
  );
}
