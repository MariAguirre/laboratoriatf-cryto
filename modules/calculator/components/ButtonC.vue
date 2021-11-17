<template>
  <button class="font-extrabold rounded-t-lg h-52 w-1/2 text-7">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
