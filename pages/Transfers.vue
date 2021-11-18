<template>
    <div>
        <Topbar variant="light" show-logo></Topbar> 
        <Main />
    </div>
</template>

<script>
import Topbar from '@/shared/ui/components/Layouts/Dashboard/Topbar.vue'
import Main from "@/modules/transferir/Main.vue"

export default {
  components: {
    Topbar,
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
