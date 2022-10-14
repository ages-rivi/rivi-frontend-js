import { type Article } from '@interfaces/Article';
import type { NextApiRequest, NextApiResponse } from 'next';
import { articles } from './articles';

type Response = Article[];

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  const { q } = req.query;
  if (req.method === 'GET') {
    const filtered: Article[] = articles.filter((article) => {
      return article.title
        .toLowerCase()
        .includes(String(q).toLowerCase() || '');
    });
    res.status(200).json(filtered);
  } else res.status(405).end();
};
