import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const PAST_EXPERIENCE_HOMEPAGE = [
    {
      title: "Fullstack Developer",
      place: "OpenBB",
      description: (
        <>
          Currently working at OpenBB with the mission of building modern
          investment research platforms for everyone. In this process I've been
          involved in multiple projects. Built{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://openbb.co"
            class="underline"
          >
            openbb.co
          </a>
          , the company website, using remix.run, TailwindCSS, TypeScript,
          mdx-bundler. I'm involved in the development of our financial discord
          and telegram bot made with Python. To manage this bot, built a web
          platform -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://my.openbb.co"
            class="underline"
          >
            my.openbb.co
          </a>{" "}
          also using Remix and TailwindCSS. I usually add features (normally
          crypto related) to our bigger and open source product called{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://openbb.co/github"
            class="underline"
          >
            OpenBB Terminal
          </a>
          .
        </>
      ),
      date: "2021 - Present",
    },
    {
      title: "Cybersecurity Researcher",
      place: "University of Coimbra",
      description: (
        <>
          As part of my master internship, I was awarded a research scholarship
          from FCT (the Portuguese public agency that supports science,
          technology and innovation). This enabled me to work independently
          while having the support of my supervisor. It was a great challenge
          that came with a lot of freedom, but also with huge responsibilities.
          The focus of this internship (and my dissertation) was to assess
          whether web applications were already a viable alternative to native
          ones in mobile devices. Based on this, I delivered my master thesis,
          which was a comparative study between web and native applications,
          read my{" "}
          <a
            target="_blank"
            aria-label="Master thesis"
            rel="noopener noreferrer"
            href="/master-thesis?password=thesis2021"
            class="underline"
          >
            master thesis here
          </a>
          .
        </>
      ),
      date: "2019 - 2020",
    },
    {
      title: "Freelance Fullstack Developer",
      place: "",
      description: (
        <>
          In 2018, I built the credential platform for Queima das Fitas, one of
          the biggest festivals in Portugal - it enabled the creation of the
          credentials and included an application (in Flutter) to read the QR
          codes at the festivals' entrance. <br /> I have also built a{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://appadvice.com/app/myesjf/1462460664"
            class="underline"
          >
            native application for a high school in my hometown
          </a>{" "}
          and a different{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://noticias.uc.pt/multimedia/videos/queimapp-chegou-a-primeira-aplicacao-mobile-dedicada-a-queima-das-fitas/"
            class="underline"
          >
            application for Queima das Fitas
          </a>{" "}
          which later evolved into{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/EveApp2019/"
            class="underline"
          >
            EveApp
          </a>
          . All these applications were built using React Native. <br />
          Later, I developed several applications professionally including a
          website for a nation-wide radio{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rux.pt"
            class="underline"
          >
            ruc.pt
          </a>{" "}
          using Next.js, TailwindCSS for the frontend and Wordpress, Graphql for
          the backend, as well as other web applications using Next.js and
          Firebase for clients in Upwork freelancing platform.
        </>
      ),
      date: "2018 - 2019",
    },
  ];
  return (
    <ul class="space-y-6">
      {PAST_EXPERIENCE_HOMEPAGE.map((experience) => (
        <li>
          <h3 class="text-base font-semibold">
            {experience.title}{" "}
            {experience.place && (
              <span class="text-sm font-normal">@ {experience.place}</span>
            )}
          </h3>
          <p class="text-xs mt-1">{experience.date}</p>
          <p class="text-sm my-2">{experience.description}</p>
        </li>
      ))}
    </ul>
  );
});

export const head: DocumentHead = {
  title: "Experience | José Donato",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
