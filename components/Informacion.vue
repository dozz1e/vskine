<template>
  <div id="informacion" ref="informacion">
    <header class="hidden-sm-and-up">
      <h2>Información</h2>
    </header>
    <v-row>
      <v-col cols="12" sm="10">
        <v-card>
          <v-card-title>
            Valeria Sanzana<br class="hidden-sm-and-up" />
            Pereira
            <span>Kinesióloga</span>
          </v-card-title>
          <v-card-text>
            <strong
              >Especialidad: Maxilo Facial, otorgado por Universidad
              Mayor.</strong
            ><br />
            Titulada Universidad del Mar 2014.<br /><br />
            <strong> Otros estudios: </strong>
            <ul>
              <li v-for="(estudio, index) in estudios" :key="index">
                - {{ estudio }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" class="hidden-xs-only informacion">
        <Lateral texto="#INFORMACIÓN"></Lateral>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Lateral from "~/components/Lateral";

export default {
  data: () => ({
    estudios: [
      'Postítulo “Kinesiología Maxilofacial" Universidad Mayor',
      "Socia Activa Sociedad de Kinesiología Maxilofacial y Trastornos Cráneo-cervicales",
      "Curso Kinesiología en Pacientes Críticos Pediátricos, Universidad de Chile, Facultad de Medicina",
      "Curso de Punción Seca en el Tratamiento de los Puntos Gatillos del Cuadrante Superior",
      "Curso Terapia Manual En Cérvico-Cráneo-Facial, Escuela de Masaje y Drenaje Linfático Manual KINEVA",
      "Curso Digitopuntura aplicada en Cervicalgias y Cefaleas, Escuela de Masaje y Drenaje Linfático Manual KINEVA",
      "Taller en Terapia Manual Ortopédica Clínica ASTM, Instituto Rocabado",
      "Curso Kinesioterapia de Piso Pélvico en Paciente Pediátrico. Instituto de Capacitación Mauleduc Ltda.",
      "Curso Soporte Vital básico (Basic LifeSupport- BLS), Educación Continua, Universidad Mayor",
      "Curso Masoterapia Clínica, Innova Especialización y Perfeccionamiento",
    ],
  }),
  components: { Lateral },
};
</script>

<style lang="sass">
#informacion
  margin-bottom: 1rem
  .col-sm-10
    padding-top: 0
    .informacion
      font-size: 3rem
    .v-card__title
      color: #03b2a5
      font-size: 2rem
      span
        color: $texto
        font-size: 1.2rem
        width: 100%
    @media (min-width: 768px)
      margin-top: 20px
</style>