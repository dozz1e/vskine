<template>
  <div id="tratamientos" ref="tratamientos">
    <header class="pb-10">
      <h2>Tratamientos</h2>
      <span>
        El término kinesiología procede, en su raíz, de las voces griegas
        kineesis, que significa movimiento, y lagos, tratado. Así pues, la
        técnica kinesiológica tratará de las alteraciones del movimiento
        muscular, es decir, del comportamiento de los músculos. Implementa
        agentes físicos y terapias complementarias.
      </span>
    </header>
    <v-row v-for="(max, index) in maxilo" :key="index">
      <v-col cols="12" class="pt-0">
        <v-card>
          <v-row class="ma-0">
            <v-col cols="12" sm="5" class="pa-0 hidden-xs-only">
              <v-img
                :src="`/images/${max.imagen}.jpg`"
                alt="max.titulo"
                width="100%"
                height="100%"
                class="maxilo-card-img"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="7" class="pa-0">
              <v-card-title v-html="max.titulo"></v-card-title>
              <hr width="200" class="ml-4" />
              <v-card-text>
                <ul>
                  <li v-for="(tt, index) in max.texto" :key="index">
                    {{ tt }}
                  </li>
                </ul>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="pt-0"
        v-for="(trata, index) in tratamientos"
        :key="index"
      >
        <v-card id="maxilo-card">
          <v-img
            :src="`/images/${trata.imagen}.jpg`"
            alt="trata.titulo"
            width="100%"
            height="100%"
            class="hidden-xs-only"
          ></v-img>
          <v-card-title v-html="trata.titulo"></v-card-title>
          <hr width="200" class="ml-4" />
          <v-card-text>
            <ul>
              <li v-for="(tt, index) in trata.texto" :key="index">
                {{ tt }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    maxilo: [
      {
        titulo: "Kinesiología<span>Maxilofacial</span>",
        imagen: "maxilofacial",
        texto: [
          "Disminución dolor facial",
          "Cervical y/o Mandibular",
          "Corrección movilidad Cervical y/o Mandibular",
          "Alivio Bruxismo",
          "Alivio Cefaleas",
          "Corrección postural y Educación malos hábitos",
          "Corrección Interposición lingual",
          "Rehabilitación Pre y Post Cirugías Ortognáticas",
          "Rehabilitación Pre y Post Exodoncia",
          "Adaptación funcional Prótesis removible y fija",
        ],
      },
    ],
    tratamientos: [
      {
        titulo: "Traumatología",
        imagen: "traumatologia",
        texto: [
          "Lesiones musculoesqueléticas",
          "Esguinces",
          "Desgarros",
          "Artrosis",
          "Artritis",
          "Lumbalgia",
          "Hernias discales",
          "Etc.",
        ],
      },
      {
        titulo: "Dermato<span>Funcional</span>",
        imagen: "dermato",
        texto: [
          "Cuidados faciales y corporales",
          "Pre - Post operatorios",
          "Masaje descontracturante",
          "Masaje cráneo cérvico facial",
          "Drenaje linfático manual",
        ],
      },
      {
        titulo: "Cardiovascular",
        imagen: "cardiovascular",
        texto: [
          "Entrenamiento cardiovascular para pacientes con trastornos metabólicos",
          "Pacientes secuelados de Accidentes Vasculares",
          "Pacientes con sobrepeso u obesidad",
        ],
      },
      {
        titulo: "Respiratoria<span>Adulto e Infantil</span>",
        imagen: "respiratoria",
        texto: ["VRS", "SBO", "Neumonía", "Bronquitis", "EPOC", "ASMA"],
      },
    ],
  }),
};
</script>

<style lang="sass">
#tratamientos
  margin-bottom: 1rem
  .maxilo-card-img
    border-radius: 4px 0 0 4px
  .v-card__title
    font-family: 'Roboto'
    font-size: 2.5rem
    span
      color: #03b2a5
      font-family: 'Work Sans'
      font-size: 2rem
      font-weight: bold
      width: 100%
    .v-image__image
      border-radius: 4px
</style>