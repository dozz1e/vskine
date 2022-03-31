<template>
  <div id="convenios" ref="convenios">
    <header class="pb-2">
      <h2>Convenios</h2>
      <span> Atención convenios en consulta </span>
    </header>
    <v-row>
      <v-col cols="12" class="pb-0">
        <h3>REEMBOLSO ISAPRES</h3>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(isapre, index) in isapres"
        :key="index"
        class="pt-0"
      >
        <v-card height="150" class="pa-5 d-flex">
          <v-img
            :src="`/images/logos/${isapre.imagen}.png`"
            :alt="isapre.nombre"
            contain
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    isapres: [
      {
        nombre: "BanMédica",
        imagen: "banmedica"
      },
      {
        nombre: "Nueva Más Vida",
        imagen: "nuevamasvida"
      },
      {
        nombre: "Colmena",
        imagen: "colmena"
      },
      {
        nombre: "Cruz Blanca",
        imagen: "cruzblanca"
      },
      {
        nombre: "ConSalud",
        imagen: "consalud"
      },
      {
        nombre: "Vida Tres",
        imagen: "vidatres"
      }
    ]
  })
};
</script>

<style lang="sass">
#convenios
  span
    font-size: 1.2rem
    line-height: 1
</style>
