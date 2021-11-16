<template>
  <div
    class="
      font-montserrat
      flex flex-col
      justify-center
      items-center
      bg-white
      w-330
      h-39
      sm:w-719 sm:h-359
    "
  >
    <img class="mb-0.5" src="@/assets/images/document/document-icon.svg" alt="" />
    <h1 class="hidden md:block mb-3 font-bold text-24 text-blue leading-29">Envía constancia</h1>
    <h1 class="block md:hidden mb-3 font-bold text-20 text-blue leading-24 text-center">
      Envía constancia de tu transferencia
    </h1>
    <label for="first-name" class="mb-2 font-normal text-16 leading-20 px-8 md:p-0"
      >Escribe el código de operación del banco aquí</label
    >
    <div>
    <Input/>
    </div>
    <div class="flex mb-4">
      <img src="@/assets/images/common/question-icon.svg" alt="question" />
      <span class="font-medium text-12 md:text-14 leading-24 tracking-0.03 md:tracking-normal"
        >¿Dónde encuentro el código de operación?</span
      >
    </div>
    <p class="mb-2 font-light md:font-normal text-14 md:text-16 md:leading-20 leading-17 p-1 px-8 md:p-0">
      Verificaremos tu operación para enviarte<span> BTC </span>a tu dirección.
    </p>
  </div>
</template>

<script>
import Input from '@/shared/ui/components/Input.vue'

export default {
  components: { Input},
}
</script>

