export interface IRootState {
  numberOfNewsForCurrentCountry: INumberOfNewsForCurrentCountry;
  articlesLayout: IArticlesLayout;
}

export interface IArticlesLayout {
  isList: boolean;
}
export interface INumberOfNewsForCurrentCountry {
  numberOfNews: number;
}
