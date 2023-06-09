<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

const router = useRouter()
const user = ref(false)

const signOut = async () => {
  auth.signOut().then(() => {
    console.log('signed out')
    router.push({ name: 'login' })
  })
}

onAuthStateChanged(auth, (u) => {
  if (u) {
    user.value = true
  } else {
    user.value = false
  }
})
</script>

<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <button>home</button>
    </router-link>
    <router-link :to="{ name: 'check-carries' }">
      <button>check carries</button>
    </router-link>
    <router-link v-if="!user" :to="{ name: 'login' }">
      <button>login</button>
    </router-link>
    <router-link v-if="!user" :to="{ name: 'register' }">
      <button>register</button>
    </router-link>
    <button v-if="user" @click="signOut">sign out</button>
  </nav>
</template>
