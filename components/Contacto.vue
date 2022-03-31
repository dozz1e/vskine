<template>
  <div id="contacto" ref="contacto" class="pt-10 pb-10">
    <v-container class="pa-0">
      <v-row class="pa-0 ma-0">
        <v-col cols="12" sm="6" class="pa-0">
          <Marquesina texto="Para agendar cita contáctenos"></Marquesina>
          <div class="px-5 pb-5">
            <table>
              <tbody>
                <tr>
                  <td class="pr-5">TELÉFONO</td>
                  <td>+56942544033</td>
                </tr>
                <tr>
                  <td class="pr-5">CORREO</td>
                  <td>contacto@vskinesiologia.cl</td>
                </tr>
                <tr>
                  <td class="pr-5">DIRECCIÓN</td>
                  <td>Paseo Estado N°57 Oficina 704</td>
                  <td>Metro Universidad de Chile</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex align-center justify-center pt-5">
              <a
                href="https://www.instagram.com/vskinesiologia/"
                target="_blank"
              >
                <v-img
                  src="/images/social/instagram.png"
                  height="60"
                  width="60"
                  alt="Instagram"
                ></v-img>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=56942544033"
                target="_blank"
                class="pl-5"
              >
                <v-img
                  src="/images/social/whatsapp.png"
                  height="60"
                  width="60"
                  alt="Whatsapp"
                ></v-img>
              </a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2619422615853!2d-70.65111778515826!3d-33.442481480776216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a10f85e7f7%3A0xbce7f11b2906aeaf!2sEstado%2057%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1630610100294!5m2!1ses-419!2scl"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
#contacto
  background: #19A1BD
  color: #fff
  .container
    background: #19A1BD
    @media (min-width: 768px)
      margin-bottom: 30px
</style>