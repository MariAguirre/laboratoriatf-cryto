<template>
    <div class="m-24 mr-16 grid grid-cols-2 gap-8">
        <div>
        <BaseCard > 
        <BaseText >
        <BodyTransfersOne />
        </BaseText>                
        </BaseCard>
        </div>
        <div>
        <BaseCard > 
        <BaseText >
        <BodyTransfersTwo />
        </BaseText>                
        </BaseCard>
        </div>
        <div class="
            font-montserrat
            flex flex-col
            justify-center
            items-center">
            <Button text="CONFIRMO TRANSFERENCIA"> 
                
            </Button>
        </div>
    </div>
</template>

<script>
import BaseCard from '@/shared/ui/components/Cards/BaseCard.vue'
import BodyTransfersOne from '@/modules/transferir/BodyTransfersOne.vue'
import BodyTransfersTwo from '@/modules/transferir/BodyTransfersTwo.vue'
import Button from '@/shared/ui/components/Button/Button.vue'

export default {
    components: {
    BaseCard,
    BodyTransfersOne,
    BodyTransfersTwo,
    Button    
    
  },
}
</script>
