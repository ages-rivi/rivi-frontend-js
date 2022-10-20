import type { NextApiRequest, NextApiResponse } from 'next';

type Response = string[];

export const tags: string[] = ['tag 1', 'tag 2', 'tag 3'];

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  if (req.method === 'GET') {
    res.status(200).json(tags);
  } else res.status(405).end();
};
