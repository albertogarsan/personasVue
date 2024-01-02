//Inicialitza tota la funcionalitat de vue
import { createApp } from "vue";
//Importem el template mare (component principal o root)
import App from "./App.vue";

//Invoquem la funció createApp passant-li el component principal com a argument i això ens retorna la nostra app.
const app = createApp(App);
//Invoquem el mètode mount de la nostra app passant-li l'ID de l'HTML dins del qual es muntarà l'aplicació vue
app.mount("#app");
