import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

import styles from './layout.scss?inline';

export const serverTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

// Create a new context descriptor
export const ThemeColors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'neon', 'black'];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <Slot />
    </>
  );
});
