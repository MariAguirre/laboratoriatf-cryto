<template>
  <a 
    class="flex items-center gap-2 rounded-md py-4 px-1 md:px-3 transition" 
    :class="[isActive ? 'bg-kambista-2' : 'text-gray-500']"
    :title="text"
    :href="to"
    @click="handleNavigate"
    >
    <SidebarItemIcon :icon="icon" />
    <span class="text-sm xl:text-base font-medium">
      {{ text }}
    </span>
  </a>
</template>

<script>
import SidebarItemIcon from './SidebarItemIcon.vue';
export default {
  components: { SidebarItemIcon },
  props: {
    text: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    redirect: {
      type: Boolean,
      default : false
    }
  },
  computed: {
    isHTTP() {
      const res = this.to.match(/http(s)?/g);
      return res !== null;
    },
    isActive() {
      return this.$nuxt.$route.path === this.to;
    },
  },
  methods: {
    handleNavigate(e) {
      if(this.redirect) {
        if(this.isHTTP) {
          window.location.href = this.to;
        } 
        else{
          this.$kambista.redirect(this.to);
        }
      }
      else {
        e.preventDefault();
        this.$emit('onPressed');
        this.$router.push(this.to);
      }
    }
  }
};
</script>