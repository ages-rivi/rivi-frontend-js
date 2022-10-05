/* import { Flex, Text } from '@chakra-ui/react';
// import ProjectItem from '@components/ProjectCard';
import DataTable from '@components/DataTable';

function EditaProjetos(): JSX.Element {
  return (
    <Flex direction="column">
      <Flex direction="column" maxW="1330px" w="full" margin="auto" gap="3">
        <Text textAlign="center" fontWeight="medium" fontSize="5xl">
          Edita Projetos
        </Text>
      </Flex>
      <DataTable />
    </Flex>
  );
}

export default EditaProjetos;
*/

import { CheckCircleIcon, TimeIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { ChakraUITable } from 'react-chakra-ui-table';

// Example Table
function TodoListTable() {
  const columns = [
    {
      Header: '#',
      Cell: ({ row }) => {
        return <Text>{row.index + 1}</Text>;
      },
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Completed',
      accessor: 'completed',
      Cell: ({ value }) => {
        return value ? (
          <CheckCircleIcon boxSize={5} color="green.400" />
        ) : (
          <TimeIcon boxSize={5} color="orange.400" />
        );
      },
    },
  ];

  const [data, setData] = useState(null);

  const loadData = useRef();

  loadData.current = async () => {
    const urls = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/todos',
    ];

    try {
      const result = await Promise.all(
        urls.map((url) => {
          return fetch(url).then((r) => {
            return r.json();
          });
        })
      );

      if (result.length === 2) {
        // index 0 is user
        // index 1 is todo
        const todoList = result[1].map((todo) => {
          todo.user = result[0].find((i) => {
            return i.id === todo.userId;
          });
          todo.name = todo.user?.name;
          return todo;
        });

        setData(todoList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData.current();
  }, []);

  return data && <ChakraUITable columns={columns} data={data} />;
}

function EditaProjetos(): JSX.Element {
  return (
    <Flex p={6} direction="column">
      <TodoListTable />
    </Flex>
  );
}

export default EditaProjetos;
