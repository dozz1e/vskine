<template>
  <div id="aviso">
    <v-alert
      v-model="aviso"
      dismissible
      prominent
      color="warning"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-alert"
    >
      {{ texto }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    aviso: true,
  }),
};
</script>

<style lang="sass">
#aviso
	.v-alert--prominent .v-alert__icon:after
		opacity: 0
</style>