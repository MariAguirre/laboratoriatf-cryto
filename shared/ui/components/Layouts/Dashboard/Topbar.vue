<template>
  <header
    class="md:sticky md:top-0"
    :class="[getWrapperStyle, getAutoHideStyle, getAutoContentStyle]"
    style="z-index: 10"
  >
    <div
      class="flex items-center box-border h-14"
      :class="[getContentBorderStyle]"
    >
      <LogoV2 v-if="showLogo" />
      <slot /> 

    </div>
  </header>
</template>

<script>
import LogoV2 from "../../Logo/LogoV2.vue";
export default {
  components: { LogoV2 },
  props: {
    variant: {
      type: String,
      default: "default",
    },
    showLogo: {
      type: Boolean,
      default: false,
    },
    autoContent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getWrapperStyle() {
      return {
        default: "border-gray-400 bg-kambista-6",
        light: "bg-white border-b",
      }[this.variant || "default"];
    },
    getAutoHideStyle() {
      return this.autoHide ? "hidden" : "";
    },
    getContentBorderStyle() {
      return this.variant === "default" ? "border-b" : "";
    },
    getAutoContentStyle() {
      return this.autoContent ? "px-4 lg:px-7" : "";
    },
  },
};
</script>