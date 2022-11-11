import { Tag } from '@chakra-ui/react';

interface TagProps {
  label: string;
  colorScheme: string;
}

export default function TagComponent({ label, colorScheme }: TagProps) {
  return (
    <Tag
      w={{ base: 'full', sm: 'auto' }}
      textAlign="center"
      justifyContent="center"
      variant="solid"
      colorScheme={colorScheme}
      fontWeight="bold"
    >
      {label}
    </Tag>
  );
}
