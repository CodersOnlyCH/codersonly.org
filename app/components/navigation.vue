<template>
  <nav v-if="routes.length">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="{ name: route.name }" active-class="active">
          <span>
            {{ route.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const routes = useRouter()
  .getRoutes()
  .filter((route) => route.meta["navigation"])
  .sort((a, b) => (a.meta.order ?? 0) - (b.meta.order ?? 0))
  .map(({ meta, name, path }) => ({
    label: meta.title as string,
    name,
    path,
  }));
</script>

<style scoped>
ul {
  display: flex;
  gap: 20px;
  padding: none;
  padding-inline-start: 0;
  overflow-x: auto;
  white-space: nowrap;
}

li:first-child {
  list-style: none;
}

a {
  color: var(--color-alien-hue-1);
  text-shadow: 0 0 12px var(--color-alien-hue-1);
  flex-shrink: 0;
}

.active {
  color: var(--color-fg-default);
  text-shadow: 0 0 12px var(--color-fg-default);
}
</style>
