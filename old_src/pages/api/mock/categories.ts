import type { NextApiRequest, NextApiResponse } from 'next';

type Response = string[];

export const categories: string[] = ['category1', 'category2', 'category3'];

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  if (req.method === 'GET') {
    res.status(200).json(categories);
  } else res.status(405).end();
};
