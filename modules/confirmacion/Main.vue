<template>
  <div class="mt-9 ml-90 flex justify-center items-center flex-col" >
    <BodyConfirmationOne class="w-306 md:w-719"/>
    <BodyConfirmationBtn class="w-306 md:w-719"/>
  </div>
    
</template>

<script>
import BodyConfirmationOne from "@/modules/confirmacion/BodyConfirmationOne.vue"
import BodyConfirmationBtn from "@/modules/confirmacion/BodyConfirmationBtn.vue"

export default {
  components: { 
    BodyConfirmationOne,
   
    BodyConfirmationBtn,
  },

}
</script>