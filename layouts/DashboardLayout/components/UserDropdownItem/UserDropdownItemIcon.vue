<template>
  <div v-if="isProfileIcon" class="flex w-8 h-8">
    <img v-if="isProfileIcon" :src="getSrc" />
  </div>
  <div v-else class="flex items-center justify-center" :class="getDecoration">
  <component :is="iconComponent" :size="decorative ? 17 : 24" />
  </div>
</template>

<script>
import LogoutVariant from "vue-material-design-icons/LogoutVariant.vue";
import Account from "vue-material-design-icons/Account.vue";

const Icons = {
  logout: LogoutVariant,
  account: Account,
};
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    decorative : {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    iconComponent() {
      return Icons[this.icon];
    },
    isProfileIcon() {
      return ['customer','company','create'].includes(this.icon)
    },
    getDecoration() {
      return this.decorative ? 'border-2 rounded-md border-kambista-7 flex-none w-8 h-8' : 'w-8 h-8'
    },
    getSrc() {
      return {
        create:  require('../../../../assets/images/v2/profile/new-profile-icon.svg'),
        company: require('../../../../assets/images/profile/company-icon.svg'),
        customer: require('../../../../assets/images/profile/person/person-icon.svg')
      }[this.icon] || ''
    }
  },
}
</script>