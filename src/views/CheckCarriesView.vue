<script setup>
import { ref } from 'vue'

const file = ref(null)
const confidence = ref(0)
const setFile = (e) => {
  file.value = e.target.files[0]
}
const upload = () => {
  const formData = new FormData()
  formData.append('file', file.value)
  const options = {
    method: 'POST',
    body: formData,
  }
  fetch('/detect', options)
    .then((res) => res.json())
    .then(data => confidence.value = data.carries_confidence)
}
</script>

<template>
  <input type="file" name="file" id="file" @change="setFile" />
  <button @click="upload">submit</button>
  <p v-if="confidence">confidence: {{ confidence }}</p>
</template>
