import { Flex, Text } from '@chakra-ui/react';
import { Member } from 'src/types/Member';
import MemberCard from './MemberCard';

interface MemberCardCaroselProps {
  members: Member[];
  title: string;
}

export default function MemberCardCarosel({
  members,
  title,
}: MemberCardCaroselProps): JSX.Element {
  return (
    <Flex direction="column" w="full" maxW="1330px" align="center" mb="5">
      <Text fontSize="4xl" textAlign="center" fontWeight="bold" mt="5">
        {title}
      </Text>
      <Flex
        gap="5"
        direction={{ base: 'column', lg: 'row' }}
        maxW="full"
        overflow="auto"
        py="8"
      >
        {members.map((member) => {
          return <MemberCard key={member.id} member={member} />;
        })}
      </Flex>
    </Flex>
  );
}
