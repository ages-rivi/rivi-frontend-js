import { Box, Stack } from '@chakra-ui/react';
import { Tag } from '../../../atoms';

interface TagStackProps {
  tags: string[];
  colors: (index: number) => string;
}

export default function TagStack({ tags, colors }: TagStackProps): JSX.Element {
  if (!tags) {
    return <Box />;
  }

  return (
    <Stack direction="column" justify="center" paddingBottom="7" w="full">
      {tags.map((label, index) => {
        return (
          <Tag
            colorScheme={colors(index)}
            // eslint-disable-next-line react/no-array-index-key
            key={label + index}
            label={label}
          />
        );
      })}
    </Stack>
  );
}
