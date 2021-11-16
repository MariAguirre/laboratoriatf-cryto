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
    " >
    

    <div class="-mx-10">     
        <h1 class="mb-2 font-normal text-14 leading-20 px-8 md:p-0" >
            DETALLE DE TU OPERACIÓN 
        </h1>
        <div>
            <p>Origen</p>
            <p>Interbank</p>
        </div>
        <div>
            <h2>Monto</h2>
            <p>Enviado: <span>100.00 Dólares</span></p>
            <p>Recibido: <span>0.000033334 BTC</span></p>
        </div>
        <div>
            <p>1BTC = 60.140.39 USD</p>
            <p>1USD = 0.000017 BTC</p>
        </div>
        
    </div>        
  </div>
</template>

<script>
//import { TextTitle } from '@/shared/ui/components/Typography/TextTitle.vue'

export default {
    components: {
        
    },
}
</script>
