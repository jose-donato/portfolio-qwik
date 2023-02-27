import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, useEndpoint } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchContributionsFromYear, fetchGithubStars } from "~/utils/api";
import Calendar from "~/components/calendar";

type HomepageData = {
  stars: number;
  contributions: number;
  /*
  contributions: {
    total: {
      [key: string]: number;
    };
    contributions: {
      date: string;
      count: number;
      level: number;
    }[];
  }[];*/
};

export const onGet: RequestHandler<HomepageData> = async ({ params }) => {
  const stars = 20//await fetchGithubStars();
  const contributions = 2300
  //const contributions = await fetchContributionsFromYear("jose-donato", 2018);
  return {
    stars,
    contributions,
  };
};

export default component$(() => {
  const homepageData = useEndpoint<HomepageData>();
  return (
    <div class="flex items-center flex-col">
      <div class="relative block overflow-hidden h-56 w-44 rounded">
        <div class="plaiceholder-[/avatar.webp] absolute inset-0 w-full h-full transform scale-150 filter blur-2xl" />
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="/avatar.webp" />
      </div>
      <Resource
        value={homepageData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => (
          <div class="mt-10 flex gap-10 text-sm">
            <div class="group p-4 border-gray-200/20 dark:border-white/20 flex flex-col gap-2 hoverborder-gray-200/40 dark:hover:border-white/30 transition-all duration-200 border rounded bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur backdrop-filter">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900/5 ring-1 ring-gray-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-900/25 dark:bg-white/10 dark:ring-white/20 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span>
              <h1>{data.stars}</h1>
              <p class="text-xs text-gray-400">
                Stars on my open source projects
              </p>
            </div>
            <div class="group p-4 border-gray-200/20 dark:border-white/20 flex flex-col gap-2 hoverborder-gray-200/40 dark:hover:border-white/30 transition-all duration-200 border rounded bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur backdrop-filter">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900/5 ring-1 ring-gray-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-900/25 dark:bg-white/10 dark:ring-white/20 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </span>
              <h1>{data.contributions}</h1>
              <p class="text-xs text-gray-400">
                Contributions to open source projects
              </p>
            </div>
          </div>
        )}
      />
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
