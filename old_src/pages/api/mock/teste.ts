import type { NextApiRequest, NextApiResponse } from 'next';

interface Response {
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  res.status(200).json({ name: 'John Doe' });
};
