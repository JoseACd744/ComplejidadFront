<template>

<h1>
  Encuentra el hospital más cercano a un almacén subterráneo
</h1>

<div class="container">
    <Dropdown v-model="selectedStorage" :options="storageList" optionLabel="name" placeholder="Seleccionar almacén subterráneo"></Dropdown>

    <Button type="button" label="Buscar" icon="pi pi-search" :loading="loading" @click="searchHospital" />

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
    <Button type="button" label="Cerrar" icon="pi pi-times" @click="hidePopup" />
    <div class="popup-inner">
      <div class="route-image">
        <img :src="hospitalRouteImage" alt="Imagen de la ruta al hospital">
      </div>
      <div class="hospital-details">
        <h2>Detalles del hospital más cercano</h2>
        <img :src="hospitalImage" alt="Imagen del hospital">
        <h2>{{ hospitalName }}</h2>
        <p>{{ hospitalAddress }}</p>
        <p>Teléfono: {{ hospitalPhone }}</p>
        <p>Tipo: {{ hospitalType }}</p>
      </div>
    </div>
  </div>
    
  </div>
</div>

</template>



<script>
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { ref } from 'vue';


export default {
    components: {
        Dropdown,
        // eslint-disable-next-line vue/no-reserved-component-names
        Button,
        
    },
    
  data() {
    return {
        storageList: [
    { id: 1, name: "Parque Federico Villarreal" },
    { id: 2, name: "Parque Eduardo Villena Rey" },
    { id: 3, name: "Parque Manuel Solari Swayne" },
    { id: 4, name: "Parque Juan Bielovucic" },
    { id: 5, name: "Parque Juan Bielovucic"},
    { id: 6, name: "Parque Clorinda Matto de Turner" },
    { id: 7, name: "Parque Francisco de Miranda" },
    { id: 8, name: "Parque Manuel Villavicencio" },
    { id: 9, name: "Parque Paul Rivet" },
    { id: 10, name: "Parque Francisco de Zela" },
    { id: 11, name: "Parque Alexander Von Humbolt" },
    { id: 12, name: "Parque Luis Bustamante" },
    { id: 13, name: "Parque Luis Fernán Cisneros" },
    { id: 14, name: "Parque Pablo Arguedas" },
    { id: 15, name: "Parque Melitón Porras" },
    { id: 16, name: "Parque Francisco Bolognesi" }
    ],
      selectedStorage: null, // Almacén seleccionado
      // ... resto de las variables de datos

      showPopup: false,
      hospitalImage: '',
      hospitalRouteImage: '',
      hospitalName: '',
      hospitalAddress: '',
      hospitalPhone: '',
      hospitalType: '',
    };
  },
  mounted() {
    // Obtener la lista de almacenes subterráneos al cargar la pantalla
    // ... (implementación de la lógica para obtener la lista de almacenes)
  },
  methods: {
    searchHospital() {
      // Buscar el hospital más cercano en función del almacén seleccionado
      // ... (implementación de la lógica para buscar el hospital más cercano)
      this.showPopup = true; // Mostrar el popup con los detalles del hospital
      this.hospitalImage = 'https://www.grupocopisa.com/wp-content/uploads/2018/06/Nuevo-hospital-de-Vitarte-en-Ate-2.jpg'; // URL de la imagen del hospital
      this.hospitalName = 'Hospital de Prueba'; // Nombre del hospital
      this.hospitalAddress = '123 Calle de Prueba'; // Dirección del hospital
      this.hospitalPhone = '123-456-7890'; // Teléfono del hospital
      this.hospitalType = 'General'; // Tipo de hospital
      this.hospitalRouteImage = 'https://i.imgur.com/Qjg2INn.png'; // URL de la imagen de la ruta al hospital
     
      const loading = ref(false);
      loading.value = true;
        setTimeout(() => {
        loading.value = false;
        }, 2000);
    },
    hidePopup() {
      this.showPopup = false;
    },
    
  },
};

</script>

<style scoped>

.popup-content {
  /* ... otros estilos ... */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
img {
  max-width: 50%;
  height: auto;
  
}

.route-image {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}

.route-image img {
  max-width: 55%;
  height: auto;
}

.hospital-details {
  flex: 1;
  margin-left: 20px;
  align-items: center;
  background-color: aliceblue;
  text-align: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000;
  padding: 0 1rem;
}



.container {
  display: flex;
    align-items: baseline;
    justify-content: flex-end;
    height: 75%;
    width: 100%;
    padding: 0 1rem;
}

.p-dropdown {
  width: auto;
}

.p-button {
  margin-left: 1rem;
}

.p-button-loading {
  margin-left: 1rem;
}


.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
}

.popup-content {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%; /* Asegúrate de que el contenido del pop-up no sea demasiado ancho */
  overflow: auto; /* Asegúrate de que el contenido del pop-up se pueda desplazar si es demasiado alto */
}

p {
  margin: 5px 0;
}


</style>

