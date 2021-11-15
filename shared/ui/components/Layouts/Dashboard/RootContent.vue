<template>
  <div class="root">
    <slot />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.root {
  @apply md:h-screen md:flex md:overflow-hidden w-full;
}
</style>