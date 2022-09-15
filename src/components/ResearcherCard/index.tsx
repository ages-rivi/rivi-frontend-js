import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const icons: { [name: string]: IconType } = {
  facebook: FiFacebook,
  instagram: FiInstagram,
  linkedin: FiLinkedin,
};

interface Researcher {
  name: string;
  image?: string;
  description?: string;
  tags?: Array<Tags>;
  socialMedia?: Array<SocialMedia>;
}

interface Tags {
  name: string;
  color: string;
}

interface SocialMedia {
  icon: string;
  href: string;
}

const RESEARCHER: Researcher = {
  name: 'Jade smith',
  image:
    'https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis lectus sed odio ornare, in posuere ligula euismod. Etiam sed venenatis magna. Morbi libero lacus. Donec vitae elit viverra, mattis ligula eu, facilisis nisl. Morbi malesuada, tellus feugiat convallis tempus. Nullam tempor arcu turpis, vel euismod eros tincidunt nec.',
  tags: [
    {
      name: 'Bullying',
      color: 'blue',
    },
    {
      name: 'Comunicação',
      color: 'green',
    },
    {
      name: 'Autocompaixão',
      color: 'pink',
    },
  ],
  socialMedia: [
    {
      icon: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      icon: 'instagram',
      href: 'https://www.instagram.com',
    },
    {
      icon: 'linkedin',
      href: 'https://www.linkedin.com',
    },
  ],
};

function TagsStack(): JSX.Element {
  if (!RESEARCHER.tags) {
    return <Box />;
  }

  return (
    <HStack direction="row" justify="center" paddingBottom="24px">
      {RESEARCHER.tags.map((sm) => {
        return (
          <Tag
            size="sm"
            variant="solid"
            colorScheme={sm.color}
            fontSize="sm"
            fontWeight="bold"
          >
            {sm.name}
          </Tag>
        );
      })}
    </HStack>
  );
}

function SocialMediaStack(): JSX.Element {
  if (!RESEARCHER.socialMedia) {
    return <Box />;
  }

  return (
    <Stack direction="row" spacing="65px">
      {RESEARCHER.socialMedia.map((sm) => {
        return (
          <Link href={sm.href} isExternal>
            <Icon
              as={icons[sm.icon]}
              w="24px"
              h="24px"
              color="blackAlpha.700"
            />
          </Link>
        );
      })}
    </Stack>
  );
}

export default function ResearcherItem(): JSX.Element {
  return (
    <Box
      borderBottom={1}
      p="12px"
      width="360px"
      borderStyle="solid"
      borderColor="gray.100"
      borderRadius="20"
      shadow="xl"
      bg="gray.100"
    >
      <Flex
        color="gray.700"
        direction="column"
        py="18px"
        align="center"
        maxW="300.px"
        m="auto"
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="2xl"
        />
        <Text py="15px">{RESEARCHER.name}</Text>
        <Text paddingBottom="20px">{RESEARCHER.description}</Text>
        <TagsStack />
        <SocialMediaStack />
      </Flex>
    </Box>
  );
}
