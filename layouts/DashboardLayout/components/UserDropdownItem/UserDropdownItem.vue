<template>
  <div 
  class="flex items-center" 
  :class="[getHoverStyles]">
    <router-link v-if="to !== ''" :to="to" class="flex items-center w-full">
      <div class="mr-2">
        <UserDropdownItemIcon :icon="icon" :decorative="decorative" />
      </div>
      <p class="text-gray-500 font-semibold">{{ text }}</p>
    </router-link>
    <template v-else>
      <div class="mr-2">
        <UserDropdownItemIcon :icon="icon" :decorative="decorative" />
      </div>
      <p class="text-gray-500 font-semibold">{{ text }}</p>
    </template>
  </div>
</template>

<script>
import UserDropdownItemIcon from "./UserDropdownItemIcon.vue";

export default {
  components: { UserDropdownItemIcon },
  props: {
    text: {
      type: String,
      default: "",
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    decorative: {
      type: Boolean,
      default: true,
    }
  },
  computed:{
    getHoverStyles() {
      return this.hoverable ? 'hover:bg-gray-100 px-2 py-2 cursor-pointer rounded-sm' : '';
    }
  }
}
</script>