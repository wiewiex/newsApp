import { ISingleMenuLink } from './types';

export const countries = [
  'au',
  'at',
  'be',
  'br',
  'bg',
  'ca',
  'cn',
  'co',
  'cu',
  'cz',
  'eg',
  'fr',
  'de',
  'gr',
  'hk',
  'hu',
  'in',
  'id',
  'ie',
  'il',
  'it',
  'jp',
  'lv',
  'lt',
  'my',
  'mx',
  'ma',
  'nl',
  'nz',
  'ng',
  'no',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
];

export const getData = (locale: string) => {
  const regionNames = new Intl.DisplayNames([locale], { type: 'region' });

  const data = countries.map((el) => {
    return {
      countryCode: el,
      countryName: regionNames.of(el.toUpperCase()),
      flagImg: `https://newsapi.org/images/flags/${el}.svg`,
    };
  }) as ISingleMenuLink[];

  return data;
};
