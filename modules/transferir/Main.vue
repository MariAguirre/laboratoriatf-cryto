<template>
    <div class="Grid grid-flow-col">        
            <BaseText  class="flex justify-center mt-20 ml-14 mr-8 md:px-20 ">
                <p class="flex font-bold mr-4">El tipo de cambio se actualizará en</p>
                <span class="flex font-bold">00:15:00</span>
            </BaseText>
            <div class="m-18 ml-8 mr-8 mt-4 flex justify-center">
                <div>
                    <BaseCard class="w-306 md:w-719 p-8 ">  
                    <BaseText class="">
                    <BodyTransfers class="flex "/>
                    </BaseText>                
                    </BaseCard>
                </div>
                <div>
                    <BaseCard class="hidden sm:block w-306 md:w-306 ml-9 " >                    
                    <DetalleTransfers class="flex justify-left md:p-4" />                                  
                    </BaseCard>
                </div> 
            </div>      
            <div class="               
                    flex flex-col
                    justify-center
                    items-center">
                    <Button class="mt-8" text="CONFIRMO TRANSFERENCIA">                     
                    </Button>
            </div>
         
    </div>
</template>

<script>
import BaseCard from '@/shared/ui/components/Cards/BaseCard.vue'
import BodyTransfers from '~/modules/transferir/BodyTransfers.vue'
import DetalleTransfers from '@/modules/transferir/DetalleTransfers.vue'
import Button from '@/shared/ui/components/Button/Button.vue'


export default {
    components: {       
    BaseCard,
    BodyTransfers,
    DetalleTransfers,
    Button    
    
  },
}
</script>
