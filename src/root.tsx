import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import DarkThemeLauncher from "./components/DarkThemeLauncher";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="dark light" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <DarkThemeLauncher />
      </head>
      <body class="text-zinc-900 dark:text-slate-300 tracking-tight antialiased">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
