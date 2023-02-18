import { component$, Slot, createContext, useStore, useContextProvider, useStylesScoped$, useContext } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';
import { Heading } from '~/components/heading/heading';
import { HorizontalLine } from '~/components/horizontal-line/horizontal-line';
import { AppContext } from '~/root';

import Header from '../../components/header/header';
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
    <div class={`layout color-${state.color}`}>
      <Header />
      <main class={`section-main`}>
        <section class="section-left">
          <nav class="side__content">
            <ul class="side__list">
              <li><a href="/components">Intro</a></li>
              <li><HorizontalLine style="pulse" /></li>
              <li><a href="/components/box">Boxes</a></li>
              <li><a href="/components/buttons">Buttons</a></li>
              <li><a href="/components/container">Containers</a></li>
              <li><a href="/components/form">Form</a></li>
              <li><a href="/components/horizontal-lines">Horizontal</a></li>
              <li><a href="/components/tables">Tables</a></li>
              <li><a href="/components/typography">Typography</a></li>
            </ul>
          </nav>
        </section>
        <section class="section-right">
          <Slot />
        </section>
      </main>
      <footer>
        {/* <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
          <div>{serverTime.value.date}</div>
        </a> */}
      </footer>
    </div>
  );
});
