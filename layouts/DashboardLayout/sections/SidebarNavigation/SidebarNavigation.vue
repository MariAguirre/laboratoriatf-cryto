<template>
  <Sidebar>
    <SidebarNavigationMobile/>
    <div class="hidden md:block">
      <LogoV2 />
      <SidebarNavigationListItems/>
    </div>
  </Sidebar>
</template>

<script>
import Sidebar from "~/shared/ui/components/Layouts/Dashboard/Sidebar.vue";
import SidebarNavigationListItems from "./SidebarNavigationListItems.vue";
import LogoV2 from "~/shared/ui/components/Logo/LogoV2.vue";
import SidebarNavigationMobile from "./mobile/SidebarNavigationMobile.vue";

export default {
  components: {
    Sidebar,
    LogoV2,
    SidebarNavigationListItems,
    SidebarNavigationMobile,
  }
};
</script>