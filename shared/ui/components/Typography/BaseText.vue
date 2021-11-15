<template>
  <component
    :is="getTag"
    :class="[
      getWeight,
      underline ? 'underline cursor-pointer' : '',
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
      type: Number,
      default: 50,
    },
    alignment: {
      type: String,
      default: "left",
    },
  },
  computed: {
    getFontSize() {
      return {
        20: "text-xs",
        50: "text-sm",
        100: "text-base",
        200: "text-lg md:text-xl",
        300: "text-2xl",
      }[this.fontSize || 100];
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
        if (this.fontSize === 20) return "span";
        if (this.fontSize === 200) return "h3";
        if (this.fontSize === 300) return "h1";
        return this.as || "p";
      }
      return this.as;
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