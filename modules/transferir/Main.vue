<template>
    <div>
        <BaseCard :shadow="inherit" :border="2"> 
        <BaseText class=" alignment:center">
        <BodyTransfers />
        </BaseText>        
        </BaseCard>
    </div>
</template>

<script>
import BaseCard from '@/shared/ui/components/Cards/BaseCard.vue'
import BodyTransfers from '@/modules/transferir/BodyTransfers.vue'

export default {
    components: {
    BaseCard,
    BodyTransfers    
    
  },
}
</script>
