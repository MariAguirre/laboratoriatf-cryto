<template>
   <div class="sidebar bg-white md:h-auto h-14 relative flex flex-col z-50 md:z-auto w-full md:w-auto  overflow-y-hidden md:overflow-y-auto scrollbar-normalize overflow-x-hidden">
      <slot/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.sidebar {
  @media screen and (min-width: 768px){
      width:292px;
  }
}
</style>