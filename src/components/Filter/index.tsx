import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import api from '@lib/api';
import { Select } from 'chakra-react-select';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { FiFilter } from 'react-icons/fi';

export interface FilterProps {
  setFilter: (filter: string) => void;
}

const fetchCategories = async () => {
  const { data } = await api.get('categories');
  return data;
};

export default function Filter({ setFilter }: FilterProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState([]);

  const ref = useRef(null);

  const formik = useFormik({
    initialValues: {
      categories: [],
    },
    onSubmit: async ({
      categories: ctgrs,
    }: {
      categories: { label: string; value: string }[];
    }) => {
      const categoriesFilter = ctgrs.map((category) => {
        return category.value;
      });

      if (categoriesFilter.length > 0) {
        const filter = `&categories=${categoriesFilter.join(',')}`;
        setFilter(filter);
        onClose();
      }
    },
  });

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const stringToOption = (string: string) => {
    return {
      label: string,
      value: string,
      variant: 'outline',
    };
  };

  return (
    <>
      <Modal finalFocusRef={ref} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtros</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap="3">
              <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Select
                  placeholder="Categorias..."
                  colorScheme="teal"
                  selectedOptionStyle="check"
                  useBasicStyles
                  isMulti
                  // eslint-disable-next-line
                  // @ts-ignore
                  options={categories.map(stringToOption)}
                  name="categories"
                  value={formik.values.categories}
                  onChange={(values) => {
                    formik.handleChange({
                      target: {
                        name: 'categories',
                        value: values,
                      },
                    });
                  }}
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter w="full">
            <Button
              w="full"
              colorScheme="teal"
              mr={3}
              onClick={formik.submitForm}
            >
              Aplicar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <IconButton onClick={onOpen} aria-label="filter" icon={<FiFilter />} />
    </>
  );
}
