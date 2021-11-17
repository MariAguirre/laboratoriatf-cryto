<template>
  <DashboardLayout title="Cambios">
    <section class="relative flex justify-around items-center h-full">
      <Main />
    </section>
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
