import { component$, useStylesScoped$ } from '@builder.io/qwik';
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
import { BoxOutline } from '~/components/box/outline/box';
import styles from './index.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
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

        <Heading glow>Qwik Component Library<Caret /></Heading>

        <p>This component library was built simply because I wanted to build a themed component library in Qwik that I could use on a few websites I was creating.</p>

        <div class="two-col">
          <div class="box-left">
          <BoxOutline type={'flat'}>
            <Heading size={2}>Components</Heading>
            <p>Enough talk, go check out the components!</p>

            <Button text={'Acknowledged'}></Button>
          </BoxOutline>
          </div>
          <div class="box-right">
          <BoxOutline type={'flat'}>
            <Heading size={2}>More?</Heading>
            <p>Want more? More is coming!</p>
          </BoxOutline>
          </div>          
        </div>

        <BoxOutline type={'flat'}>
          <Heading size={2}>More?</Heading>
          <p>Want more? More is coming!</p>
        </BoxOutline>




        <p>Sample text within the container</p>

        <Button text={'Acknowledged'} href="/components"></Button>

      </Container>

      {/* <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
      <Link class="todolist" href="/todolist/">
        TODO demo 📝
      </Link> */}
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
