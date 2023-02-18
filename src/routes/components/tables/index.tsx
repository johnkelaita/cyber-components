import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { Table } from '~/components/table/table';
import { TableColumn } from '~/components/table/table-column';
import { TableHead } from '~/components/table/table-head';
import { TableHeadColumn } from '~/components/table/table-head-column';
import { TableRow } from '~/components/table/table-row';
import { faker } from '@faker-js/faker';

export default component$(() => {
  const tableData1 = new Array(10).fill(0).map((item: any) => ({
    name: faker.name.fullName(), // Rowan Nikolaus
    email: faker.internet.email(), // Kassandra.Haley@erich.biz
    title: faker.name.jobTitle(), // National Markets Officer
    pic: faker.image.avatar() // https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg
  }));

  console.log(tableData1);

  const currentColor: "red" | "orange" | "bottom" = "blue";

  return (
    <div>

      <Container color={currentColor}>

        <Heading glow>Tables<Caret /></Heading>

        <div>
          <Table striped hover valign="middle">
            <TableHead>
              <TableRow active>
                <TableHeadColumn>Name</TableHeadColumn>
                <TableHeadColumn>EMail</TableHeadColumn>
                <TableHeadColumn>Title</TableHeadColumn>
              </TableRow>
            </TableHead>
            <tbody>
              {tableData1.map((item, index) => (
                <TableRow key={index}>
                  <TableColumn>{item.name}</TableColumn>
                  <TableColumn>{item.email}</TableColumn>
                  <TableColumn>{item.title}</TableColumn>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
