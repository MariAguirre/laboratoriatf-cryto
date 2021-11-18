<template>
  <div v-if="showView">
    <Topbar variant="light" show-logo></Topbar> 
    <div class="m-24 mr-16 grid grid-cols-2 grap-4">
      <BaseCard text="">
        <ConstancyOpera />
      </BaseCard>
      <BaseText />
      <div
        class="font-montserrat flex flex-col justify-center items-center pt-8"
      ></div>
    </div>
  </div>
</template>

<script>
import Topbar from "~/shared/ui/components/Layouts/Dashboard/Topbar.vue";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancyOpera from "@/modules/constans/components/ConstancyOpera.vue";
//import Button from '@/shared/ui/components/Button/Button.vue'
/* import ConstancyOpera from '@/modules/constans/components/ConstancySend.vue'
import ConstancyOpera from '@/modules/constans/components/ConstancyTransfer.vue' */

export default {
  components: { Topbar,BaseCard,BaseText,ConstancyOpera},
  data() {
    return {
      showView: false
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('NO TOKEN');
      this.$router.push({path: 'login'});
    } else {
      console.log('SI TOKEN');
      this.showView = true;
    }
  },
}
</script>
