<template>
  <div
    class="md:bg-blue-gradient xl:bg-1/2 bg-no-repeat xl:grid grid-cols-2 overflow-hidden"
  >
    <!-- BEGIN: Register Info -->
    <div class="hidden xl:block max-w-lg mx-auto">
      <div class="sticky top-0 min-h-screen grid grid-rows-3 gap-20 py-20">
        <Logo id="main" class="-intro-x row-span-1 w-80 mx-auto mt-auto" />
        <div class="-intro-x row-span-2 my-auto text-white">
          <slot name="info">
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
            <div class="flex items-start mb-10">
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
            <div class="flex items-start">
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
          </slot>
        </div>
      </div>
    </div>
    <!-- END: Register Info -->
    <!-- BEGIN: Register Form -->
    <div
      class="intro-x sm:min-h-screen xl:h-auto flex items-center justify-center relative mx-6 md:mx-10 lg:mx-0 pt-12 pb-20 sm:pt-14 xl:pt-20 lg:bg-white"
    >
      <div
        class="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-sm md:p-14 lg:p-20 xl:p-0 md:bg-white md:rounded-lg"
      >
        <!-- <LogOutButton class="md:absolute xl:relative" variant="secondary" /> -->
        <Logo
          id="secondary"
          variant="secondary"
          class="w-36 mx-auto mb-8 xl:hidden"
        />
        <slot></slot>
      </div>
    </div>
    <!-- END: Register Form -->
  </div>
</template>
<script>
import Logo from "@/shared/ui/components/Logo/LogoKambista";
export default {
  name: "LoginLayout",
  components: {
    Logo
  }
};
</script>
