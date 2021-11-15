<template>
  <div class="block w-full md:hidden">
    <div class="flex px-3 justify-between items-center">
      <LogoV2 />
      <div @click="handleOpenSidebar">
        <FormatAlignRight :size="22" />
      </div>
    </div>
    <transition name="k-sidebar">
      <div v-if="openSidebar" class="sidebar-wrapper">
        <div class="flex px-3 items-center border-b border-kambista-2">
          <LogoV2 />
          <div class="sidebar-wrapper__close-button" @click="handleCloseSidebar">
            <Close />
          </div>
        </div>
        <div class="px-3">
          <div class="border-b my-3 pb-3 flex items-center">
            <CurrentProfileInApplication />
            <span class="ml-auto">
              <ChevronRight class="block transform transition" :class="showProfileMenu ? 'rotate-90' : ''" @click="handleToggleProfileMenu" />
            </span>
          </div>
          <UserCompanies v-if="showProfileMenu" :hoverable="false" />
          <SidebarNavigationListItems v-else @onPressed="handleCloseSidebar">
            <template #banners><slot name="banners" /></template>
          </SidebarNavigationListItems>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FormatAlignRight from "vue-material-design-icons/FormatAlignRight.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import Close from "vue-material-design-icons/Close.vue";
import SidebarNavigationListItems from "../SidebarNavigationListItems.vue";
import LogoV2 from "~/shared/ui/components/Logo/LogoV2.vue";
import CurrentProfileInApplication from "~/layouts/DashboardLayout/components/CurrentProfileInApplication/CurrentProfileInApplication.vue";
import UserCompanies from "~/layouts/DashboardLayout/components/UserCompanies/UserCompanies.vue";

export default {
  components: {
    FormatAlignRight,
    Close,
    SidebarNavigationListItems,
    LogoV2,
    CurrentProfileInApplication,
    ChevronRight,
    UserCompanies,
  },
  data() {
    return {
      openSidebar: false,
      showProfileMenu : false,
    };
  },
  methods: {
    handleCloseSidebar() {
      this.openSidebar = false;
    },
    handleOpenSidebar() {
      this.openSidebar = true;
    },
    handleToggleProfileMenu() {
      this.showProfileMenu = !this.showProfileMenu;
    }
  },
};
</script>
<style lang="scss" scoped>
.sidebar-wrapper {
  @apply fixed z-50 h-full w-full sm:w-2/3 md:w-1/2 bg-white right-0 top-0 shadow-lg overflow-y-auto;
}

.sidebar-wrapper__close-button {
  @apply w-9 h-9 ml-auto flex items-center justify-center hover:bg-gray-100 cursor-pointer rounded-full;
}
.k-sidebar {
  &-enter-active,
  &-leave-active {
    transition: 0.3s;
  }
  &-enter,
  &-leave-to {
    transform: translateX(100%);
  }
}
</style>