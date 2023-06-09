<script setup lang="ts">
import { ref, reactive } from 'vue'

const file = ref()
const confidence = reactive({
  carries: 0,
  noCarries: 0,
})
const setFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files) file.value = target.files[0]
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
    .then((data) => {
      console.log('data fetched', data)
      confidence.carries = data['Caries']
      confidence.noCarries = data['No Caries']
    })
}
</script>

<template>
  <input type="file" name="file" id="file" @change="setFile" />
  <button @click="upload">submit</button>
  <p v-if="confidence">confidence: {{ confidence }}</p>
</template>
