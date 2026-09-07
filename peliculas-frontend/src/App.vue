<script setup>

import { onMounted, ref } from "vue";
import { ObtenerPeliculas } from "./services/peliculaService";

const peliculas = ref([]);
const cargando = ref(true);
const error = ref("");

async function cargarPeliculas() {
  try {
    cargando.value = true;
    peliculas.value = await ObtenerPeliculas();

  } catch (er) {
    error.value = er.message;
  } finally {
    cargando.value = false;
  }
}

onMounted(() => {
  cargarPeliculas();
});

</script>

<template>
  <main>
    <h1>Peliculas</h1>
    <p v-if="cargando"> Cargando Peliculas... </p>
    <p v-if="error"> {{ error }} </p>

    <div v-if="!cargando && !error">
      <article v-for="pelicula in peliculas" :key="pelicula.id">
        <h1>Lista de Peliculas</h1>
        <h2> Nombre: {{ pelicula.nombre}} </h2>
        <p> Sinopsis: {{ pelicula.sinopsis}} </p>
        <img :src="pelicula.imagen" :alt="pelicula.nombre">
      </article>
    </div>

  </main>
</template>

<style scoped></style>
