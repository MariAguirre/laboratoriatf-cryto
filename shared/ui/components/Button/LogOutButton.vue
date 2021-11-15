<template>
  <span
    class="font-semibold flex items-center cursor-pointer"
    :class="variantStyle"
    @click="handleLogOut"
  >
    <LogOutIcon class="h-5 w-5" />
    <span class="hidden sm:block ml-2">Cerrar Sesión</span>
  </span>
</template>
<script>
export default {
  name: "LogOutButton",
  props: {
    variant: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    variantStyle() {
      return {
        primary: "text-white",
        secondary: "text-gray-300"
      }[this.variant];
    }
  },
  methods: {
    async handleLogOut() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
