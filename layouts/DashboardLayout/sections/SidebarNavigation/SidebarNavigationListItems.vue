<template>
  <div class="flex flex-col sm:mt-6">
    <SidebarItem
      text="Crypto"
      icon="exchange"
      to="/"
      @onPressed="$emit('onPressed')"
    />
    <SidebarItem
      class="disabled:cursor-not-allowed"
      text="Historial de operaciones"
      icon="historial"
      @onPressed="$emit('onPressed')"
    />
    <SidebarItem
      text="Cuentas bancarias"
      icon="bank"
      @onPressed="$emit('onPressed')"
    />
    <SidebarItem
      text="Recomienda y gana"
      icon="win"
      @onPressed="$emit('onPressed')"
    />
    <SidebarItem
      text="Beneficios"
      icon="benefits"
      @onPressed="$emit('onPressed')"
    />
    <slot name="banners"></slot>
    <SidebarItem
      class="border-t md:border-0 mt-5 pt-5 sm:mt-0 sm:pt-3"
      text="Ayuda"
      icon="help"
      @onPressed="$emit('onPressed')"
    />
    <SidebarItem
      class="flex"
      text="Cerrar sesión"
      icon="logout"
      @onPressed="logout"
    />
  </div>
</template>

<script>
import SidebarItem from "../../components/SidebarItem/SidebarItem.vue";

export default {
  components: { SidebarItem },
  methods: {
    logout() {
      localStorage.clear();
      window.location.href = "/login";
    }
  }
}
</script>