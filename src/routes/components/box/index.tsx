import { component$, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { faker } from '@faker-js/faker';
import { BoxOutline } from '~/components/box/outline/box';
import { BoxPulse } from '~/components/box/pulse/box';
import { HorizontalLine } from '~/components/horizontal-line/horizontal-line';
import { AppContext } from '~/root';

export default component$(() => {
  const state: any = useContext(AppContext);

  return (
    <Container color={state.color}>
      <Heading glow>Box</Heading>

      <p>This should be used to create boxes with effects.</p>

      <Heading size={2}>Pulsing box</Heading>

      <BoxPulse color={state.color}>
        <p>This text is contained within the box.</p>
      </BoxPulse>

      <HorizontalLine />

      <Heading size={2}>Shadow styles</Heading>
      <BoxOutline color={state.color} type={'default'}>
        <p>This one is the default</p>
      </BoxOutline>

      <HorizontalLine />

      <BoxOutline color={state.color} type={'flat'}>
        <p>This one is flat</p>
      </BoxOutline>

      <HorizontalLine />

      <Heading size={2}>Fill styles</Heading>
      <BoxOutline filled color={state.color} type={'default'}>
        <p>This one is filled</p>
      </BoxOutline>

      <HorizontalLine />

      <BoxOutline filled color={state.color} type={'flat'}>
        <p>This one is filled and flat</p>
      </BoxOutline>

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
