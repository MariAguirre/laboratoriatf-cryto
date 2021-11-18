<template>
  <div class=" flex justify-center items-center flex-col mt-9 ml-90">
    <BodyConfirmationOne class="w-306 md:w-719 flex justify-center"/>
    <BodyConfirmationBtn class="w-306 md:w-719" />
  </div>
    
</template>

<script>
import BodyConfirmationOne from "@/modules/confirmacion/BodyConfirmationOne.vue"
import BodyConfirmationBtn from "@/modules/confirmacion/BodyConfirmationBtn.vue"

export default {
  components: { 
    BodyConfirmationOne,
    BodyConfirmationBtn
  },

}
</script>