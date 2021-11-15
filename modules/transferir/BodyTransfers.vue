<template>
  <div
    class="
      font-montserrat
      flex flex-col
      justify-center
      items-center
      bg-white
      w-330
      h-398
      border border-secondary
      box-border
      rounded-5px
      backdrop-blur-sm
      sm:w-719 sm:h-359
    "
  >
    <img class="" src="@/assets/images/navigation/Group7084.svg" alt="" />
    <TextTitle fontSize="100" weight="bold">
        <h1 class="hidden md:block mb-3 font-bold text-100">Transfiere a Kambista</h1>
    </TextTitle>    
    
    <label for="first-name" class="mb-2 font-normal text-16 leading-20 px-8 md:p-0"
      >Tranfiere desde tu banco y guarda el numero de operacion
            para el siguiente paso.</label>
    <label for="first-name" class="mb-2 font-normal text-16 leading-20 px-8 md:p-0"
      >Monto a transferir.</label>

    <span>000</span>

    <label for="first-name" class="mb-2 font-normal text-16 leading-20 px-8 md:p-0"
      >Monto a transferir.</label>
    
    <span>000</span>    
  </div>
</template>

<script>
import { TextTitle } from '@/shared/ui/components/Typography/TextTitle.vue'

export default {
    components: {
        TextTitle
    },
}
</script>
