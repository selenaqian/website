<script>
  let startCards = [
    {
      title: "Read the docs",
      text: "Learn how to get Gitpod set up for your project.",
      button: "Start learning",
      link: "/docs/introduction",
    },
    {
      title: "Try it",
      text: "Build something with Gitpod using our example project.",
      button: "Start building",
      link: "/docs/quickstart",
    },
    {
      title: "Watch the screencasts",
      text: "Learn more about Gitpod directly from the team.",
      button: "Start watching",
      link: "/screencasts",
    },
  ];
</script>

<h1>Getting Started with Gitpod</h1>
<p class="text-xl lgx:text-2xl">
  Learn Gitpod the way that best matches your learning style.
</p>

<div>
  {#each startCards as card}
    <div>
      <h4>{card.title}</h4>
      <p>{card.text}</p>
      <a href={card.link}>{card.button}</a>
    </div>
  {/each}
</div>
