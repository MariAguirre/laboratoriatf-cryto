<template>
    <div>
        <Topbarflow2 variant="light" show-logo></Topbarflow2> 
        <Main />
    </div>
</template>

<script>
import Topbarflow2 from '@/shared/ui/components/Layouts/Dashboard/Topbarflow2.vue'
import Main from "@/modules/transferir/Main.vue"

export default {
  components: {
    Topbarflow2,
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
