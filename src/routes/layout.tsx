import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ToggleTheme from "~/components/ToggleTheme";

export default component$(() => {
  const ROUTES = [
    {
      title: "Blog",
      href: "/blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      ),
    },
    {
      title: "Projects",
      href: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      title: "Snippets",
      href: "/snippets",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
  ];



  return (
    <>
      <header class="top-0 z-20 sticky flex justify-center">
        <div class="container flex items-center justify-between flex-1 px-8 py-4">
          <Link href="/">
            <img
              src="/avatar.png"
              alt="personal avatar"
              class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 border border-zinc-50/50 h-10 w-10 shadow"
            />
          </Link>
          <nav class="hidden sm:flex gap-4 backdrop-blur backdrop-filter dark:bg-zinc-800 bg-zinc-100 rounded-lg p-1 border border-zinc-700">
            {ROUTES.map((route) => {
              return (
                <Link href={route.href} class="_btn" key={route.href}>
                  {route.title}
                </Link>
              );
            })}
          </nav>
          <ToggleTheme />
        </div>
      </header>
      <main class="mt-32">
        <Slot />
      </main>
      <nav class="sm-only:flex fixed bottom-4 left-1/2 -translate-x-1/2 hidden justify-around gap-4 backdrop-blur backdrop-filter dark:bg-zinc-800 bg-zinc-100 rounded-lg p-1">
        {ROUTES.map((route) => {
          return (
            <Link
              href={route.href}
              class="flex items-center gap-2 group"
              key={route.href}
            >
              <span class="group-hover:underline underline-offset-4">
                {route.title}
              </span>
            </Link>
          );
        })}
      </nav>
      <footer></footer>
    </>
  );
});
