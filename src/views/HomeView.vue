<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

const collectionName = 'artikel'

interface Article {
  id: string
  title: string
  author: string
  date: string
  body: string
  website: string
}
const articles: Article[] = reactive([])

const getCollection = async () => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  querySnapshot.forEach((doc) => {
    const data = doc.data()

    const article: Article = {
      id: doc.id,
      title: data.title,
      author: data.author,
      date: data.date,
      body: data.body,
      website: data.website,
    }

    // Menambahkan artikel ke dalam array
    articles.push(article)
  })
}

onMounted(() => getCollection())
</script>

<template>
  <div>
    <h1>Artikel Seputar Kesehatan Gigi</h1>
    <h2 v-if="!articles[0]">fetching articles...</h2>
    <div v-else class="card-container">
      <div v-for="article in articles" :key="article.id" class="card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.author }}</p>
        <p>{{ article.date }}</p>
        <p v-html="article.body"></p>
        <p>{{ article.website }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.card {
  flex: 0 0 300px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
