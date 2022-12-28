import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  const ROUTES = [
    {
      title: "My Experience",
      href: "/",
    },
    {
      title: "Snippets",
      href: "/snippets",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <div class="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex md:min-w-[20%]">
          <img
            src="https://res.cloudinary.com/dr1p6nhsi/image/upload/q_5/v1665667572/avatar_ioeru9.webp"
            srcSet={`https://res.cloudinary.com/dr1p6nhsi/image/upload/q_5/v1665667572/avatar_ioeru9.webp 300w,
    https://res.cloudinary.com/dr1p6nhsi/image/upload/q_20/v1665667572/avatar_ioeru9.webp 600w,
    https://res.cloudinary.com/dr1p6nhsi/image/upload/q_80/v1665667572/avatar_ioeru9.webp 1200w,
    https://res.cloudinary.com/dr1p6nhsi/image/upload/v1665667572/avatar_ioeru9.webp 1800w`}
            sizes="60vw"
            class="reveal-image rounded-md h-40 w-40 object-cover shadow-lg"
            alt="me and my dog"
            loading="eager"
          />
        </div>
        <div class="flex flex-col h-full">
          <h1 class="text-xl tracking-wide text-black">
            Hello! <span class="wave">👋</span> <br class="" /> I'm{" "}
            <span class="font-bold">José Donato</span>
          </h1>
          <p class="text-xs text-gray-500 mt-4">
            I'm a Fullstack Engineer from Portugal with a master's degree in
            Informatics Security and bachelor in Computer Science. Currently
            working remotely at OpenBB. I like web, crypto and learning new
            things. I'm currently learning Rust, Deno and Fresh. <br /> Want to
            have a quick chat about one of these topics? Send me a DM on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/josedonato__"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jose-donato@protonmail.com"
            >
              email me
            </a>
            .
          </p>
          <div class="flex gap-3 mt-4 items-end">
            <a
              aria-label="GitHub"
              href="https://github.com/jose-donato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              aria-label="Twitter"
              href="https://twitter.com/josedonato__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/jose-donato/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
            </a>
            <a
              aria-label="Mail"
              href="mailto:jose-donato@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"
                  stroke="none"
                />
                <path
                  d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="h-[1px] w-full bg-gray-300 my-10" />
      <div class="flex flex-col">
        <div class="flex gap-2">
          {ROUTES.map((route) => {
            return <a href={route.href}>{route.title}</a>;
          })}
        </div>
        <Slot />
      </div>
      <div class="h-[1px] w-full bg-gray-300 my-10" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://fresh.deno.dev"
      >
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
      </a>
    </div>
  );
});
