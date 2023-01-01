import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      <meta name="title" content="José Donato" />
      <meta
        name="description"
        content="I'm a Fullstack Engineer from Portugal with a master's degree in Informatics Security and bachelor in Computer Science. Currently working remotely at OpenBB."
      />
      <meta
        property="og:image"
        content="https://jose-donato.deno.dev/og_image.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jose-donato.deno.dev" />
      <meta property="og:title" content="José Donato" />
      <meta
        property="og:description"
        content="I'm a Fullstack Engineer from Portugal with a master's degree in Informatics Security and bachelor in Computer Science. Currently working remotely at OpenBB."
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jose-donato.deno.dev" />
      <meta property="twitter:title" content="José Donato" />
      <meta
        property="twitter:image"
        content="https://jose-donato.deno.dev/og_image.png"
      />
      <meta
        property="twitter:description"
        content="I'm a Fullstack Engineer from Portugal with a master's degree in Informatics Security and bachelor in Computer Science. Currently working remotely at OpenBB."
      />
      <meta name="keywords" content="josé, donato, fullstack, openbb" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="stylesheet" href="/styles/index.css" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
