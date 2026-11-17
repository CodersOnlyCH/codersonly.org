<template>
  <h1>Blog</h1>

  <p>Get your inside look at what’s happening in our community!</p>

  <p>
    Here, we share <strong>recaps of our major events</strong>, updates on the
    <strong>evolution of our organization</strong>, and other noteworthy news.
    Dives into a past meetup, announcements about improvements, or a
    behind-the-scenes look at how we operate, this is the place where we list it
    all.
  </p>

  <p>
    We love hearing from our community! If you’ve attended one of our events,
    have insights to share, or want to highlight something exciting, we
    encourage you to <strong>contribute to the blog</strong>. Your stories,
    experiences, and perspectives help keep this space vibrant and valuable.
  </p>

  <p>
    Want to contribute? Get in touch on
    <a href="https://discord.gg/bDHySNpsg6">Discord</a> or via
    <a href="mailto:boardmembers@codersonly.org">email</a>!
  </p>

  <ul>
    <li v-for="entry in blog" :key="entry.path">
      <h2>
        <NuxtLink :to="entry.path">
          {{ entry.title }}
        </NuxtLink>
      </h2>

      <p>{{ entry.description }}</p>

      <NuxtLink :to="entry.path"> ...read more </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
definePageMeta({
  navigation: true,
  order: 30,
  title: "Blog",
});

const { data: blog } = await useAsyncData("blog", () =>
  queryCollection("blog").order("date", "DESC").all(),
);
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid var(--color-alien-hue-3);
  padding: 0 1em 1em;
}
</style>
