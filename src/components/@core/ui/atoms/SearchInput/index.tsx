import { Button, Flex, Input } from '@chakra-ui/react';
import { ChangeEventHandler, FocusEventHandler } from 'react';

interface SearchInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  // eslint-disable-next-line
  onSubmit?: (e?: any) => void | undefined;
  name?: string;
}

export default function SearchInput({
  onChange,
  onBlur,
  value,
  onSubmit,
  name,
}: SearchInputProps) {
  return (
    <Flex
      maxW="600px"
      w="full"
      gap="2"
      direction={{ base: 'column', sm: 'row' }}
    >
      <Flex w="full" gap="2">
        <Input
          placeholder="Pesquisar"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (typeof onSubmit !== undefined) onSubmit!();
            }
          }}
        />
      </Flex>
      <Button colorScheme="teal" px="8" onClick={onSubmit}>
        Buscar
      </Button>
    </Flex>
  );
}
