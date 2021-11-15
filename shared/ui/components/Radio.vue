<template>
  <label class="radio-wrapper" :class="[customSize, styleWrapperChecked,styleIsDisabled]">
    <input
      class="hidden radio-input"
      type="radio"
      :value="value"
      :checked="isChecked"
      :name="name"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
    />
    <span class="radio-checkmark" :class="[styleIsChecked]"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { default: "", type: [String, Number] },
    value: { type: [String, Number], default: undefined },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    },
    customSize() {
      return {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }[this.size];
    },
    styleIsDisabled() {
      return this.disabled ? 'opacity-70 pointer-events-none' : ''
    },
    styleIsChecked() {
      return this.isChecked ? 'bg-kambista-blue' : ''
    },
    styleWrapperChecked() {
      return this.isChecked ? 'border-kambista-blue' : 'border-kambista-10'
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  &-wrapper {
    @apply flex items-center justify-center border-2 rounded-full flex-none;
  }
  &-checkmark {
    @apply block rounded-full flex-none w-3 h-3;
  }
}
</style>