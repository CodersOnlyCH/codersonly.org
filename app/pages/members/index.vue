<template>
  <h1>Members</h1>

  <p>
    At Coders Only, we believe in fostering a strong and inclusive community for
    software engineers and tech enthusiasts. Becoming a member strengthens your
    connection with the organizers, enhances your presence within the community,
    and grants you access to exclusive benefits.
  </p>

  <h2>Why become a member?</h2>

  <p>As a member of Coders Only, you will:</p>
  <ul>
    <li>Build a stronger connection with the organizers and the community.</li>
    <li>Gain more relatability and visibility among fellow members.</li>
    <li>
      Have the option to publicly showcase your commitment by featuring your
      name on our website and your status displayed on our
      <a href="https://discord.gg/jWUZsKQvrz">Discord server</a>.
    </li>
    <li>Receive occasional goodies and swag from the association.</li>
    <li>
      Get early access to important event announcements before they are publicly
      available.
    </li>
    <li>
      Participate in the yearly General Assembly, where you can help shape the
      future of Coders Only.
    </li>
  </ul>

  <h2>How to join</h2>

  <p>
    Becoming a member is simple and straightforward—there is no approval
    process. Follow these steps:
  </p>

  <ol>
    <li>
      <NuxtLink :to="{ name: 'members-register' }">
        Provide us with your relevant details.
      </NuxtLink>
      <div class="highlight">
        <pre
          tabindex="0"
          class="chroma"
        ><code class="language-shell" data-lang="shell"><span class="line"><span class="cl">sh &lt;<span class="o">(</span>curl -L https://codersonly.org/members/join<span class="o">)</span>
</span></span></code></pre>
      </div>
    </li>
    <li>We add you to our list of members.</li>
    <li>
      You receive a welcome message along with an invoice for the membership
      fees.
    </li>
  </ol>

  <h2>Membership Fees</h2>

  <p>
    Membership costs CHF 20.- per year. This fee may change based on board
    decisions, but paying is entirely voluntary. However, non-payment will
    result in an automatic cancellation of membership status.
  </p>

  <h2>What’s Expected of Members?</h2>

  <p>
    There are no obligations for members. Your level of involvement is entirely
    up to you.
  </p>

  <h2>Engagement and Involvement</h2>

  <ul>
    <li>
      Connect with other members on our
      <a href="https://discord.gg/jWUZsKQvrz">Discord server</a> and through our
      newsletter (both publicly available).
    </li>
    <li>
      Take on leadership or volunteer opportunities by organizing or hosting
      events.
    </li>
  </ul>

  <h2>Thank You to Our Members</h2>

  <p>
    We want to extend our deepest gratitude to all our members for their
    invaluable support. Your commitment helps sustain and grow our community,
    making Coders Only a vibrant and welcoming space for software engineers.
    Whether you contribute by engaging in discussions, attending events, or
    simply being part of our network, your presence matters. Thank you for being
    a vital part of Coders Only!
  </p>
</template>

<script setup lang="ts">
definePageMeta({
  navigation: true,
  order: 50,
  title: "Members",
});
</script>
