<template>
  <component
    :is="getTag"
    :class="[
      getWeight,
      underline ? 'underline sm:cursor-pointer' : '',
      getFontSize,
      getTextAlignment,
      getTextVariant,
    ]"
  >
    <template v-if="text">{{ text }}</template>
    <slot v-else></slot>
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: [String,Number],
      default: "",
    },
    variant: {
      type: String,
      default: "normal",
    },
    weight: {
      type: String,
      default: "bold",
    },
    underline: {
      type: Boolean,
      default: false,
    },
    as: {
      type: String,
      default: "h1",
    },
    fontSize: {
      type: String,
      default: 'medium',
    },
    alignment: {
      type: String,
      default: "left",
    },
  },
  computed: {
    getFontSize() {
      return {
        'base': "text-xl",
        'medium': "text-2xl",
        'large': "text-3xl",
        'ultra-large': "text-4xl",
      }[this.fontSize || 'base'];
    },
    getTextAlignment() {
      return {
        left: "",
        right: "text-right",
        center: "text-center",
      }[this.alignment || "left"];
    },
    getTag() {
      return this.as || "h1";
    },
    getTextVariant() {
      return {
        'normal': "text-kambista-blue",
        'neutral': "text-gray-500",
        'neutral-medium': "text-gray-700",
        'inherit': "",
      }[this.variant || "inherit"];
    },
    getWeight() {
      if(this.weight === 'medium') return 'font-medium'
      if(this.weight === 'bold') return 'font-bold'
      if(this.weight === 'semibold') return 'font-semibold'
      return ''
    }
  },
};
</script>
<style scoped>
.base-text {
  line-height: 19px;
  color: #060f26;
}
.base-text.normal {
  color: #060f26;
}
.base-text.neutral {
  color: gray;
}
</style>