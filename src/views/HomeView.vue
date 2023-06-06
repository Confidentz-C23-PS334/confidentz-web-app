<template>
  <div>
    <h1>Artikel Seputar Kesehatan Gigi</h1>
    <div class="card-container">
      <div v-for="article in articles" :key="article.id" class="card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.author }}</p>
        <p>{{ article.date }}</p>
        <p>{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Contoh Artikel 1",
          author: "John Doe",
          date: "2023-05-01",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut diam vestibulum, bibendum tortor vitae, posuere sapien. Sed sed dui et neque rutrum rutrum. Aliquam erat volutpat. Suspendisse feugiat aliquet velit, id aliquet ligula lacinia in. Ut ac rutrum neque. Nunc euismod fringilla mauris, id iaculis dui aliquam non. Phasellus sed mauris ante.",
        },
        {
          id: 2,
          title: "Contoh Artikel 2",
          author: "Jane Smith",
          date: "2023-05-02",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut diam vestibulum, bibendum tortor vitae, posuere sapien. Sed sed dui et neque rutrum rutrum. Aliquam erat volutpat. Suspendisse feugiat aliquet velit, id aliquet ligula lacinia in. Ut ac rutrum neque. Nunc euismod fringilla mauris, id iaculis dui aliquam non. Phasellus sed mauris ante.",
        },
        // Tambahkan artikel lainnya di sini
      ],
    };
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 300px;
  padding: 16px;
  margin: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

