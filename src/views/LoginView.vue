<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      // TODO: Add login logic here
      console.log('Login form submitted');
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black; /* Mengganti warna border menjadi hitam */
  border-radius: 5px;
}

h1 {
  text-align: center;
}

form {
  display: grid; /* Mengubah display menjadi grid */
  gap: 10px; /* Menambahkan jarak antara elemen-elemen dalam grid */
}

.form-group {
  /* Mengubah margin-bottom menjadi margin-top */
  margin-top: 15px;
}

label {
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
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
