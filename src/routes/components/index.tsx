import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { BoxOutline } from '~/components/box/outline/box';
import styles from './index.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>

      <Container>

        <Heading glow>Qwik Component Library<Caret /></Heading>

        <p>This component library was built simply because I wanted to build a themed component library in Qwik that I could use on a few websites I was creating.</p>

        <div class="two-col">
          <div class="box-left">
          <BoxOutline type={'flat'}>
            <Heading size={2}>Components</Heading>
            <p>Enough talk, go check out the components!</p>

            <Button text={'Acknowledged'} onClick$={() => {console.log("Acknowledged")}}></Button>
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
