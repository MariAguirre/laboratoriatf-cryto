<template>
  <div class="cursor-pointer inline-block" @click="handleCopy">
    <img src="~/assets/images/common/clipboard.svg" class="block" />
  </div>
</template>
<script>
function formatValue(value) {
  let val = "";
  if (typeof value === "object") {
    val = JSON.stringify(value);
  } else {
    val = String(value);
  }
  return val;
}

export default {
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: ""
    }
  },
  methods: {
    handleCopy() {
      const value = formatValue(this.value);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.textContent = formatValue(value);
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    }
  }
};
</script>
