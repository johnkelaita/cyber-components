import { component$, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';
import { faker } from '@faker-js/faker';
import { AppContext } from '~/root';

export default component$(() => {
  const state: any = useContext(AppContext);
  
  return (
    <div>

      <Container color={state.color}>

        <Heading glow>Button Components<Caret /></Heading>

        <div>
          <Heading size={3}>Default<Caret /></Heading>
          <Button text={`Click me`} />
        </div>

        <div>
          <Heading size={3}>Sizes<Caret /></Heading>
          <Button size={`small`} text={`small`} />
          <Button size={`medium`} text={`medium`} />
          <Button size={`large`} text={`large`} />
        </div>

        <div>
          <Heading size={3}>Colors<Caret /></Heading>
          <Button size={`small`} color={`red`} text={`red`} />
          <Button size={`small`} color={`orange`} text={`orange`} />
          <Button size={`small`} color={`yellow`} text={`yellow`} />
          <Button size={`small`} color={`green`} text={`green`} />
          <Button size={`small`} color={`blue`} text={`blue`} />
          <Button size={`small`} color={`purple`} text={`purple`} />
          <Button size={`small`} color={`neon`} text={`neon`} />
          <Button size={`small`} color={`black`} text={`black`} />

        </div>
      </Container>

    </div>
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
