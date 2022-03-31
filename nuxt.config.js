import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "VSKinesiología - Maxilofacial, Traumatología, Dermato Funcional",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Expertos en Kinesiología Maxilofacial, Traumatología, Dermato Funcional, Cardiovascular y Respiratoria Adulto/Infantil. Fonasa nivel 3 y reembolso Isapres"
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CL" },
      { property: "og:site_name", content: "VS Kinesiología" },
      { name: "format-detection", content: "telephone=no" },
      {
        property: "og:title",
        content:
          "VSKinesiología - Maxilofacial, Traumatología, Dermato Funcional"
      },
      {
        property: "og:description",
        content:
          "Expertos en Kinesiología Maxilofacial, Traumatología, Dermato Funcional, Cardiovascular y Respiratoria Adulto/Infantil. Fonasa nivel 3 y reembolso Isapres"
      },
      {
        property: "og:url",
        content: "https://www.vskinesiologia.cl"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "canonical", href: "http://www.vskinesiologia.cl" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Work+Sans:wght@400;700&display=swap",
        media: "print",
        onload: "this.media='all'"
      }
    ]
  },

  sitemap: {
    hostname: "https://vskinesiologia.cl",
    gzip: true
  },

  // "google-gtag": {
  //   id: "UA-",
  //   config: {
  //     anonymize_ip: true, // anonymize IP
  //     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
  //     linker: {
  //       domains: ["vskinesiologia.cl"]
  //     }
  //   },
  //   debug: true, // enable to track in dev mode
  //   disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  cache: {
    useHostPrefix: false,
    pages: ["/"],
    store: {
      type: "memory",
      max: 100,
      ttl: 60
    }
  }
};
