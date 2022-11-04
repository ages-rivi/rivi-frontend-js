import type { NextApiRequest, NextApiResponse } from 'next';
import { type Article } from 'old_src/interfaces/Article';
import { articles } from './articles';

type Response = Article[];

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  const { q, categories } = req.query;
  if (req.method === 'GET') {
    const filtered: Article[] = articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(String(q).toLowerCase() || '') &&
        (categories ? article.category === categories : true)
      );
    });

    res.status(200).json(filtered);
  } else res.status(405).end();
};
