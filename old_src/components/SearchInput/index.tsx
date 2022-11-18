import { Button, Flex, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FilterProps } from 'old_src/components/Filter';
import api from 'old_src/lib/api';
import { useEffect, useState } from 'react';

interface SearchInputProps {
  // eslint-disable-next-line
  setSearchResult: (data: any) => void;

  // eslint-disable-next-line
  setIsLoading: (isLoading: any) => void;
  filter: ({ setFilter }: FilterProps) => React.ReactNode;
  url: string;
}

export default function SearchInput({
  setSearchResult,
  setIsLoading,
  filter: Filter,
  url,
}: SearchInputProps) {
  const [filter, setFilter] = useState('');
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: async ({ search }, { resetForm }) => {
      const { data } = await api.get(
        `${url}${search}${filter.length > 0 ? `${filter}` : ''}`
      );
      setSearchResult(data);
      resetForm();
    },
  });

  useEffect(() => {
    setIsLoading(formik.isSubmitting);
  }, [formik.isSubmitting]);

  useEffect(() => {
    if (filter.length) formik.submitForm();
  }, [filter]);

  return (
    <Flex
      maxW="600px"
      w="full"
      gap="2"
      direction={{ base: 'column', sm: 'row' }}
    >
      <Flex w="full" gap="2">
        {Filter({ setFilter })}
        <Input
          placeholder="Pesquisar"
          name="search"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.search}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              formik.handleSubmit();
            }
          }}
        />
      </Flex>
      <Button
        colorScheme="teal"
        px="8"
        onClick={() => {
          formik.handleSubmit();
        }}
        isDisabled={!formik.values.search}
        isLoading={formik.isSubmitting || formik.isValidating}
      >
        Buscar
      </Button>
    </Flex>
  );
}
