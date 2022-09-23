import {
  Avatar,
  Box,
  Flex,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { Member, Social } from '@interfaces/Member';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

function TagsStack({ tags }: { tags: string[] }): JSX.Element {
  if (!tags) {
    return <Box />;
  }

  function getColor(index: number): string {
    switch (index) {
      case 0:
        return 'blue';
      case 1:
        return 'green';
      case 2:
        return 'pink';
      default:
        return 'blue';
    }
  }

  return (
    <Stack direction="column" justify="center" paddingBottom="7" w="full">
      {tags.map((sm, index) => {
        return (
          <Tag
            w={{ base: 'full', sm: 'auto' }}
            textAlign="center"
            justifyContent="center"
            variant="solid"
            colorScheme={getColor(index)}
            fontWeight="bold"
            // eslint-disable-next-line react/no-array-index-key
            key={sm + index}
          >
            {sm}
          </Tag>
        );
      })}
    </Stack>
  );
}

function SocialMediaStack({ social }: { social: Social }): JSX.Element {
  if (!social) {
    return <Box />;
  }

  return (
    <Stack direction="row" gap="12">
      <Link href={social.facebook} key={social.facebook} isExternal>
        <Icon as={FiFacebook} w={5} h={5} color="blackAlpha.700" />
      </Link>
      <Link href={social.instagram} key={social.instagram} isExternal>
        <Icon as={FiInstagram} w={5} h={5} color="blackAlpha.700" />
      </Link>
      <Link href={social.linkedin} key={social.linkedin} isExternal>
        <Icon as={FiLinkedin} w={5} h={5} color="blackAlpha.700" />
      </Link>
    </Stack>
  );
}

export default function MemberCard({
  member,
}: {
  member: Member;
}): JSX.Element {
  return (
    <Box
      borderBottom={1}
      p="5"
      w="full"
      maxW="400px"
      minW={{ base: 'full', sm: '350px' }}
      borderStyle="solid"
      borderColor="gray.100"
      borderRadius="20"
      shadow="xl"
      bg="gray.100"
      mx="auto"
    >
      <Flex
        color="gray.700"
        direction="column"
        py="7"
        justify="space-between"
        align="center"
        h="full"
      >
        <Flex direction="column" align="center">
          <Avatar name={member.name} src={member.avatar} size="2xl" />
          <Text fontWeight="bold" py="4">
            {member.name}
          </Text>
          <Text pb="6">{member.description}</Text>
        </Flex>
        <Flex w="full" direction="column" align="center">
          <TagsStack tags={member.tags} />
          <SocialMediaStack social={member.social} />
        </Flex>
      </Flex>
    </Box>
  );
}
