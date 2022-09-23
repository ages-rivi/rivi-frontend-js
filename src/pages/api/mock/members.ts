import { SortedMembers, type Member } from '@interfaces/Member';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = SortedMembers;

export const members: Member[] = [
  {
    id: 1,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec vitae elit viverra, mattis ligula eu, facilisis nisl. Morbi malesuada, tellus feugiat convallis tempus. Nullam tempor arcu turpis, vel euismod eros tincidunt nec.',
    avatar: 'https://avatars.githubusercontent.com/u/460958?v=4',
    tags: ['tag1', 'tag2', 'tag3'],
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    role: 'colaborator',
  },
  {
    id: 2,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec',
    avatar: 'https://avatars.githubusercontent.com/u/460958?v=4',
    tags: ['tag1', 'tag2', 'tag3'],
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    role: 'colaborator',
  },
  {
    id: 3,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec vitae elit viverra, mattis ligula eu, facilisis nisl. Morbi malesuada, tellus feugiat convallis tempus. Nullam tempor arcu turpis, vel euismod eros tincidunt nec.',
    avatar: 'https://avatars.githubusercontent.com/u/460958?v=4',
    tags: ['tag1'],
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    role: 'colaborator',
  },
  {
    id: 4,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec vitae elit viverra, mattis ligula eu, facilisis nisl. Morbi malesuada, tellus feugiat convallis tempus. Nullam tempor arcu turpis, vel euismod eros tincidunt nec.',
    avatar: 'https://avatars.githubusercontent.com/u/460958?v=4',
    tags: ['tag1', 'tag2', 'tag3'],
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    role: 'groupMember',
  },
  {
    id: 5,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec',
    avatar: 'https://avatars.githubusercontent.com/u/460958?v=4',
    tags: ['tag1', 'tag2', 'tag3'],
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    role: 'groupMember',
  },
  {
    id: 6,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec vitae elit viverra, mattis ligula eu, facilisis nisl. Morbi malesuada, tellus feugiat convallis tempus. Nullam tempor arcu turpis, vel euismod eros tincidunt nec.',
    avatar: 'https://avatars.githubusercontent.com/u/460958?v=4',
    tags: ['tag1'],
    social: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    role: 'groupMember',
  },
];

export function getSortedMembers(): SortedMembers {
  return {
    colaborators: members.filter((member) => {
      return member.role === 'colaborator';
    }),
    researchGroup: members.filter((member) => {
      return member.role === 'groupMember';
    }),
  };
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response | Member[]>
): void => {
  const sorted = req.query?.sorted;
  if (req.method === 'GET') {
    if (sorted) {
      res.status(200).json(getSortedMembers());
    } else {
      res.status(200).json({ ...members });
    }
  } else res.status(405).end();
};
