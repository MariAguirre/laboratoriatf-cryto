
<template>
  <label
    class="inline-flex items-start space-x-2 text-gray-700"
    :class="customFontSize"
  >
    <span class="relative cursor-pointer">
      <input
        :value="value"
        :checked="checked"
        type="checkbox"
        class="transition duration-500 appearance-none border rounded checked:bg-kambista-blue checked:border-kambista-blue focus:outline-none"
        :class="customSize"
        @change="updateInput"
      />
      <Check
        class="absolute top-0 bottom-0 left-0 right-0 p-0.5 text-white stroke-2"
        :class="customSize"
        :size="15"
      />
    </span>
    <span><slot></slot></span>
  </label>
</template>
<script>
import Check from "vue-material-design-icons/Check.vue"
export default {
  name: "KCheckbox",
  components:{
    Check
  },
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    trueValue: {
      type: [Boolean, String],
      default: true
    },
    falseValue: {
      type: [Boolean, String],
      default: false
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
    customSize() {
      return {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }[this.size];
    },
    customFontSize() {
      return {
        sm: "text-xs",
        lg: "text-base"
      }[this.size]
    },
    checked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    },
  },
  methods: {
    updateInput(event) {
      let checked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (checked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', checked ? this.trueValue : this.falseValue)
      }
    }
  }
};
</script>
