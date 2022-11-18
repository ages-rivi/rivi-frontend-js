import { Flex, IconButton } from '@chakra-ui/react';
import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FiFilter } from 'react-icons/fi';
import { SearchInput } from '../../../atoms';

interface FilterFieldProps {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  // eslint-disable-next-line
  onSubmit?: (e?: any) => (any | Promise<any>) | undefined;
  // eslint-disable-next-line
  openFilter?: (e?: any) => void | undefined;
  name?: string;
}

export default function FilterField({
  onChange,
  onBlur,
  value,
  onSubmit,
  openFilter,
  name,
}: FilterFieldProps) {
  return (
    <Flex
      maxW="600px"
      w="full"
      gap="2"
      direction={{ base: 'column', sm: 'row' }}
    >
      <IconButton
        onClick={openFilter}
        aria-label="filter"
        icon={<FiFilter />}
      />
      <SearchInput
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        onSubmit={onSubmit}
      />
    </Flex>
  );
}
