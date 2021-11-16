<template>
  <div>
    <select
      class="p-3 outline-none hover:bg-gray-100 truncate sm:cursor-pointer"
      @change="onChange($event)"
    >
      <option v-for="(option, key) in options" :key="key">{{
        option.name
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      onChange(e) {
        this.$emit("send", e.target.value);
      }
    };
  }
};
</script>
