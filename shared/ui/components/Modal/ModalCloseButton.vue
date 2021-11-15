<template>
  <div v-if="closeable" class="modal-close-button" aria-label="Close" role="button" @click="$emit('onClose')">
    &times;
  </div>
</template>

<script>
export default {
  props: {
    closeable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-close-button {
  @apply border-2 rounded-full flex items-center justify-center ml-auto w-6 h-6 font-bold border-kambista-blue text-xl cursor-pointer absolute right-0;
}
</style>
