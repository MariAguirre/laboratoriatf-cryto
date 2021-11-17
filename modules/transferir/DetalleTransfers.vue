<template>
  <div
    class="         
      flex-col
      bg-white                
    " >    

    <div class="md:p-2">     
        <h1 class="font-normal text-14" >
            DETALLE DE TU OPERACIÓN 
        </h1>
        <div class="mt-4">
            <p>Origen</p>
            <p class="mt-2">Interbank</p>
        </div>
        <div class="mt-4">
            <p>Direccion de destino</p>
            <p class="mt-2 truncate md:overflow-ellipsis">https://www.figma.com/file/RNHgfOUm2zbN5EZvrIwuxJ/Reto-Criptomonedas?node-id=29%3A764</p>
        </div>
        <div class="mt-4">
            <h2 class="font-bold mt-2">Monto</h2>
            <p class="mt-2">Enviado: <span>{{data2.mountOrigin}} Dólares</span></p>
            <p class="mt-2">Recibido: <span>{{data2.mountDestiny}} BTC</span></p>
        </div>
        <div class="mt-6">
            <p class="font-bold">1BTC = {{data2.exchangeOne}} USD</p>
            <p class="mt-2 font-bold">1USD = {{data2.exchangeTwo}} BTC</p>
        </div>
        
    </div>        
  </div>
</template>

<script>
//import { TextTitle } from '@/shared/ui/components/Typography/TextTitle.vue'

export default {
    components: {
        
    },
    props: {
        data2: {
            type: Object,
            default(){
         }}
    }
    
}
</script>