<script setup>
import Menubar from "primevue/menubar";
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
</script>
<template>
  <Menubar id="menubar">
    <template #start>
      <div class="navbar-link-container">
        <RouterLink class="navbar-link" :to="'/inicio'">Inicio</RouterLink>
        <RouterLink class="navbar-link" :to="'/servicios'">Servicios</RouterLink>
        <!--RouterLink class="navbar-link" :to="'/mensajes'">Mensajes</RouterLink-->
      </div>
    </template>
  </Menubar>
</template>

<script>
export default {
  name: "MenuBarComponent",
  components: {
    Menubar,
    RouterLink,
  },
};
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; /* Asegúrate de que el menú esté por encima de otros elementos */
}

.content-below-menu {
  margin-top: 60px; /* Ajusta este valor al tamaño de tu menú */
}
#menubar {
  background-color: #3e80d6;
  opacity: 0.8;
  font-family: "Almarai", sans-serif;
  border-radius: 0;
  border: none;
  display: flex;
  padding: 0 15% 0 36.75%; /* TO-DO */
  margin-bottom: 1rem;
}

.navbar-link-container {
  font-family: "Almarai", sans-serif;
  height: 2rem;
  display: flex;
  align-items: center;
  float: center;
  text-align: center
}

.navbar-link {
  font-size: 0.8rem;
  padding: 0 20px 0 20px;
  color: #ffffff;
  text-decoration: none;
}
</style>