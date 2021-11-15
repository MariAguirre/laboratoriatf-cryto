<template>
  <div class="inset-6 sm:inset-0 flex items-center justify-center" :class="[autoContent ? '' : 'fixed z-40']">
    <div class="relative flex items-center justify-center z-40 h-28 w-28">
      <div
        :class="[
          variantStyle,
          'rounded-full w-24 h-24 flex items-center justify-center'
        ]"
      >
        <LogoKambista class="z-50 w-6" compact />
      </div>
      <span
        :class="[variantStyle, 'absolute inset-0 rounded-full animate-wave']"
      >
      </span>
      <span
        :class="[
          variantStyle,
          'absolute inset-0 rounded-full animate-wave-shadow'
        ]"
      >
      </span>
    </div>
    <span :class="[variantOpacity, 'bg-kambista-blue fixed inset-0']"></span>
  </div>
</template>
<script>
import LogoKambista from '../Logo/LogoKambista.vue';
export default {
  name: "LoadingScreen",
  components: { LogoKambista },
  props: {
    variant: {
      type: String,
      default: "light"
    },
    autoContent: {
      type: Boolean,
      default: false, 
    }
  },
  computed: {
    variantStyle() {
      return {
        dark: "bg-kambista-blue",
        light: "bg-white"
      }[this.variant];
    },
    variantOpacity() {
      return {
        dark: "opacity-90",
        light: "opacity-5"
      }[this.variant];
    }
  }
};
</script>
