<template>
  <ul v-if="meetups.length">
    <li v-for="meetup in meetups" :key="meetup.uid">
      <a :href="meetup.url" target="_blank" :title="meetup.description">
        {{ meetup.summary }}
      </a>
      on
      <time :datetime="meetup.date.toISOString()">{{
        formatter.format(meetup.date)
      }}</time>
    </li>
  </ul>
  <p v-else>Could not load upcoming events!</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import meetupsData from "@/assets/meetups.json";

interface MeetupData {
  DESCRIPTION: string;
  DTSTART: string;
  SUMMARY: string;
  UID: string;
  URL: string;
}

interface Meetup {
  date: Date;
  description: string;
  summary: string;
  uid: string;
  url: string;
}

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const meetups = ref<Meetup[]>(
  (meetupsData as MeetupData[])
    .map((meetup) => ({
      date: new Date(meetup.DTSTART),
      description: meetup.DESCRIPTION,
      summary: meetup.SUMMARY,
      uid: meetup.UID,
      url: meetup.URL,
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime()),
);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
