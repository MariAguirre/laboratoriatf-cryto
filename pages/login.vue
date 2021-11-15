<template>
  <GetStartedLayout>
    <LoginTitle/>
    <Main/>
    <CreateAccountTitle/>
  </GetStartedLayout>
</template>

<script>
import GetStartedLayout from "~/layouts/GetStartedLayout/GetStartedLayout.vue";
import Main from "@/modules/login/Main.vue"
import LoginTitle from '~/modules/login/components/LoginTitle.vue';
import CreateAccountTitle from '~/modules/login/components/CreateAccountTitle.vue';

export default {
  components: {
    GetStartedLayout,
    Main,
    LoginTitle,
    CreateAccountTitle,
  },
};
</script>