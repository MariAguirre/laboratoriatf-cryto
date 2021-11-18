<template>
  <DashboardLayout title="Cambios">
    <section
      class="relative flex justify-center items-center h-screen sm:h-full "
    >
      <Main />
    </section>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "~/layouts/DashboardLayout/DashboardLayout.vue";
import Main from "@/modules/calculator/Main.vue";
import { mapState } from "vuex";

export default {
  components: {
    DashboardLayout,
    Main
  },
  computed: {
    ...mapState(["transaction", "quote", "check"])
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$router.push({ path: "/" });
    } else {
      this.$router.push({ path: "login" });
    }
  }
};
</script>
