export interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface ArticleExtended extends Article {
  abstract: string;
  authors: string[];
  location: string;
  date: string;
  pdf_link: string;
}
