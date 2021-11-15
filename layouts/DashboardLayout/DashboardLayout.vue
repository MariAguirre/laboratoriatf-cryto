<template>
  <RootContent>
    <SidebarNavigation/>  
    <MainContent>
      <TopbarNavigation :title="title" />
      <MainContentBody>
        <slot />
      </MainContentBody>
    </MainContent>
  </RootContent>
</template>

<script>
import MainContent from "~/shared/ui/components/Layouts/Dashboard/MainContent.vue";
import MainContentBody from "~/shared/ui/components/Layouts/Dashboard/MainContentBody.vue";
import RootContent from "~/shared/ui/components/Layouts/Dashboard/RootContent.vue";
import SidebarNavigation from "./sections/SidebarNavigation/SidebarNavigation.vue";
import TopbarNavigation from "./sections/TopbarNavigation/TopbarNavigation.vue";

export default {
  components: {
    RootContent,
    MainContent,
    MainContentBody,
    SidebarNavigation,
    TopbarNavigation,
  },
  props: {
    title:{
      type: String,
      default: ""
    }
  }
}
</script>