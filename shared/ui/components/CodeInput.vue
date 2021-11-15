<template>
  <div
    class="relative w-full"
    :class="{
      [className]: !!className
    }"
  >
    <span v-if="title" class="mb-4 block text-gray-400 dark:text-kambista-3">
      {{ title }}
    </span>
    <div class="code-input">
      <template v-for="(v, index) in values">
        <input
          :key="`${id}-${index}`"
          :ref="iRefs[index]"
          :type="type === 'number' ? 'tel' : type"
          :pattern="type === 'number' ? '[0-9]' : null"
          :autoFocus="autoFocus && index === autoFocusIndex"
          class="w-11 md:w-12 h-14 text-2xl text-center font-bold mb-3 mr-3 rounded-md text-gray-600"
          :disabled="disabled"
          :required="required"
          maxlength="1"
          :data-id="index"
          :value="v"
          @input="onValueChange"
          @focus="onFocus"
          @keydown="onKeyDown"
        />
      </template>
    </div>
  </div>
</template>

<script>
const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
export default {
  name: "KCodeInput",
  props: {
    type: {
      type: String,
      default: "number"
    },
    className: { type: String, default: "" },
    fields: {
      type: Number,
      default: 6
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    title: { type: String, default: "" },
    change: { type: Function, default: () => {} },
    complete: { type: Function, default: () => {} }
  },
  data() {
    const { fields, values } = this;
    let vals;
    let autoFocusIndex = 0;
    if (values && values.length) {
      vals = [];
      for (let i = 0; i < fields; i++) {
        vals.push(values[i] || "");
      }
      autoFocusIndex = values.length >= fields ? 0 : values.length;
    } else {
      vals = Array(fields).fill("");
    }
    this.iRefs = [];
    for (let i = 0; i < fields; i++) {
      this.iRefs.push(`input_${i}`);
    }
    this.id = +new Date();
    return { values: vals, autoFocusIndex };
  },
  methods: {
    onFocus(e) {
      e.target.select(e);
    },
    onValueChange(e) {
      const index = parseInt(e.target.dataset.id);
      const { type, fields } = this;
      if (type === "number") {
        e.target.value = e.target.value.replace(/[^\d]/gi, "");
      }
      if (
        e.target.value === "" ||
        (type === "number" && !e.target.validity.valid)
      ) {
        return;
      }
      let next;
      const value = e.target.value;
      let { values } = this;
      values = Object.assign([], values);
      if (value.length > 1) {
        let nextIndex = value.length + index - 1;
        if (nextIndex >= fields) {
          nextIndex = fields - 1;
        }
        next = this.iRefs[nextIndex];
        const split = value.split("");
        split.forEach((item, i) => {
          const cursor = index + i;
          if (cursor < fields) {
            values[cursor] = item;
          }
        });
        this.values = values;
      } else {
        next = this.iRefs[index + 1];
        values[index] = value;
        this.values = values;
      }
      if (next) {
        const element = this.$refs[next][0];
        element.focus();
        element.select();
      }
      this.triggerChange(values);
    },
    onKeyDown(e) {
      const index = parseInt(e.target.dataset.id);
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      const prev = this.iRefs[prevIndex];
      const next = this.iRefs[nextIndex];
      switch (e.keyCode) {
        case KEY_CODE.backspace: {
          e.preventDefault();
          const vals = [...this.values];
          if (this.values[index]) {
            vals[index] = "";
            this.values = vals;
            this.triggerChange(vals);
          } else if (prev) {
            vals[prevIndex] = "";
            this.$refs[prev][0].focus();
            this.values = vals;
            this.triggerChange(vals);
          }
          break;
        }
        case KEY_CODE.left:
          e.preventDefault();
          if (prev) {
            this.$refs[prev][0].focus();
          }
          break;
        case KEY_CODE.right:
          e.preventDefault();
          if (next) {
            this.$refs[next][0].focus();
          }
          break;
        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;
        default:
          break;
      }
    },
    triggerChange(values = this.values) {
      const { fields } = this;
      const val = values.join("");
      this.$emit("change", val);
      if (val.length >= fields) {
        this.$emit("complete", val);
      }
    }
  }
};
</script>
<style scoped>
.code-input > input {
  border: solid 2px rgba(156, 163, 175, 1);
  box-sizing: border-box;
  -webkit-appearance: initial;
}
.code-input > input:last-child {
  margin-right: 0;
}
.code-input > input:focus {
  outline: none;
  border: solid 2px #060f26;
  caret-color: #060f26;
}
@media (min-width: 380px) and (max-width: 640px) {
  .code-input > input {
    width: 14%;
    margin-right:0.5rem;
    height: 3.5rem;
  }
}
@media (max-width: 640px) {
  .code-input > input {
    width: 14%;
    margin-right:0.5rem;
    height: 3rem;
  }
}
</style>
