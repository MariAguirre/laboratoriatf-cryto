<template>
  <GetStartedLayout>
    <LoginTitle/>
    <Main/>
  </GetStartedLayout>
</template>

<script>
import GetStartedLayout from "~/layouts/GetStartedLayout/GetStartedLayout.vue";
import Main from "@/modules/login/Main.vue"
import LoginTitle from '~/modules/login/components/LoginTitle.vue';

export default {
  components: {
    GetStartedLayout,
    Main,
    LoginTitle,
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('SI TOKEN');
      this.$router.push({path: '/'});
    } else {
      console.log('NO TOKEN');
      this.$router.push({path: 'login'});
    }
  }
};
</script>