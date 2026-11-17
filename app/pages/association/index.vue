<template>
  <h1>Association</h1>

  <p>
    Coders Only is a
    <strong>registered non-profit association</strong> dedicated to advancing
    software development knowledge and fostering a strong, collaborative tech
    community in Switzerland. As an official organization, we
    <strong>operate transparently</strong>, with clearly defined bylaws,
    governance structures, and financial accountability.
  </p>

  <p>
    In this section, you’ll find everything related to the formal side of Coders
    Only—including our mission, board members, financial details, official
    documents, and community metrics.
  </p>

  <ul class="articles">
    <li>
      <article>
        <h2>Address</h2>
        <address>
          Coders Only<br />
          codersonly.org/verein<br />
          8000 Zürich
        </address>
      </article>
    </li>
    <li>
      <article>
        <h2>Bank Details</h2>
        <address>
          IBAN: CH07 0900 0000 1548 8137 5<br />
          Bank: Postfinance AG, POFICHBEXXX<br />
          Account Holder: Coders Only, 8000 Zürich
        </address>
      </article>
    </li>
    <li>
      <article>
        <h2>Board Members</h2>
        <ul>
          <li>Andreas Peter</li>
          <li>Andrew Magerman</li>
          <li>Pablo Verges</li>
        </ul>
      </article>
    </li>
    <li>
      <article>
        <h2>Channels</h2>
        <ul>
          <li><a href="https://discord.gg/jWUZsKQvrz">Discord</a></li>
          <li><a href="mailto:boardmembers@codersonly.org">E-Mail</a></li>
          <li><a href="https://github.com/codersonlych">GitHub</a></li>
          <li>
            <a href="https://linkedin.com/company/coders-only">LinkedIn</a>
          </li>
          <li><a href="https://mastodon.social/@codersonly">Mastodon</a></li>
          <li><a href="https://meetup.com/coders-only">Meetup</a></li>
        </ul>
      </article>
    </li>
    <li>
      <article>
        <h2>Community Metrics</h2>
        <dl>
          <dt>Mailing List Subscribers</dt>
          <dd>> 300</dd>
          <dt>LinkedIn Followers</dt>
          <dd>> 100</dd>
          <dt>Meetup Members</dt>
          <dd>> 2500</dd>
          <dt>Discord Members</dt>
          <dd>> 200</dd>
          <dt>Yearly Events</dt>
          <dd>> 50</dd>
          <dt>Members</dt>
          <dd>> 50</dd>
          <dt>Sponsors</dt>
          <dd>4</dd>
        </dl>
      </article>
    </li>
    <li>
      <article>
        <h2>Documents</h2>
        <ul>
          <li>
            <NuxtLink :to="{ name: 'association-bylaws' }">Bylaws</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ name: 'association-foundingCharter' }">
              Founding Charter
            </NuxtLink>
          </li>
          <li><a href="general-assembly-2026">General Assembly 2026</a></li>
          <li>
            <a href="extraordinary-general-assembly-2025-06-24"
              >Extraordinary General Assembly 2025-06-24</a
            >
          </li>
          <li><a href="general-assembly-2025">General Assembly 2025</a></li>
          <li><a href="general-assembly-2024">General Assembly 2024</a></li>
          <li><a href="general-assembly-2023">General Assembly 2023</a></li>
          <li><a href="general-assembly-2022">General Assembly 2022</a></li>
          <li><a href="general-assembly-2020">General Assembly 2020</a></li>
        </ul>
      </article>
    </li>
    <li>
      <article>
        <h2>Mission</h2>
        <p>
          The “Coders Only” association is dedicated to promoting the theory and
          application of software development concepts, methods, and related
          topics in Switzerland.
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
  order: 40,
  title: "Association",
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

.articles ul {
  list-style: none;
  padding: 0;
}

.articles dt,
.articles dd {
  display: inline;
  margin: 0;
}

.articles dt::after {
  content: ": ";
}

.articles dd::after {
  content: "\A";
  white-space: pre;
}
</style>
