<template>
  <ul v-if="sponsors.length">
    <li v-for="sponsor in sponsors" :key="sponsor.id">
      <a
        class="icon"
        :href="sponsor.url"
        :style="`background-image: url(${sponsor.logo})`"
      >
        {{ sponsor.name }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import ergonLogo from "@/assets/sponsors/ergon.webp";
import finnovaLogo from "@/assets/sponsors/finnova.webp";
import houseOfTestLogo from "@/assets/sponsors/house-of-test.webp";
import megazordLogo from "@/assets/sponsors/megazord.webp";

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
}

const sponsors = ref<Sponsor[]>([
  {
    id: "ergon",
    name: "ergon Informatik AG",
    logo: ergonLogo,
    url: "https://ergon.ch/",
  },
  {
    id: "finnova",
    name: "finnova AG",
    logo: finnovaLogo,
    url: "https://finnova.com/",
  },
  {
    id: "house-of-test",
    name: "House of Test",
    logo: houseOfTestLogo,
    url: "https://houseoftest.ch/",
  },
  {
    id: "megazord",
    name: "megazord.studio",
    logo: megazordLogo,
    url: "https://megazord.studio/",
  },
]);
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  justify-items: center;
  align-items: center;
  padding: 1em;
  list-style: none;
}

@media (max-width: 768px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }
}

li {
  width: 100%;
  height: auto;
  position: relative;
}

a {
  display: block;
  height: 100%;
  width: 100%;
  aspect-ratio: 3 / 2;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
