import { type Article } from '@interfaces/Article';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = Article[];

export const articles: Article[] = [
  {
    title: 'TITLE 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'category1',
    href: 'https://www.google.com/',
  },
  {
    title: 'ABS 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'category1',
    href: 'https://www.google.com/batata',
  },
];

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  if (req.method === 'GET') {
    res.status(200).json(articles);
  } else res.status(405).end();
};
