<template>
  <div class="relative" @mouseleave="handleMouseLeave">
    <slot name="emit" :open="open" :onToggle="() => handleToggle()" />
    <transition name="k-dropdown">
      <div v-if="open">
        <slot
          name="subscribe"
          :open="open"
          :onToggle="() => handleToggle()"
          :onOpen="() => handleOpen()"
          :onClose="() => handleClose()"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleOpen() {
      this.open = true;
    },
    handleClose() {
      this.open = false;
    },
    handleToggle() {
      this.open = !this.open;
    },
    handleMouseLeave() {
      setTimeout(() => {
        this.open = false;
      },1000)
    }
  },
});
</script>

<style lang="scss" scoped>
.k-dropdown {
  &-enter-active,
  &-leave-active {
    transition: 0.3s;
  }
  &-enter,&-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }
}
</style>