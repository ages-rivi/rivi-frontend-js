import type { NextApiRequest, NextApiResponse } from 'next';
import { Member } from '../../interfaces/Member';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
): Promise<Array<Member>> => {
  const test = await fetch(`http://localhost:4000/api/pesquisadores`);
  res.status(200).json(test);
  return test;
};
