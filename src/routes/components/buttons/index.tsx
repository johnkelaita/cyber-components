import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/button/button';
import { Caret } from '~/components/caret/caret';
import { Container } from '~/components/container/container';
import { Heading } from '~/components/heading/heading';

export default component$(() => {
 
  return (
    <div>

      <Container>

        <Heading glow>Button Components<Caret /></Heading>

        <div>
          <Heading size={3}>Default<Caret /></Heading>
          <Button text={`Click me`} onClick$={() => {console.log("Clicked")}} />
        </div>

        <div>
          <Heading size={3}>Sizes<Caret /></Heading>
          <Button size={`small`} text={`small`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`medium`} text={`medium`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`large`} text={`large`} onClick$={() => {console.log("Clicked")}} />
        </div>

        <div>
          <Heading size={3}>Colors<Caret /></Heading>
          <Button size={`small`} color={`red`} text={`red`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`orange`} text={`orange`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`yellow`} text={`yellow`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`green`} text={`green`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`blue`} text={`blue`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`purple`} text={`purple`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`neon`} text={`neon`} onClick$={() => {console.log("Clicked")}} />
          <Button size={`small`} color={`black`} text={`black`} onClick$={() => {console.log("Clicked")}} />

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
