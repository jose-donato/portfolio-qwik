import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const LINKS = [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header class="flex justify-between mx-[20px] md:mx-[184px] py-[34px]">
      <div class="">
        <a class="text-xl font-bold">José Donato_</a>
        <p class="text-sm">Always under development</p>
      </div>
      <div class="flex items-center gap-4">
        {LINKS.map((link) => (
          <a href={link.href}>{link.label}</a>
        ))}
      </div>
    </header>
  );
});
