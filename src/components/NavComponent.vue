<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <button>home</button>
    </router-link>
    <router-link :to="{ name: 'check-carries' }">
      <button>check carries</button>
    </router-link>
    <router-link :to="{ name: 'login' }">
      <button>login</button>
    </router-link>
    <router-link :to="{ name: 'register' }">
      <button>register</button>
    </router-link>
  </nav>
</template>
