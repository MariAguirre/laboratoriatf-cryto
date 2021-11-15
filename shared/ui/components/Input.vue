<template>
  <div>
    <label
      v-if="label"
      :class="[labelInvalid]"
      class="mb-2 block text-gray-600"
    >
      {{ label }}
      <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-500">
        {{ inlineHelper }}
      </span>
    </label>
    <div class="relative">
      <div
        v-if="$slots['prefix-icon']"
        class="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-gray-600 dark:text-gray-300"
      >
      <slot name="prefix-icon" />
      </div>
      <input
        :id="elementId"
        ref="input"
        :value="currentValue"
        :type="customType || type"
        class="input w-full border rounded-lg"
        :class="[
          'appearance-none',
          stateBorder,
          customSize,
          { 'pl-10': $slots['prefix-icon'] },
          { 'pr-10': sufix }
        ]"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
      />
      <div v-if="$slots['sufix-icon']" class="w-8 h-8 p-2 mr-1.5 absolute my-auto inset-y-0 right-0 z-10 text-gray-600 dark:text-gray-300">
        <slot name="sufix-icon" />
      </div>
      <component
        :is="sufix"
        v-else
        :size="15"
        class="w-8 h-8 p-2 mr-1.5 absolute my-auto inset-y-0 right-0 z-10 text-gray-600 dark:text-gray-300"
        :class="actionableSufix"
        @click="toggleType"
      />
    </div>
    <div
      v-if="helper"
      :class="[labelInvalid]"
      class="text-xs text-gray-500 mt-2"
    >
      {{ helper }}
    </div>
    <div
      v-if="!validInput && Object.keys(errorMessage).length > 0"
      :class="[labelInvalid]"
      class="text-xs text-gray-500 mt-2"
    >
      {{ errorMessage.value }}
    </div>
  </div>
</template>
<script>
import { debounce } from "lodash";
import { generateErrors } from '../utils/validators';
import Eye from "vue-material-design-icons/Eye.vue"
import EyeOff from "vue-material-design-icons/EyeOff.vue"

export default {
  name: "KInput",
  components: {
    Eye,
    EyeOff
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    elementId: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    helper: {
      type: String,
      default: ""
    },
    inlineHelper: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md"
    },
    validators: {
      type: Array,
      default: () => []
    },
    number: {
      type: Boolean,
      default: false
    },
    isValid: {
      type: Boolean,
      default: true
    },
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      currentValue: this.value,
      validInput: this.isValid,
      customType: "",
      errorMessage: this.error
    };
  },
  computed: {
    stateBorder() {
      return !this.validInput || this.helper ? "border-kambista-4" : "";
    },
    labelInvalid() {
      return !this.validInput || this.helper ? "text-kambista-4" : "";
    },
    customSize() {
      return {
        sm: "py-1 px-2",
        md: "py-2 px-3",
        lg: "py-3 px-4"
      }[this.size];
    },
    sufix() {
      if (this.type === "password") {
        return !this.customType ? "Eye" : "EyeOff";
      }
      return this.$slots['sufix-icon'];
    },
    actionableSufix() {
      return this.type === "password"
        ? "cursor-pointer hover:bg-gray-100 rounded-full"
        : "";
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  created() {
    this.getCurrentValidation = debounce(this.getCurrentValidation, 1100);
    if (this.currentValue && this.currentValue !== "") {
      this.getCurrentValidation(this.currentValue, this.elementId);
    }
  },
  methods: {
    toggleType() {
      if (this.type === "password") {
        !this.customType ? (this.customType = "text") : (this.customType = "");
      }
    },
    handleInput(event) {
      let { value, id } = event.target;
      if (this.number && value !== "")
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.getCurrentValidation(value, id);
      this.setCurrentValue(value);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
    // obtiene las validaciones
    getCurrentValidation(value, id) {
      const { errors, isValid } = generateErrors(
        { value },
        { value: this.validators }
      );
      this.errorMessage = errors;
      this.validInput = isValid;
      this.$emit("on-blur", value);
      this.$emit("is-valid", { validInput: this.validInput, id: id });
    }
  }
};
</script>
