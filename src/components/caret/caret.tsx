import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './caret.css?inline';

interface CaretProps {
  blinking?: boolean;
}

export const Caret = component$((props: CaretProps) => {
  useStylesScoped$(styles);

  return (
    <>
      <span class={`caret ${props.blinking == true ? `blinking` : ``}`}>_</span>
    </>
  );
});
