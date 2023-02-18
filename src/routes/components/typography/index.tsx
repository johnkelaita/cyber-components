import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { faker } from '@faker-js/faker';
import { BoxOutline } from '~/components/box/outline/box';
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
      <Heading glow>Headings</Heading>

      <p>A collection of headings, equivalent to html &lt;h1&gt; to &lt;h5&gt; tags.</p>

      <p>If desired, you can enable a few different effects as demonstrated on the page below. This includes a typewriter effect as well as a glow effect.</p>

      <BoxOutline type={'flat'} filled>

          <p><strong>Example</strong></p>
          <pre>
            <code>
              &lt;Heading size="1" glow&gt;Size 1 and glowing&lt;/Heading&gt;
            </code>
          </pre>

          <HorizontalLine />

          <p><strong>size (optional)</strong><br />
          1, 2, 3, 4, 5. Defaults to 1. Equivalent to the h1 to h5 tags</p>

          <p><strong>typewriter (optional)</strong><br />
          set as true to enable the typewriter effect. Defaults to undefined, which disables it.</p>

          <p><strong>glow (optional)</strong><br />
          set as true to enable the glow text-shadow effect. Defaults to undefined, which disables it.</p>
      </BoxOutline>

      <Heading size={1} glow>Size 1 glowing</Heading>
      <Heading size={2} typewriter>Size 2 typing</Heading>
      <Heading size={3}>Size 3 and <strong>GLOW</strong></Heading>
      <Heading size={4}>Size 4</Heading>
      <Heading size={5}>Size 5</Heading>

      <Heading glow>Caret<Caret /></Heading>

      <p>The caret can be applied to any text, not just headings. The caret is used in the typewriter effect of the Heading component.</p>
      <p>Sometimes you may want to use a caret at the end of a sentence in a paragraph tag<Caret /></p>

      <BoxOutline type={'flat'} filled>

          <p><strong>Example</strong></p>
          <pre>
            <code>
              &lt;Caret /&gt;
            </code>
          </pre>

      </BoxOutline>

      <Heading glow>Glow<Caret /></Heading>

      <p>As a CSS rule, apply &lt;strong&gt; to any piece of text to enable the glow</p>

      <Heading size={2}>Bigger is <strong>BETTER</strong></Heading>

      <p>As far as the glow effect goes, but <strong>you may want to consider avoiding it for smaller text.</strong></p>

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
