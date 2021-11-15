<template>
  <div class="bg-kambista-blue">
    <div
      class="flex items-center justify-between container py-3.5 xl:py-4 px-6"
    >
      <Logo
        class="w-28 sm:w-32 2xl:w-36 cursor-pointer"
        @click.native="goToHome"
      />
      <div class="flex space-x-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/shared/ui/components/Logo/LogoKambista";
export default {
  name: "AppBar",
  components: {
    Logo
  },
  methods: {
    goToHome() {
      this.$kambista.redirect("app");
    }
  }
};
</script>
