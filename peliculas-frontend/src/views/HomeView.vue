<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const usuario = computed(() => {
  const raw = localStorage.getItem('usuario');
  return raw ? JSON.parse(raw) : null;
});

function logout() {
  localStorage.removeItem('jwt_token');
  localStorage.removeItem('usuario');
  router.push('/login');
}
</script>

<template>
  <main class="home-page">
    <header class="topbar">
      <h1>Películas</h1>
      <button @click="logout">Cerrar sesión</button>
    </header>

    <div class="welcome-box">
      <h2>Bienvenido</h2>
      <p v-if="usuario">{{ usuario.nombre }}</p>
      <p v-if="usuario">{{ usuario.email }}</p>
    </div>

    <router-view />
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  padding: 24px;
  background: #eef4ff;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

button {
  padding: 10px 14px;
  background: #ef4444;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.welcome-box {
  background: white;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}
</style>
