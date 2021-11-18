<template>
  <div>
    <Topbar variant="light" show-logo></Topbar> 
    <div class="m-24 mr-16 grid grid-cols-2 grap-4">
    <BaseCard>
    <ConstancySend/>
    </BaseCard>
    <BaseText/>
    <div class="font-montserrat flex flex-col justify-center items-center pt-8">
    <Button text="ENVIAR CONSTANCIA" >
    </Button>
    </div>
    </div>
   


  </div>

</template>

<script>
import Topbar from '~/shared/ui/components/Layouts/Dashboard/Topbar.vue'
import BaseCard from '@/shared/ui/components/Cards/BaseCard.vue'
import BaseText from '@/shared/ui/components/Typography/BaseText.vue'
import Button from '@/shared/ui/components/Button/Button.vue'
import ConstancySend from '@/modules/constans/components/ConstancySend.vue'
/* import ConstancyOpera from '@/modules/constans/components/ConstancyTransfer.vue'  */




export default {
  components: { Topbar,BaseCard,BaseText,ConstancySend,Button},
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push({path: 'login'});
    }
  },
}

</script>