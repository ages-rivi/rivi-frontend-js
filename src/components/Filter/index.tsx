import { IconButton } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';

export interface FilterProps {
  setFilter: (filter: string) => void;
}

export default function Filter({ setFilter }: FilterProps) {
  useEffect(() => {
    setFilter('batata');
  }, []);
  return <IconButton aria-label="filter" icon={<FiFilter />} />;
}
