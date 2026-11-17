<template>
  <h1>What We Do</h1>

  <p>
    Great things happen when developers come together. Our events are a space to
    exchange ideas, tackle challenges, and push boundaries—together. Whether
    it’s through deep technical discussions, hands-on workshops, or casual
    meetups, we create opportunities for learning, collaboration, and growth.
  </p>

  <p>Here’s how and where we make it happen.</p>

  <ul class="articles">
    <li>
      <article>
        <h2>Coders Monthly</h2>
        <p>
          Coders Monthly is where it all started—a casual meetup in a bar with
          good beer and great vibes. No fixed agenda, just organic discussions
          on keyboards, languages, frameworks, AI, OSes, and more. Whoever comes
          is the right person, and whatever is discussed is the right topic.
          <a href="https://www.meetup.com/coders-only/events/">Join us</a>, grab
          a drink, and talk tech!
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>Software Craft Study Group</h2>

        <p>
          An online space where collaborative study, vivid discussions, and
          hands-on exercises are common. We dissect talks, analyze real-world
          code, and explore best practices, to learn together and refinine our
          craft. No matter your experience level,
          <a href="https://discord.gg/SR7BZ8RZq7">join us</a> to exchange ideas,
          challenge assumptions, and grow as a developer.
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>Regular Meetups</h2>

        <p>
          Our <a href="https://www.meetup.com/coders-only/events/">meetups</a> -
          where members and guests come together for workshops, talks, and
          discussions - provide the best opportunities to learn, share, and
          connect. And once in a while we bring internationally recognized
          speakers, don’t miss out!
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>Book Study Clubs</h2>

        <p>
          Every now and then, a member gathers like-minded folks, picks a great
          book, and starts a collective learning journey. We read, discuss,
          vividly debate, and challenge ideas together all with the purpose of
          learning.
          <a href="https://discord.gg/wspK5hdmDB">Join a book study club</a> or
          start your own!
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>Girl Coders Get Together</h2>

        <p>
          A welcoming space for women and gender minorities in tech to connect,
          code, and share experiences. Are you looking to work on projects,
          discuss challenges, learn together or just enjoy the company of fellow
          coders? <a href="https://discord.gg/pY5AkYfh">This space</a> is all
          about support, growth, and community.
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>Global Day of Coderetreat</h2>

        <p>
          <a href="https://www.coderetreat.org/">GDCR</a> is a globally
          coordinated event dedicated to deliberate pactice. No pressure, no
          deadlines—just a day to experiment, collaborate, and grow through
          focused, time-boxed exercises.
          <a href="https://buttondown.email/CodersOnly"
            >Sign up to our mailing list</a
          >
          to be informed when the tickets to the next GDCR are available.
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>SoCraTes Day</h2>

        <p>
          We are proud to be the oldest SoCraTes unconference in Switzerland!
          SoCraTes Day is a self-organized unconference where enthusiasts come
          together to discuss software craftsmanship, clean code, agile
          methodologies, and beyond.
          <a href="https://buttondown.email/CodersOnly"
            >Sign up to our mailing list</a
          >
          to be informed when the tickets to the next SoCraTes Day are
          available.
        </p>
      </article>
    </li>
    <li>
      <article>
        <h2>Upcoming Events</h2>

        <Meetups />
      </article>
    </li>
  </ul>
</template>

<script setup lang="ts">
definePageMeta({
  navigation: true,
  order: 20,
  title: "What We Do",
});
</script>

<style scoped>
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.articles > li {
  border: 1px solid var(--color-alien-hue-3);
  padding: 1em;
}

.articles h2 {
  margin-top: 0;
}
</style>
