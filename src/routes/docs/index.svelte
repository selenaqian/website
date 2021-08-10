<script lang="ts" context="module">
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { Changelog } from "../../types/changelog.type";
  export let changelogEntries: Changelog[];

  import EditInGitpod from "../../components/docs/edit-in-gitpod.svelte";

  let startCards = [
    {
      title: "Read the docs",
      text: "Learn how to get Gitpod set up for your project.",
      button: "Start learning",
      link: "/docs/introduction",
      background: "bg-gradient-to-br from-purple-500 to-indigo-500",
      buttonBackground: "bg-purple-900",
    },
    {
      title: "Try it",
      text: "Build something with Gitpod using our example project.",
      button: "Start building",
      link: "/docs/quickstart",
      background: "bg-gradient-to-br from-pink-500 to-red-400",
      buttonBackground: "bg-red-900",
    },
    {
      title: "Watch the screencasts",
      text: "Learn more about Gitpod directly from the team.",
      button: "Start watching",
      link: "/screencasts",
      background: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      buttonBackground: "bg-yellow-800",
    },
  ];

  let involvmentMethods = [
    {
      image: "/svg/logo-textless.svg",
      alt: "Gitpod logo",
      title: "Gitpod Community Forum",
      text: "Connect with members of the Gitpod community.",
      link: "https://community.gitpod.io/",
    },
    {
      image: "/svg/brands/twitter.svg",
      alt: "Twitter logo",
      title: "Twitter",
      text: "Follow the Gitpod Twitter account for news and updates.",
      link: "https://www.twitter.com/gitpod",
    },
    {
      image: "/svg/brands/github.svg",
      alt: "Github logo",
      title: "GitHub",
      text: "Open issues and directly contribute to Gitpod.",
      link: "https://github.com/gitpod-io/gitpod",
    },
    {
      image: "/svg/brands/discourse.svg",
      alt: "Discord logo",
      title: "Discord",
      text: "Join our Discord server to chat with other Gitpod users.",
      link: "https://www.gitpod.io/chat",
    },
  ];
</script>

<style>
  ul li div :global(p:not(:nth-child(3))) {
    display: none;
  }
  ul li div :global(h3) {
    display: none;
  }
  ul li div :global(ul) {
    display: none;
  }
  ul li div :global(h2) {
    font-size: larger;
  }
</style>

<EditInGitpod />

<h1 class="mb-3">Getting Started with Gitpod</h1>
<p class="text-xl lgx:text-xl mb-10">
  Learn Gitpod the way that best matches your learning style.
</p>

<div class="grid lg:grid-cols-3 gap-6 mb-16">
  {#each startCards as card}
    <section class="flex">
      <div
        class="w-full p-4 rounded-2xl {card.background} shadow-lg flex flex-col"
      >
        <h4 class="text-white mb-2">{card.title}</h4>
        <p class="text-white mb-4">{card.text}</p>
        <a
          href={card.link}
          class="mt-auto font-semibold {card.buttonBackground} bg-opacity-50 hover:bg-opacity-75 rounded-lg text-white hover:text-white flex-end self-start py-2 px-4"
        >
          {card.button}
        </a>
        <!--TODO: if time, add images that appear/disappear-->
      </div>
    </section>
  {/each}
</div>

<div class="sm:flex sm:gap-6 sm:justify-between p-2">
  <h2>Changelog</h2>
  <a href="/changelog" class="sm:text-right sm:place-self-center"
    >View all the latest updates</a
  >
</div>
<ul class="bg-gray-300 rounded-2xl p-2 mb-16">
  {#each changelogEntries as entry}
    <li class="m-3 mb-6 grid grid-cols-12">
      <span class="flex flex-col col-span-1 justify-self-center">
        <svg
          viewBox="0 0 12 12"
          class="text-gray-400 w-3 h-3 mr-6 overflow-visible self-center md:self-start md:mt-1 lg:mt-2"
        >
          <circle cx="6" cy="6" r="6" fill="currentColor" />
        </svg>
        <svg
          viewBox="0 0 12 100"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          class="text-gray-400 w-3  overflow-visible self-center col-start-1 md:self-start md:mt-1 lg:mt-2"
        >
          <path
            d="M 6 0 V 112"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            class="text-gray-400"
          />
        </svg>
      </span>
      <span class="col-span-11 grid grid-cols-11">
        <p class="col-span-11 lg:col-span-3">
          {new Date(Date.parse(entry.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div class="mt-3 col-span-11 lg:mt-0 lg:col-span-7 lg:col-start-4">
          {@html entry.content}
        </div>
      </span>
    </li>
  {/each}
</ul>

<h2>Get Involved</h2>
<div>
  {#each involvmentMethods as involve}
    <a href={involve.link}>
      <img src={involve.image} alt={involve.alt} />
      <div>
        <h5>{involve.title}</h5>
        <p>{involve.text}</p>
      </div>
    </a>
  {/each}
</div>
