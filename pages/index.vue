<template>
  <DashboardLayout title="Cambios">
    <Main />
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "~/layouts/DashboardLayout/DashboardLayout.vue";
import Main from "@/modules/calculator/Main.vue";

export default {
  components: {
    DashboardLayout,
    Main
  }
};
</script>
