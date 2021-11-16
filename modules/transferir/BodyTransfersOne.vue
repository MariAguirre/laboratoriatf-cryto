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
      rounded-5px
      backdrop-blur-sm
      sm:w-219 sm:h-359
      ml-8
      mr-8          
    "
  >
    <img class="mt-8 mb-2" src="@/assets/images/navigation/Group7084.svg" alt="" />
    <TextTitle >
        <h1 class="hidden md:block mb-3 font-bold text-2xl">Transfiere a Kambista</h1>
    </TextTitle>    
    
      <label for="first-name" class="mb-1 mt-4 font-normal text-16 leading-20 px-8 md:p-0">
        Tranfiere desde tu banco y guarda el numero de operacion para el siguiente paso.
        </label>
       <div>
         <BodyDetalleTransfers> 
        </BodyDetalleTransfers>
        </div> 
      
  </div>
</template>

<script>
import { TextTitle } from '@/shared/ui/components/Typography/TextTitle.vue'
import BodyDetalleTransfers from '@/modules/transferir/BodyDetalleTransfers.vue'

export default {
    components: {
        TextTitle,
        BodyDetalleTransfers,
    },
}
</script>
