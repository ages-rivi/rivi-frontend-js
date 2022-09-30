type Role = 'colaborator' | 'groupMember';

export interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
}

export interface Member {
  id: number;
  name: string;
  description: string;
  avatar: string;
  tags: string[];
  social: Social;
  role: Role;
}

export interface SortedMembers {
  researchGroup: Member[];
  colaborators: Member[];
}
