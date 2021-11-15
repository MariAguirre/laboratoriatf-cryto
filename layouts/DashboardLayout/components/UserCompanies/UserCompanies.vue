<template>
  <div :class="[hoverable ? '' : 'flex gap-4 flex-col']">
    <UserDropdownItem text="Perfil empresa 1" icon="company" :hoverable="hoverable" />
    <UserDropdownItem text="Nuevo perfil empresa" icon="create" :hoverable="hoverable"  />
  </div>
</template>

<script>
import UserDropdownItem from '../UserDropdownItem/UserDropdownItem.vue'
export default {
  components: { UserDropdownItem },
  props: {
    hoverable: {
      type: Boolean,
      default: true,
    },
  }
}
</script>