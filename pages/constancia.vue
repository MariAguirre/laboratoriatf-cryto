<template>
  <div class="w-340 sm:w-500 m-2 sm:m-4">
    <Topbarflow3 variant="light" show-logo></Topbarflow3> 
    <div class=" flex flex-col ">
    
    <BaseCard>
    <ConstancyOpera/>
    </BaseCard>
    <BaseText/>
    <DetalleTransfer 
            class="flex justify-left md:p-4"
            :data2="data2"
            :data3="data3"
            :number-destiny="numberDestiny"
            :currency="currency"
          
/>
    <div class="font-montserrat flex flex-col justify-center items-center pt-8">
    <Button text="ENVIAR CONSTANCIA" >
    </Button>
    
    </div>
    </div>
   


  </div>

</template>

<script>
import Topbarflow3 from '~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue'
import BaseCard from '@/shared/ui/components/Cards/BaseCard.vue'
import BaseText from '@/shared/ui/components/Typography/BaseText.vue'
import ConstancyOpera from '@/modules/constans/components/ConstancyOpera.vue'
import Button from '@/shared/ui/components/Button/Button.vue'
import DetalleTransfer from '@/modules/transferir/DetalleTransfers.vue'
/* import ConstancyOpera from '@/modules/constans/components/ConstancySend.vue'
import ConstancyOpera from '@/modules/constans/components/ConstancyTransfer.vue' */




export default {
  components: { Topbarflow3,BaseCard,BaseText,ConstancyOpera,Button,DetalleTransfer},
}
</script>