<template>
  <main>
    <article v-if="assembly">
      <h1>{{ assembly.title }}</h1>

      <ContentRenderer :value="assembly" />
    </article>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: assembly } = await useAsyncData(route.path, () =>
  queryCollection("assemblies").path(route.path).first(),
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
