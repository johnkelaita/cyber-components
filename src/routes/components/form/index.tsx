import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { faker } from '@faker-js/faker';
import { BoxOutline } from '~/components/box/outline/box';
import { HorizontalLine } from '~/components/horizontal-line/horizontal-line';
import { TextInput } from '~/components/form/text-input/text-input';
import { TextAreaInput } from '~/components/form/text-area-input/text-area-input';
import { InputItemSchema, SelectInput } from '~/components/form/select-input/select-input';
import { Checkbox } from '~/components/form/checkbox/checkbox';

export default component$(() => {
  const tableData1 = new Array(10).fill(0).map((item: any) => ({
    name: faker.name.fullName(), // Rowan Nikolaus
    email: faker.internet.email(), // Kassandra.Haley@erich.biz
    title: faker.name.jobTitle(), // National Markets Officer
    pic: faker.image.avatar() // https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg
  }));

  const optionsData: InputItemSchema[] = [
    {text: 'Option 1', value: "1"},
    {text: 'Option 2', value: "2"},
    {text: 'Option 3', value: "3"},
    {text: 'Option 4', value: "4"},
    {text: 'Option 5', value: "5"}
  ];

  const currentColor: "red" | "orange" | "bottom" = "blue";

  return (
    <Container color={currentColor}>
      <Heading glow>Form Elements</Heading>

      <p>A collection of headings, equivalent to html &lt;h1&gt; to &lt;h5&gt; tags.</p>

      <p>If desired, you can enable a few different effects as demonstrated on the page below. This includes a typewriter effect as well as a glow effect.</p>

      <p>Input field with a placeholder</p>

      <TextInput placeholder='Enter your name' />

      <TextAreaInput placeholder='Detailed description of the item' />

      <HorizontalLine style="pulse" />

      <TextInput label='Name' />

      <TextAreaInput label='Detailed description of the item' />

      <SelectInput allowNoneOption options={optionsData} label="Please select the correct option" />

      <Checkbox label="Accept the terms" />

      <Button onClick$={(event) => alert('Hello Qwik Event!')} text="Submit" />


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
