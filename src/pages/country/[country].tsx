import { GetStaticPaths, GetStaticPropsContext, GetStaticProps } from 'next';
import { IApiResponse } from '@/data/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainContent from '@/components/controllers/MainContent';
import { countries } from '@/data';

interface IPath {
  params: {
    country: string;
  };
  locale: string;
}

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const paths: IPath[] = [];

  locales?.forEach((locale) => {
    countries.forEach((country) => {
      paths.push({
        params: {
          country: country,
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const res = await fetch(
    `${process.env.API_URL}/top-headlines?country=${params?.country}&pageSize=50&apiKey=${process.env.API_KEY}`
  );

  const currentCountryNews: IApiResponse = await res.json();

  return {
    props: {
      currentCountryNews,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 86400,
  };
};

export default function Country({
  currentCountryNews,
}: {
  currentCountryNews: IApiResponse;
}) {
  return <MainContent news={currentCountryNews} />;
}
