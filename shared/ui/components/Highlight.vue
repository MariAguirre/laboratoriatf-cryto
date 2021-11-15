<template>
  <div
    class="rounded-lg p-3"
    :class="[showIcon ? 'flex' : '',getVariantStyles]"
  > 
    <div v-if="showIcon" class="mr-2 flex-shrink">
      <component :is="getIconComponent" :class="getVariantStyles" :size="26"/>
    </div>
    <div>
      <div v-if="title" class="font-semibold mb-1">{{title}}</div>
      <slot></slot>
    </div>
    <div v-if="closeable" class="ml-2 flex-shrink">
      <Close :size="18" @click="$emit('onClose')"/>
    </div>
  </div>
</template>

<script>
import Info from 'vue-material-design-icons/InformationOutline.vue'
import Close from "vue-material-design-icons/Close.vue"
import Help from 'vue-material-design-icons/HelpCircleOutline.vue'
import Alert from 'vue-material-design-icons/AlertCircleOutline.vue'

export default {
  components:{
    Info,
    Close,
    Help,
    Alert
  },
  props: {
    showIcon : {
      type: Boolean,
      default: true,
    },
    variant:{
      type: String,
      default : "info"
    },
    title:{
      type: String,
      default : ""
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    icon : {
      type: String,
      default : "info"
    },
  },
  computed: {
    getVariantStyles() {
      return {
        info : 'bg-kambista-11 text-blue-500',
        error: 'bg-kambista-12 text-red-500',
        success: 'bg-green-50 text-green-600',
        light : 'shadow-sm bg-white'
      }[this.variant || 'light'];
    },
    getIconComponent() {
      return {
        info : 'Info',
        help : 'Help',
        alert : 'Alert',
      }[this.icon || 'info']
    }
  }
};
</script>