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
      default: "h3",
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
        'base': "text-base",
        'medium': "text-lg md:text-xl",
        'large': "text-2xl",
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
      return this.as || "h3";
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
      if(this.weight === 'normal') return ''
      if(this.weight === 'medium') return 'font-medium'
      if(this.weight === 'bold') return 'font-bold'
      if(this.weight === 'semibold') return 'font-semibold'
      return ''
    }
  },
};
</script>