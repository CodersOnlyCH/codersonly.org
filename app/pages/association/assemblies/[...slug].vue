<template>
  <main>
    <article v-if="assembly">
      <h1>{{ assembly.title }}</h1>

      <template v-if="assembly.meta.slides">
        <h2>Präsentation</h2>
        <iframe :src="assembly.meta.slides" />
      </template>

      <ContentRenderer :value="assembly" />
    </article>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const path = computed(() => route.path.replace(/\/+$/, "") || "/");

const { data: assembly } = await useAsyncData(path, () =>
  queryCollection("assemblies").path(path.value).first(),
);

if (!assembly.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "General assembly not found",
  });
}

useSeoMeta({
  title: assembly.value.title,
  description: assembly.value.description,
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
