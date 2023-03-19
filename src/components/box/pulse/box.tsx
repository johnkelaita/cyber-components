import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './box.css?inline';

export const BoxPulse = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class={`asection`}>
      <Slot />
    </div>
  );
});
