<template>
  <div v-if="isAvailable" class="flex">
    <img :src="getPath" width="24"/>
  </div>
  <component :is="iconComponent" v-else />
</template>

<script>
import Help from "vue-material-design-icons/Help.vue";
import LogoutVariant from "vue-material-design-icons/LogoutVariant.vue";
import ExchangeIcon from "@/assets/images/navigation/exchange.svg"

const Icons = {
  help: Help,
  logout: LogoutVariant
};
export default {
  components:{
    ExchangeIcon
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconComponent() {
      return Icons[this.icon];
    },
    isAvailable() {
      return !['help','logout'].includes(this.icon)
    },
    getPath() {
      return {
        exchange: require('~/assets/images/navigation/exchange.svg'),
        historial: require('~/assets/images/navigation/historial.svg'),
        win: require('~/assets/images/navigation/win.svg'),
        benefits: require('~/assets/images/navigation/benefits.svg'),
        bank: require('~/assets/images/navigation/bank-accounts.svg'),
      }[this.icon] || ''
    }
  },
}
</script>