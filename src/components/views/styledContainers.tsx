import styled, { css } from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export const AppContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.quaternary};
  height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
  min-width: 400px;
`;

export const PopupContainer = styled.div<{ justifyContent?: string }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: center;
  background-color: ${(props) => props.theme.colors.quinary};
`;

export const HeaderContainer = styled.header`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.quinary};
  padding: 0px 30px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.quaternary};
  }
`;

export const LangSelectContainer = styled.div`
  a {
    color: ${(props) => `${props.theme.colors.quaternary}`};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }
  a:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }

  a:active {
    transform: scale(1.2);
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const ArticlesLayoutSwitcherContainer = styled.div`
  padding: 20px;
  cursor: pointer;
  &&:active {
    transform: rotate(0.5turn);
    transition: 0.5s;
  }
`;

export const MyMessageContainer = styled.div`
  cursor: pointer;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  height: 80vh;
`;

const withScroll = css`
  overflow-y: auto;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-button {
    display: none;
  }
  &&::-webkit-scrollbar-track-piece {
    background: ${(props) => props.theme.colors.senary};
  }
  &&::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.quaternary};
  }
`;

export const SideMenuContainer = styled.aside`
  min-width: 150px;
  width: 12%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.quinary};
  padding: 0 30px;
  ${() => withScroll};
  @media ${mediaQueries.mobile} {
    min-width: 34px;
    h3,
    h4 {
      display: none;
    }
  }
`;

export const SingleMenuLinkContainer = styled.div`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: ${(props) => `${props.theme.colors.quaternary}`};
  }
  a:hover {
    background-color: ${(props) => `${props.theme.colors.secondary}`};
    border-radius: 10%;
  }
`;

export const CountryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MainContentContainer = styled.section<{ isList: boolean }>(
  (props) =>
    props.isList
      ? css`
          width: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          ${() => withScroll};
          padding: 20px;
        `
      : css`
          width: 95%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          ${() => withScroll};
          padding: 20px;
        `
);

export const SingleArticleContainer = styled.div<{ isList: boolean }>((props) =>
  props.isList
    ? css`
        width: 70%;
        background-color: ${`${props.theme.colors.secondary}`};
        padding: 20px;
        margin-bottom: 10px;
        cursor: pointer;
      `
    : css`
        max-width: 300px;
        width: 70%;
        background-color: ${`${props.theme.colors.secondary}`};
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        margin-bottom: 10px;
        cursor: pointer;
      `
);
` 
`;

export const ThumbnailContainer = styled.div`
  margin-right: 5px;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;

export const ArticleFullScreenContainer = styled.div`
  padding: 20px;
  width: 80%;
  max-width: 600px;
`;

export const ExitIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 50px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.quinary};
  padding: 0px 30px;
  height: 8vh;
`;

export const Row = styled.div<{ justifyContent?: string }>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
