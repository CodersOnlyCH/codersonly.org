<template>
  <h1>Hello There!</h1>

  <p>
    We’re a vibrant community of software developers who believe that no matter
    how many years of experience you have, there’s always something new to
    learn, explore, and master. If you’re passionate about code and in the
    greater area of Zürich or Bern, you’ve just found your people.
  </p>

  <p>
    We’re more than just a community—we’re a
    <NuxtLink :to="{ name: 'association' }"> registered association</NuxtLink>
    dedicated to fostering collaboration, growth, and technical excellence. Join
    us, support us, or just come hang out!
  </p>

  <section>
    <h2>Upcoming Events</h2>

    <p>
      We put a lot of heart into building a strong developer community—whether
      it’s through hands-on workshops, deep technical discussions, or casual
      meetups. Check out
      <NuxtLink :to="{ name: 'what-we-do' }">what we do</NuxtLink>, and in the
      meantime, here’s what’s coming up next!
    </p>
  </section>

  <section>
    <h2>Our Amazing Sponsors</h2>

    <p>
      We’re lucky to have incredible sponsors who believe in our mission and
      help make our events possible. Their support fuels community-driven
      learning, knowledge-sharing, and unforgettable meetups.
    </p>
    <p>
      If your company shares our passion for crafting better software, consider
      <NuxtLink :to="{ name: 'sponsors' }">becoming a sponsor</NuxtLink> and
      help us shape the future of tech together!
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  navigation: true,
  order: 10,
  title: "Home",
});
</script>

<style scoped></style>
