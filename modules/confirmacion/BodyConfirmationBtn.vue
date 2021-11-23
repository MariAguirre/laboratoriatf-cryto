<template>
    <div class="
  font monserrat
  flex flex-col
  justify-center
  items-center
  py-8 w-340 sm:w-500">

  
  <Button class="w-330 md:w-410 font-bold"  
  :loading="loading"
  text="VOLVER A COTIZAR"
 @click.native="calculadora"
></Button>
  </div>
</template>
<script>
import Button from "~/shared/ui/components/Button/Button.vue"

export default {
    components: {
        Button,
    },
    methods:{
        calculadora(){
            window.location.href="/";

        }
    }
}
</script>



