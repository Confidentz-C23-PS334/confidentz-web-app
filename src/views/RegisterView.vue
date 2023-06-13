<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

const router = useRouter()

const name = ref(''),
  email = ref(''),
  password = ref('')

const submitForm = () => {
  console.log('submitting')
  console.log(email.value, password.value)
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('created user')
      router.push({ name: 'home' })
    })
    .catch((err) => console.log(err))
}

onAuthStateChanged(auth, (u) => {
  if (u) {
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
