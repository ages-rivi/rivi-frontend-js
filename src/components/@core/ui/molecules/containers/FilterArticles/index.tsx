import {
  Button,
  FormControl,
  FormLabel,
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
import { Select } from 'chakra-react-select';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { stringToOption } from 'src/utils/limit';
import FilterFieldView from '../../views/FilterField';

interface SelectOption {
  value: string;
  label: string;
}

interface FilterValues {
  categories: string[];
  search: string;
}

interface FilterFieldProps {
  // eslint-disable-next-line
  onFilter: (e: FilterValues) => any | Promise<any>;
  categories: string[];
}

export default function FilterArticles({
  onFilter,
  categories,
}: FilterFieldProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);
  const formik = useFormik({
    initialValues: {
      categories: [] as SelectOption[],
      textFilter: '',
    },
    onSubmit: async ({ categories: cat, textFilter }, { resetForm }) => {
      const payload = {
        categories: cat.map((category) => {
          return category.value;
        }),
        search: textFilter,
      };
      onFilter(payload);
      resetForm();
      onClose();
    },
  });

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
      <FilterFieldView
        name="textFilter"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.textFilter}
        onSubmit={formik.submitForm}
        openFilter={onOpen}
      />
    </>
  );
}
