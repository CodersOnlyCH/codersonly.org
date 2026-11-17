<template>
  <h1>Apply for Membership</h1>
  <form
    method="post"
    action="https://submit-form.com/b5g5SVQ9U"
    accept-charset="UTF-8"
  >
    <label for="first-name">First Name *</label>
    <input type="text" id="first-name" name="first-name" required="" />
    <label for="last-name">Last Name *</label>
    <input type="text" id="last-name" name="last-name" required="" />
    <label for="email">E-Mail Address *</label>
    <input type="email" id="email" name="email" required="" />
    <label for="public-member">
      <span>Show publicly that you're a member</span>
      <input
        type="checkbox"
        id="public-member"
        name="public"
        value="Ja"
        checked=""
      />
    </label>
    <label for="social-media">Social Media Handles</label>
    <textarea
      id="social-media"
      name="handles"
      placeholder="GitHub, Mastodon, Discord, etc."
    ></textarea>
    <input type="hidden" name="source" value="html" />
    <input
      type="hidden"
      name="_redirect"
      value="https://codersonly.org/members/thanks/"
    />
    <input type="submit" value="Submit" />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Register",
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea {
  border: 1px solid var(--color-alien-hue-2);
  background: var(--color-canvas-default);
  color: var(--color-fg-default);
  font-family: pragmata;
  padding: 8px;
  max-width: 400px;
}

textarea {
  min-height: 5rem;
}

input:focus,
textarea:focus {
  border: 1px solid var(--color-80s-disco-1);
  outline: none;
}
</style>
