export interface IArticle {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string | null;
}

export interface IApiResponse {
  status: string;
  articles: IArticle[];
  totalResults: number;
}

export interface ISingleMenuLink {
  countryCode: string;
  countryName: string;
  flagImg: string;
}
