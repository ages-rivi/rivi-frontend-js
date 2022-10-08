import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Genres',
    selector: 'genres',
    sortable: true,
    cell: (d: { genres: string[] }): JSX.Element => {
      return <span>{d.genres.join(', ')}</span>;
    },
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
];

export const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
    runtime: '92',
    genres: ['Comedy', 'Fantasy'],
    director: 'Tim Burton',
    actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
];

export default function ListaProjetos(): React.ReactNode {
  const [isRenddered, setIsRended] = useState(false);

  useEffect(() => {
    setIsRended(true);
  }, []);

  // replace null with loading spinner
  if (!isRenddered)
    return (
      <Flex w="full" justify="center" p="20">
        <Spinner color="teal" />
      </Flex>
    );

  return (
    <Flex justify="center" p="6">
      <Box
        maxW="1000px"
        w="full"
        border="1px solid gray"
        borderColor="gray.200"
        borderRadius="md"
      >
        <DataTable
          // eslint-disable-next-line
          // @ts-ignore
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </Box>
    </Flex>
  );
}
