import { component$, Slot, createContext, useStore, useContextProvider, useStylesScoped$, useContext } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';
import { Heading } from '~/components/heading/heading';
import { HorizontalLine } from '~/components/horizontal-line/horizontal-line';
import { AppContext } from '~/root';

import Header from '../components/header/header';
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
  const serverTime = serverTimeLoader.use();
  const state: any = useContext(AppContext);

  return (
    <>
      <Slot />
    </>
  );
});
