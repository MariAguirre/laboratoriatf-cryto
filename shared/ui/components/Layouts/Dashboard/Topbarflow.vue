<template>
  <header
    
    :class="[getWrapperStyle, getAutoHideStyle, getAutoContentStyle]"
    style="z-index: 10"
  >
    <div
      class="flex items-center box-border h-14"
      :class="[getContentBorderStyle]"
    >
    <div class="flex">
    <div>
    <LogoV3 v-if="showLogo" class="w-"/>
     </div>  
       
       
      </div>
    </div>
      <slot />
    
  </header>
</template>

<script>
import LogoV3 from "../../Logo/LogoV3.vue";
export default {
  components: { LogoV3 },
  props: {
    variant: {
      type: String,
      default: "default",
    },
    showLogo: {
      type: Boolean,
      default: false,
    },
    showNav: {
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
