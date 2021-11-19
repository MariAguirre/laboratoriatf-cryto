<template>
<div>
    <div>
         <Topbarflow2 class="hidden sm:block" variant="light" show-logo show-nav />
    </div>
    <div>
      <Topbarflowsm2
        class="block sm:hidden"
        variant="light"
        show-logo
        show-nav
      />
        <Main />
    </div>
    </div>
</template>

<script>
import Topbarflow2 from '@/shared/ui/components/Layouts/Dashboard/Topbarflow2.vue'
import Topbarflowsm2 from '@/shared/ui/components/Layouts/Dashboard/Topbarflowsm2.vue'
import Main from "@/modules/transferir/transferirInterbancario/Main.vue"

export default {
  components: {
    Topbarflow2,
    Topbarflowsm2,
    Main,
    
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push({path: 'login'});
    }
  },
};
</script>
