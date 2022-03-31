<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      id="menu-mobile"
      disable-resize-watcher
    >
      <v-img
        src="/logo.png"
        alt="Logo VSKinesiología"
        height="100"
        contain
        class="mb-5 mt-5"
      ></v-img>
      <Menu></Menu>
    </v-navigation-drawer>
    <v-app-bar
      app
      flat
      fixed
      :color="0 < offsetTop ? '#fefefe' : 'transparent'"
    >
      <v-container class="pa-0 d-flex align-center justify-space-between">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mobile"
        ></v-app-bar-nav-icon>
        <n-link to="/" class="d-flex align-center">
          <v-img
            src="/logo.png"
            height="40"
            width="40"
            class="mr-3"
            contain
            alt="Logo VSKinesiología"
          ></v-img>
          <span class="desktop titulo">KINESIOLOGÍA</span>
        </n-link>
        <Menu id="menu-desktop" class="desktop"></Menu>
      </v-container>
    </v-app-bar>
    <v-main class="pb-0">
      <nuxt />
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mx-2"
            fab
            dark
            color="#43a047"
            id="boton-whats"
            href="https://wa.me/56942544033"
            target="_blank"
            v-on="on"
            v-bind="attrs"
            aria-label="Whatsapp"
          >
            <v-icon dark> mdi-message-reply-text </v-icon>
          </v-btn>
        </template>
        <span>Contáctanos a nuestro Whatsapp</span>
      </v-tooltip>
    </v-main>
    <v-footer absolute app class="d-flex justify-center">
      <span>VSKinesiología &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Menu from "~/components/Menu";

export default {
  components: { Menu },
  data() {
    return {
      drawer: false,
      menus: [
        {
          icon: "mdi-home",
          title: "INICIO",
          url: "inicio",
        },
        {
          icon: "mdi-clipboard-text",
          title: "TRATAMIENTOS",
          url: "tratamientos",
        },
        {
          icon: "mdi-book-information-variant",
          title: "INFORMACIÓN",
          url: "informacion",
        },
        {
          icon: "mdi-star-circle",
          title: "CONVENIOS",
          url: "convenios",
        },
        {
          icon: "mdi-card-account-mail",
          title: "CONTACTO",
          url: "contacto",
        },
      ],
      offsetTop: 0,
    };
  },
  beforeMount() {
    this.setIOS();
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    ...mapActions(["setIOS"]),
    irA(caja) {
      if (process.client) {
        let element = document.getElementById(caja);
        let rect = element.getBoundingClientRect();
        window.scrollTo(0, rect.top + window.scrollY - 64);
        this.drawer = false;
      }
    },
    onScroll() {
      this.offsetTop = window.scrollY;
    },
  },
};
</script>

<style lang="sass">
a
  color: hsl(190, 77%, 42%) !important
  text-decoration: none
body
  margin: 0 auto
h1,h2,h3,h4,h5,h6
  font-family: 'Work Sans', sans-serif
h2
  font-size: 2.5rem
header
  h2
    color: hsl(190, 77%, 42%)
    margin-bottom: 10px
    padding-left: 5px
html
  scroll-behavior: smooth
footer
  background: #1E6BA6 !important
  span
    color: #fff
ul
  list-style-type: none
  padding: 0 !important
  li
    background: hsla(190, 77%, 42%,5%)
    margin: 2px 0
    padding: 10px
#boton-whats
  bottom: 20px
  position: fixed
  right: 10px
  z-index: 1000
  i
    color: #fff
  @media (min-width: 768px)
    right: 20px
#menu-desktop
  .v-list
    display: flex
    .v-list-item__icon
      display: none
.titulo
  color: $verde !important
  font-size: 1.5rem
@media (max-width: 959px)
  .desktop
    display: none
@media (min-width: 960px)
  .mobile
    display: none !important
</style>