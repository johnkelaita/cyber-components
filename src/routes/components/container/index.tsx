import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';

export default component$(() => {
  return (
    <Container>
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
