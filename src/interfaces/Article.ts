export interface Article {
  title: string;
  category: string;
  description: string;
  href: string;
}

export interface ArticleExtended extends Article {
  abstract: string;
  authors: string[];
  location: string;
  date: string;
  pdf_link: string;
}
