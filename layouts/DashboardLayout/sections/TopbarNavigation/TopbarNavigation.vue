<template>
    <Topbar auto-hide auto-content class="hidden md:block">
      <TextTitle v-if="title" class="sm:truncate sm:w-60">{{ title }}</TextTitle>
      <BannerScheduleAvailability class="ml-14" />
      <UserDropdownProfile class="ml-auto" />
    </Topbar>
</template>

<script lang="ts">
import Vue from "vue";
import Topbar from "~/shared/ui/components/Layouts/Dashboard/Topbar.vue";
import TextTitle from "~/shared/ui/components/Typography/TextTitle.vue";
import BannerScheduleAvailability from "~/shared/modules/banners/components/BannerScheduleAvailability.vue";
import UserDropdownProfile from "../UserDropdownProfile/UserDropdownProfile.vue";

export default Vue.extend({
  components: {
    Topbar,
    UserDropdownProfile,
    TextTitle,
    BannerScheduleAvailability,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>