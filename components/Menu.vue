
<template>
  <div class="menu">
    <v-list color="transparent">
      <v-list-item v-for="menu in menus" :key="menu.url" link :to="menu.url">
        <v-list-item-icon>
          <v-icon v-text="menu.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="menu.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Menu.vue",
  created() {},
  data: () => ({
    menus: [
      {
        icon: "mdi-home",
        title: "INICIO",
        url: "#inicio",
      },
      {
        icon: "mdi-clipboard-text",
        title: "TRATAMIENTOS",
        url: "#tratamientos",
      },
      {
        icon: "mdi-book-information-variant",
        title: "INFORMACIÓN",
        url: "#informacion",
      },
      {
        icon: "mdi-star-circle",
        title: "CONVENIOS",
        url: "#convenios",
      },
      {
        icon: "mdi-card-account-mail",
        title: "CONTACTO",
        url: "#contacto",
      },
    ],
  }),
};
</script>

<style lang="sass">
.menu
  .v-list-item__icon
    i
      color: hsl(190, 77%, 42%) !important
</style>

