import type { NextApiRequest, NextApiResponse } from 'next';
import { ArticleExtended, type Article } from 'old_src/interfaces/Article';

type Response = Article[];

export const articles: Article[] = [
  {
    id: '1',
    title: 'TITLE 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'category1',
    tags: ['tag1', 'tag2'],
  },
  {
    id: '2',
    title: 'ABS 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'category3',
    tags: ['tag2'],
  },
];

export const articlesExtended: ArticleExtended[] = [
  {
    id: '1',
    title: 'TITLE 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'category1',
    tags: ['tag1', 'tag2'],
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authors: ['Autor 1', 'Autor2'],
    location: 'location1',
    date: '2021-01-01',
    pdf_link: 'https://www.google.com',
  },
  {
    id: '2',
    title: 'ABS 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'category3',
    tags: ['tag2'],
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authors: ['Autor 1', 'Autor2'],
    location: 'location1',
    date: '2021-01-01',
    pdf_link: 'https://www.google.com',
  },
];

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  const { extended } = req.query;
  if (req.method === 'GET') {
    if (extended) {
      res.status(200).json(articlesExtended);
    } else res.status(200).json(articles);
  } else res.status(405).end();
};
