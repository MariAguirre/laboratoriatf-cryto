<template>
  <DashboardLayout title="Crypto">
    <section
      class="relative flex justify-center items-center mt-8 sm:h-full sm:mt-0 "
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
    ...mapState(["transaction", "quote"])
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
