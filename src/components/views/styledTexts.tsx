import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export const Text = styled.p<{ width?: string }>`
  font-size: 13px;
  text-align: justify;
  width: ${(props) => (props.width ? props.width : 'auto')};
  padding: 5px 0;
`;

export const H1 = styled.h1`
  font-size: 35px;
  padding: 10px 0;
`;

export const H2 = styled.h2`
  font-size: 50px;
  font-weight: 800;
  margin: 20px 0;
  @media ${mediaQueries.mobile} {
    padding: 20px 0;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  padding-bottom: 10px;
  font-weight: 600;
  padding: 20px 0;
  @media ${mediaQueries.mobile} {
    font-size: 16px;
    word-break: break-word;
  }
`;

export const H4 = styled.h4<{ width?: string }>`
  font-size: 14px;
  font-weight: 600;
  width: ${(props) => (props.width ? props.width : 'auto')};
  @media ${mediaQueries.mobile} {
    width: 70%;
  }
`;

export const H5 = styled.h5`
  font-size: 12px;
  font-weight: 200;
`;

export const H6 = styled.h6<{ width?: string }>`
  font-size: 13px;
  font-weight: 400;
  width: ${(props) => (props.width ? props.width : 'auto')};
  @media ${mediaQueries.mobile} {
    width: 30%;
  }
`;
