import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { faker } from '@faker-js/faker';
import Box from '../box';

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
    <Container color={currentColor}>
      <Heading glow>Containers</Heading>

      <p>Useful for displaying inner content in boxes</p>

      <p>This page is enclosed in a container, with drop shadow and all</p>
    </Container>
  );
});

export const head: DocumentHead = {
  title: 'Buttons: Qwik Cyber Themed Components',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
