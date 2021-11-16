<template>
  <div
    class="rounded-xl bg-white p-1"
    :class="[getShadowStyles, border ? 'border' : '']"
  >
  <template v-if="text">{{ text }}</template>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
      required: true
    },
    shadow: {
      type: String,
      default: "base",
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getShadowStyles() {
      return (
        {
          base: "shadow",
          small: "shadow-sm",
          medium: "shadow-md",
          large: "shadow-xl",
          inherit: "",
        }[this.shadow] || ""
      );
    },
  },
};
</script>