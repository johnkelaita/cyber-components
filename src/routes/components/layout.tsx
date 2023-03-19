import { component$, Slot, useStylesScoped$, useContext } from '@builder.io/qwik';
import { Link, loader$ } from '@builder.io/qwik-city';
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
  const state: any = useContext(AppContext);

  return (
    <div class={`layout color-${state.color}`}>
      <Header />
      <main class={`section-main`}>
        <section class="section-left">
          <nav class="side__content">
            <ul class="side__list">
              <li><Link href="/components">Intro</Link></li>
              <li><HorizontalLine style="pulse" /></li>
              <li><Link href="/components/box">Boxes</Link></li>
              <li><Link href="/components/buttons">Buttons</Link></li>
              <li><Link href="/components/container">Containers</Link></li>
              <li><Link href="/components/form">Form</Link></li>
              <li><Link href="/components/horizontal-lines">Horizontal</Link></li>
              <li><Link href="/components/tables">Tables</Link></li>
              <li><Link href="/components/typography">Typography</Link></li>
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
