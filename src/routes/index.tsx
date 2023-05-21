import {
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Calendar from "~/components/calendar";
import BlobAvatar from "~/components/BlobAvatar";
import { LineMdExternalLink, MdiGithub } from "~/components/icons";
import { data } from "./test";
import clsx from "clsx";

export default component$(() => {
  const selectedYear = useSignal<string>("2023");
  const selectedTags = useSignal<string[]>([]);
  const YEARS = ["2023", "2022", "2021", "2020"];
  const PROJECTS = [
    {
      title: "openbb.co",
      href: "https://openbb.co",
      description:
        "OpenBB is a company that provides services and products for the Open Source community.",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["open-source", "web", "crypto", "remix", "tailwindcss"],
    },
    {
      title: "my.openbb.co",
      href: "https://my.openbb.co",
      description:
        "My OpenBB is a platform that allows you to manage your OpenBB services.",
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
      tags: ["sveltekit", "tailwindcss", "formula 1"],
    },
    {
      title: "ruc.pt",
      href: "https://ruc.pt",
      image: "https://openbb.co/assets/images/ogimages/Homepage.png",
      tags: ["nextjs", "tailwindcss", "wp-graphql"],
    },
  ];
  const visibleProjects = useSignal(PROJECTS);

  const uniqueTags = PROJECTS.reduce((acc, project) => {
    project.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  useVisibleTask$(({ track }) => {
    track(() => selectedTags.value);
    visibleProjects.value = PROJECTS.filter((project) => {
      if (selectedTags.value.length === 0) {
        return true;
      }
      return selectedTags.value.every((tag) => project.tags.includes(tag));
    });
  });

  return (
    <div class="">
      <div class="flex items-center justify-between gap-20 mx-auto container">
        <div class="w-1/2">
          <h1 class="text-4xl">
            My name is{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-900 font-bold">
              José Donato
            </span>
          </h1>
          <p class="text-gray-500">
            Software Engineer @{" "}
            <a class="underline hover:text-white" href="https://openbb.co">
              OpenBB
            </a>
          </p>
          <p class="text-xs mt-2 max-w-[500px]">
            I'm a Fullstack Engineer from Portugal with a master's degree in
            Informatics Security and bachelor in Computer Science. Currently
            working remotely at OpenBB. I like open-source, web, crypto and
            learning new things.
          </p>
        </div>
        <BlobAvatar />
      </div>
      <div class="dark:bg-zinc-800/80 border-y border-zinc-700 my-10 py-10 flex px-20 flex-col ">
        <div class="flex justify-between">
          <p>
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-900 font-bold">
              Open source
            </span>{" "}
            contributions
          </p>
          <div class="flex gap-3">
            {YEARS.map((year) => {
              return (
                <button
                  onClick$={() => {
                    selectedYear.value = year;
                  }}
                  class={clsx(
                    "text-xs bg-zinc-100/20 rounded p-3 whitespace-nowrap",
                    {
                      "outline outline-offset-2 outline-zinc-700":
                        selectedYear.value === year,
                    }
                  )}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>
        <div class="mx-auto mt-5 scale-125">
          <Calendar data={data.contributions} />
        </div>
      </div>
      <div class="mx-auto container">
        <p>Latest projects</p>
        <div class="col-span-full my-6 flex flex-wrap lg:col-span-6 gap-5">
          {uniqueTags.map((tag) => {
            return (
              <button
                disabled={visibleProjects.value.every(
                  (project) => !project.tags.includes(tag)
                )}
                onClick$={() => {
                  if (selectedTags.value.includes(tag)) {
                    selectedTags.value = selectedTags.value.filter(
                      (t) => t !== tag
                    );
                  } else {
                    selectedTags.value = [...selectedTags.value, tag];
                  }
                }}
                class={clsx(
                  "text-xs bg-zinc-100/20 rounded p-3 whitespace-nowrap disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400",
                  {
                    "outline outline-offset-2 outline-zinc-700":
                      selectedTags.value.includes(tag),
                  }
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div class="grid grid-cols-2 gap-5 mt-5 min-h-[600px]">
          {visibleProjects.value.map((project) => {
            return (
              <div class="gap-2 justify-between flex p-4 flex-row dark:bg-zinc-800/80 dark:hover:bg-zinc-800 backdrop-blur backdrop-filter rounded border-zinc-700 border shadow">
                <div class="w-1/3">
                  <a href={project.href}>{project.title}</a>
                  <p class="mt-1 text-xs">{project.description}</p>
                  <div class="mt-2 flex gap-1">
                    <MdiGithub class="w-5 h-5 inline-block" />
                    <LineMdExternalLink class="w-5 h-5 inline-block" />
                  </div>
                </div>
                {/*<img
                  class="w-64 h-40 object-contain"
                  alt={project.title}
                  src={project.image}
            />*/}
              </div>
            );
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
