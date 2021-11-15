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
      default: "normal",
    },
    underline: {
      type: Boolean,
      default: false,
    },
    as: {
      type: String,
      default: "p",
    },
    fontSize: {
      type: String,
      default: 'small',
    },
    alignment: {
      type: String,
      default: "left",
    },
  },
  computed: {
    getFontSize() {
      return {
        'ultra-small': "text-xs",
        'small': "text-sm",
        'base': "text-base",
      }[this.fontSize || "base"];
    },
    getTextAlignment() {
      return {
        left: "",
        right: "text-right",
        center: "text-center",
      }[this.alignment || "left"];
    },
    getTag() {
      if (this.as === "p") {
        if (this.fontSize === 'ultra-small') return "span";
        return this.as || "p";
      }
      return this.as;
    },
    getTextVariant() {
      return {
        'normal': "text-kambista-blue",
        'neutral': "text-gray-500",
        'neutral-medium': "text-gray-700",
      }[this.variant] || "";
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