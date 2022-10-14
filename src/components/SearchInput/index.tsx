import { Button, Flex, Input } from '@chakra-ui/react';
import { FilterProps } from '@components/Filter';
import api from '@lib/api';
import { useFormik } from 'formik';
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
        `${url}=${search}${filter.length > 0 ? `&filter=${filter}` : ''}`
      );
      setSearchResult(data);
      resetForm();
    },
  });

  useEffect(() => {
    setIsLoading(formik.isSubmitting);
  }, [formik.isSubmitting]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <Flex maxW="600px" w="full" gap="2">
      {Filter({ setFilter })}
      <Flex w="full" direction="column" gap="2">
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
