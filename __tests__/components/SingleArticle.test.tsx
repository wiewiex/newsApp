import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SingleArticle from '@/components/controllers/SingleArticle';
import { IArticle } from '@/data/types';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';
import { Provider } from 'react-redux';
import store from '@/store';

const fakeArticle: IArticle = {
  author: 'John',
  content: 'Test content',
  description: 'Test description',
  publishedAt: new Date().toString(),
  source: { id: '1', name: 'test source' },
  title: 'Title',
  url: 'www.test.pl',
  urlToImage: null,
};

describe('Single Article is render correctly', () => {
  it('test', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SingleArticle article={fakeArticle} />
        </ThemeProvider>
      </Provider>
    );

    const author = screen.getByText(fakeArticle.author);
    expect(author).toBeInTheDocument();
  });
});
