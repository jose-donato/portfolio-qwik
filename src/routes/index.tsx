import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, useEndpoint } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchContributionsFromYear, fetchGithubStars } from "~/utils/api";
import Calendar from "~/components/calendar";

type HomepageData = {
  stars: number;
  contributions: {
    total: {
      [key: string]: number;
    };
    contributions: {
      date: string;
      count: number;
      level: number;
    }[];
  }[];
};

export const onGet: RequestHandler<HomepageData> = async ({ params }) => {
  const stars = await fetchGithubStars();
  const contributions = await fetchContributionsFromYear("jose-donato", 2018);
  return {
    stars,
    contributions,
  };
};

export default component$(() => {
  const homepageData = useEndpoint<HomepageData>();
  return (
    <div>
      <Resource
        value={homepageData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => (
          <>
            <h1>Stars: {data.stars}</h1>
            {console.log(data.contributions)}
          </>
        )}
      />
      <Calendar />
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
