<template>
  <div
    class="container bg-blue-gradient m-0 md:hidden lg:hidden xl:hidden relative"
  >
    <div class="body">
      <div class="p-6 overflow-y-scroll">
        <Logo id="secondary" variant="secondary" class="mx-auto" />
        <p class="intro-x text-kambista-5 text-lg text-center">
          ¡Tu cambista online!
        </p>
        <a
          v-if="$kambista.getDevice().isAndroid"
          :href="androidBadget"
        >
          <img
            class="intro-x w-60 mt-7 mx-auto"
            alt="Disponible en Google Play"
            src="@/assets/images/badges/google-play-badge.svg"
          />
        </a>

        <a v-if="$kambista.getDevice().isAndroid" :href="huaweiBadget">
          <img
            alt="huawei"
            class="intro-x w-60 mt-2 mb-7 mx-auto"
            src="@/assets/images/badges/app-gallery-badge.svg"
          />
        </a>
        <a v-if="$kambista.getDevice().isIos" :href="iosBadget">
          <img
            class="intro-x w-52 mt-7 mb-7 mx-auto"
            src="@/assets/images/badges/app-store-badge.svg"
            alt="Download on the App Store"
          />
        </a>
        <div
          class="intro-x flex flex-col justify-center align-center text-white mb-9"
        >
          <div class="flex items-start mb-10">
            <img src="@/assets/images/banners/cotiza-tu-operacion.svg" class="mr-6" />
            <div>
              <h6 class="text-lg font-bold">Cotiza tu operación</h6>
              <p class="font-semibold">
                Utiliza la calculadora para verificar el
                <span class="text-kambista-green">Tipo de Cambio</span>
                en tiempo real
              </p>
            </div>
          </div>
          <div class="flex items-center mb-10">
            <img
              src="@/assets/images/banners/realiza-la-transferencia.svg"
              class="mr-6"
            />
            <div>
              <h6 class="text-lg font-bold">Realiza la transferencia</h6>
              <p class="font-semibold">
                Envía desde tu banco el
                <span class="text-kambista-green">dinero</span>
                que desees cambiar a la
                <span class="text-kambista-green">cuenta</span>
                de Kambista indicada
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <img src="@/assets/images/banners/obten-tu-dinero.svg" class="mr-6" />
            <div>
              <h6 class="text-lg font-bold">Obtén tu dinero</h6>
              <p class="font-semibold">
                El dinero será
                <span class="text-kambista-green">depositado</span>
                en tu cuenta de destino
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white px-5 fixed h-60 bottom-0 left-0 right-0">
      <div class="flex mt-3 justify-center">
        <img src="@/assets/images/common/line.png" />
      </div>
      <slot name="actions">
        <div class="flex flex-col h-full pt-8">
          <KButton
            text="ABRIR EN APLICACIÓN"
            size="lg"
            class="w-full"
            @click.native="openApp"
          />
          <div class="intro-x mt-5 text-center">
            <nuxt-link
              :to="{ path: '/login' }"
              class="text-gray-400 dark:text-kambista-3 underline"
            >
              Continuar con la aplicación web app
            </nuxt-link>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import KButton from "@/shared/ui/components/Button/Button";
export default {
  components: {
    KButton
  },
  data() {
    return {
      androidBadget:
        "https://play.google.com/store/apps/details?id=com.kambista.kambista&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      iosBadget:
        "https://apps.apple.com/us/app/kambista/id1319284292?itsct=apps_box&amp;itscg=30200",
      huaweiBadget: "https://appgallery5.huawei.com/#/app/C101242071"
    };
  },
  methods: {
    openApp() {
      window.location.href = "https://kambista.page.link/download";
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 250px;
}

.body {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
</style>
