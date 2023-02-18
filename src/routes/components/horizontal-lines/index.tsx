import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { faker } from '@faker-js/faker';
import { HorizontalLine } from '~/components/horizontal-line/horizontal-line';

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
      <Heading glow>Horizontal Lines</Heading>

      <p>Size 1 and default</p>
      <HorizontalLine />

      <p>Style: Dashed</p>
      <HorizontalLine size={1} style="dashed" />

      <p>Style: Doubled</p>
      <HorizontalLine size={1} style="doubled" />

      <p>Style: Pulsing</p>
      <HorizontalLine size={1} style="pulse" />

      <br />

      <p>Size 2</p>
      <HorizontalLine size={2} />

      <p>Style: Dashed</p>
      <HorizontalLine size={2} style="dashed" />

      <p>Style: Doubled</p>
      <HorizontalLine size={2} style="doubled" />

      <p>Style: Pulsing</p>
      <HorizontalLine size={2} style="pulse" />


      <br />

      <p>Size 3</p>
      <HorizontalLine size={3} />

      <p>Style: Dashed</p>
      <HorizontalLine size={3} style="dashed" />

      <p>Style: Doubled</p>
      <HorizontalLine size={3} style="doubled" />

      <p>Style: Pulsing</p>
      <HorizontalLine size={3} style="pulse" />


      <br />

      <p>Size 4</p>
      <HorizontalLine size={4} />

      <p>Style: Dashed</p>
      <HorizontalLine size={4} style="dashed" />

      <p>Style: Doubled</p>
      <HorizontalLine size={4} style="doubled" />

      <p>Style: Pulsing</p>
      <HorizontalLine size={4} style="pulse" />


      <br />

      <p>Size 5</p>
      <HorizontalLine size={5} />

      <p>Style: Dashed</p>
      <HorizontalLine size={5} style="dashed" />

      <p>Style: Doubled</p>
      <HorizontalLine size={5} style="doubled" />

      <p>Style: Pulsing</p>
      <HorizontalLine size={5} style="pulse" />


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
