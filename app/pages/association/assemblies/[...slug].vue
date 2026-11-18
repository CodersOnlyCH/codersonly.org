<template>
  <article v-if="document">
    <h1>{{ document.title }}</h1>

    <template v-if="document.meta.slides">
      <h2>Präsentation</h2>
      <iframe :src="document.meta.slides" />
    </template>

    <ContentRenderer :value="document" />
  </article>
</template>

<script setup lang="ts">
const route = useRoute();

const path = computed(() => route.path.replace(/\/+$/, "") || "/");

const { data: document } = await useAsyncData(path, () =>
  queryCollection("association").path(path.value).first(),
);

if (!document.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "General document not found",
  });
}

useSeoMeta({
  title: document.value.title,
  description: document.value.description,
});
</script>

<style scoped>
iframe {
  border: 1px solid var(--color-border-default);
  min-height: 400px;
  height: auto;
  width: 100%;
}
</style>
