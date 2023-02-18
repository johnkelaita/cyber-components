import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Heading } from '~/components/heading/heading';
import Box from './components/box';

export default component$(() => {
  return (
    <div>

      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
      <Link class="todolist" href="/todolist/">
        TODO demo 📝
      </Link>
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
