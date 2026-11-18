<template>
  <article v-if="entry">
    <h1>{{ entry.title }}</h1>

    <ContentRenderer :value="entry" />
  </article>
</template>

<script setup lang="ts">
const route = useRoute();

const path = computed(() => route.path.replace(/\/+$/, "") || "/");

const { data: entry } = await useAsyncData(path, () =>
  queryCollection("blog").path(path.value).first(),
);

if (!entry.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog entry not found",
  });
}

useSeoMeta({
  title: entry.value.title,
  description: entry.value.description,
});
</script>

<style scoped>
:deep(img) {
  width: 100%;
  height: auto;
}
</style>
