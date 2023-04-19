import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/controllers/Header';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';
import { Provider } from 'react-redux';
import store from '@/store';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header Component', () => {
  it('test', () => {
    // @ts-ignore
    useRouter.mockReturnValue({
      query: {},
    });
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Provider>
    );
    const appName = screen.getByText('gnNews');
    expect(appName).toBeInTheDocument();
  });
});
