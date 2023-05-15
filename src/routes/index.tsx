import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchContributionsFromYear, fetchGithubStars } from "~/utils/api";
import Calendar from "~/components/calendar";
import BlobAvatar from "~/components/BlobAvatar";
import { LineMdExternalLink, MdiGithub } from "~/components/icons";
import { data } from "./test";
import { data2 } from "./test";

export default component$(() => {
  const PROJECTS = [
    {
      title: "openbb.co",
      href: "https://openbb.co",
      description: "OpenBB is a company that provides services and products for the Open Source community.",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["open-source", "web", "crypto", "remix", "tailwindcss"],
    },
    {
      title: "my.openbb.co",
      href: "https://my.openbb.co",
      description: "My OpenBB is a platform that allows you to manage your OpenBB services.",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["open-source", "web", "crypto", "remix", "tailwindcss"],
    },
    {
      title: "race stack",
      href: "https://race-stack.pages.dev",
      description: "Lorem ipsum",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["remix", "tailwindcss", "cloudflare", "drizzleorm"],
    },
    {
      title: "hotlapmode.app",
      href: "https://hotlapmode.app",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["sveltekit", "tailwindcss", "f1"]
    },
    {
      title: "ruc.pt",
      href: "https://ruc.pt",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["nextjs", "tailwindcss", "wp-graphql"]
    }
  ]
  return (
    <div class="">
      <div class="flex items-center justify-between gap-20 mx-auto max-w-[1000px]">
        <div class="w-1/2">
          <h1 class="text-4xl">
            My name is <span class="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-900 font-bold">José Donato</span>
          </h1>
          <p class="text-gray-500">Software Engineer @ <a class="underline hover:text-white" href="https://openbb.co">
            OpenBB</a></p>
          <p class="text-xs mt-2 max-w-[500px]">
            I'm a Fullstack Engineer from Portugal with a master's degree in Informatics Security and bachelor in Computer Science.
            Currently working remotely at OpenBB. I like open-source, web, crypto and learning new things.
          </p>
        </div>
        <BlobAvatar />
      </div>
      <div class="dark:bg-zinc-800/80 border-y border-zinc-700 h-32 my-10 flex px-20 flex-col ">
        <p>
          <span class="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-900 font-bold">Open source</span> contributions
        </p>
        <Calendar data={data.contributions} />
      </div>
      <div class="mx-auto max-w-[1000px]">
        <p>Latest projects</p>
        <div class="grid grid-cols-2 gap-5 mt-5">
          {PROJECTS.map((project) => {
            return (
              <div class="gap-2 justify-between flex p-4 flex-row dark:bg-zinc-800/80 dark:hover:bg-zinc-800 backdrop-blur backdrop-filter rounded border-zinc-700 border shadow">
                <div class="w-1/3">
                  <a href={project.href}>{project.title}</a>
                  <p class="mt-1 text-xs">
                    {project.description}
                  </p>
                  <div class="mt-2 flex overflow-auto gap-1">
                    {project.tags.map((tag) => {
                      return (
                        <span class="text-xs bg-zinc-100/20 rounded px-2 py-1 mr-1 whitespace-nowrap">{tag}</span>
                      )
                    })}
                  </div>
                  <div class="mt-2 flex gap-1">
                    <MdiGithub class="w-5 h-5 inline-block" />
                    <LineMdExternalLink class="w-5 h-5 inline-block" />
                  </div>
                </div>
                <img class="w-64 h-40 object-contain" alt={project.title} src={project.image} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "José Donato",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
