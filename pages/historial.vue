<template>
  <div>
    <Topbar variant="light" show-logo></Topbar> 
    
  </div>
</template>

<script>
import Topbar from '~/shared/ui/components/Layouts/Dashboard/Topbar.vue'
export default {
  components: { Topbar },
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push({path: 'login'});
    }
  },
}
</script>