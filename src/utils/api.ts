async function fetchGithubStars() {
  const response = await fetch(
    "https://api.github.com/users/jose-donato/repos",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  const data = await response.json();
  const stars = data.reduce(
    (
      acc: number,
      repo: {
        stargazers_count: number;
      }
    ) => acc + repo.stargazers_count,
    0
  );
  return stars;
}

async function fetchYearContributions(username: string, year: string) {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch calendar data");
  }

  return data;
}

async function fetchContributionsFromYear(
  username: string,
  startingYear: number
) {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - Number(startingYear) + 1 },
    (_, i) => String(Number(startingYear) + i)
  );

  const contributions = await Promise.all(
    years.map((year) => fetchYearContributions(username, year))
  );

  return contributions;
}

export { fetchGithubStars, fetchYearContributions, fetchContributionsFromYear };
