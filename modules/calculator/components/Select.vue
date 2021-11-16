<template>
  <select
    class="p-6 form-select outline-none hover:bg-gray-100 hover:text-kambista-blue truncate sm:cursor-pointer bg-kambista-blue text-white"
    @change="onChange($event)"
  >
    <option v-for="(option, key) in options" :key="key" class="border-none">{{
      option.name
    }}</option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      isOpen: false,
      onChange(e) {
        this.$emit("send", e.target.value);
      }
    };
  },
  methods: {
    onCloseOptions() {
      this.isOpen = false;
    }
  }
};
</script>
