<!-- Els components tenen una part de template que dins té els elements que acabaran sent nodes del DOM -->
<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- El @ és l'identificador de l'event del formulari que ha de coincidir amb el primer paràmetre de l'.$emit.-->
        <formulario-persona @add-persona="agregarPersona" />
        <!-- Ací tenim el component -->
        <tabla-personas
          :personas="personas"
          @delete-persona="eliminarPersona"
          @actualizar-persona="actualizarPersona"
        />
      </div>
    </div>
  </div>
</template>

<!-- I parts d'scripts que és on escriurem les funcions i objectes que vue utilitza per a funcionar -->
<script>
import TablaPersonas from "./components/TablaPersonas.vue";
import FormularioPersona from "./components/FormularioPersona.vue";

export default {
  name: "app",
  components: {
    TablaPersonas,
    FormularioPersona,
  },
  data() {
    return {
      personas: [
        {
          id: 1,
          nombre: "Jon",
          apellido: "Nieve",
          email: "jon@email.com",
        },
        {
          id: 2,
          nombre: "Tyrion",
          apellido: "Lannister",
          email: "tyrion@email.com",
        },
        {
          id: 3,
          nombre: "Daenerys",
          apellido: "Targaryen",
          email: "daenerys@email.com",
        },
      ],
    };
  },
  methods: {
    agregarPersona(persona) {
      /* this.personas = [...this.personas, persona]; */
      const ides = this.personas.map((persona) => persona.id);
      const idMax = Math.max(...ides);
      persona.id = idMax + 1;
      this.personas.push(persona);
    },
    eliminarPersona(id) {
      this.personas = this.personas.filter((persona) => persona.id !== id);
    },
    actualizarPersona(id, personaActualizada) {
      this.personas = this.personas.map((persona) =>
        persona.id === id ? personaActualizada : persona
      );
    },
  },
};
</script>

<!-- I la part d'estil per a tindre-ho tot junt -->
<style>
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>
