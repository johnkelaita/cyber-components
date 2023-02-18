import { component$, createContext, useClientEffect$, useContextProvider, useStore } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.scss';
import { defaultUserPrefs, getUserPrefs, UserPrefs } from './lib/store/userPrefs';

export const AppContext = createContext('component-library-context');

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  // Create some reactive storage
  let state = useStore(defaultUserPrefs);
  useContextProvider(AppContext, state);

  useClientEffect$(() => {
    let userPrefs = getUserPrefs();
    state.color = userPrefs.color;
  });


  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="color-scheme" content="dark light"></meta>
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
