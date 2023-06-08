<template>
  <div>
    <h1>Artikel Seputar Kesehatan Gigi</h1>
    <div class="card-container">
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

<script>
import { db } from "@/firebase"; // impor inisialisasi Firebase dan referensi koleksi Firestore

export default {
  data() {
    return {
      articles: [], // Simpan data artikel
    };
  },
  mounted() {
    // Mengambil data dari koleksi "artikel" di Firestore
    db.collection("artikel")
      .get()
      .then((querySnapshot) => {
        // Mengiterasi setiap dokumen
        querySnapshot.forEach((doc) => {
          // Mendapatkan data dari dokumen
          const data = doc.data();

          // Membuat objek artikel dengan properti yang sesuai
          const article = {
            id: doc.id,
            title: data.title,
            author: data.author,
            date: data.date,
            body: data.body,
            website: data.website
          };

          // Menambahkan artikel ke dalam array
          this.articles.push(article);
        });
      })
      .catch((error) => {
        console.error("Error getting documents:", error);
      });
  },
};
</script>

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
