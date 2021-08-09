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

<!--TODO: filter content/fix styling-->
<div>
  <h2>Changelog</h2>
  <a href="/changelog">View all the latest updates</a>
</div>
<ul class="bg-gray-50 rounded-2xl p-2 mb-16">
  {#each changelogEntries as entry}
    <li>
      <div>{@html entry.content}</div>
      <p>
        {new Date(Date.parse(entry.date)).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
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
