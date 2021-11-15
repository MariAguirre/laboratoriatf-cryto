<template>
  <button
    :class="[variantStyle, customSize,blockStyle]"
    class="button rounded-lg uppercase shadow-md flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="disabled || loading"
  >
    <LoadingIcon v-if="loading" icon="oval" class="w-4 h-4 mr-3" />
    {{loadingText || text }}
  </button>
</template>
<script>
import LoadingIcon from '../Loading/LoadingIcon.vue';

export default {
  name: "KButton",
  components: {
    LoadingIcon
  },
  props: {
    text: {
      type: String,
      default: "",
      required: true
    },
    loading: {
      type: [String, Boolean],
      default: null
    },
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "lg"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantStyle() {
      return {
        primary: "bg-kambista-green",
        secondary: "bg-kambista-blue text-white"
      }[this.variant];
    },
    customSize() {
      return {
        sm: "button--sm",
        lg: "button--lg"
      }[this.size];
    },
    blockStyle() {
      return this.block ? 'w-full' : '';
    },
    loadingText() {
      return (
        this.loading && typeof this.loading === "string" && this.loading.trim()
      );
    }
  }
};
</script>
