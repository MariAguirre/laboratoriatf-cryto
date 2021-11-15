<template>
  <client-only>
    <MountingPortal mount-to="body" append>
      <template v-if="!preserveModal">
        <transition name="drawer-transition" @enter="handleEnter" @before-leave="handleLeave" @leave="handleLeaving">
          <div v-if="open" class="drawer">
            <transition name="drawer-content-transition" appear>
              <div v-if="showContent" ref="drawerContent" class="drawer-content scrollbar-hidden relative" role="dialog">
                <div 
                v-if="showUnderlineDrawer"
                class="rounded-md w-10 mx-auto h-1 bg-gray-200 absolute top-2 inset-x-0 visible sm:invisible" 
                />
                <header class="relative">
                  <ModalCloseButton :closeable="closeable" @onClose="handleCloseModal" />
                  <slot name="header">
                    <div v-if="title" class="pt-2 mb-7">
                      <TextSubtitle as="h2" :text="title" alignment="center" />
                    </div>
                  </slot>
                </header>
                <TextParagraph 
                v-if="message" 
                variant="neutral" 
                :text="message" 
                :alignment="messageAlignment"
                weight="semibold" />
                <slot></slot>
              </div>
            </transition>
            <span class="modal-backdrop" @click="handleCloseByBackdrop"></span>
          </div>
        </transition>
      </template>
      <template v-if="preserveModal">
        <transition name="modal-transition" @enter="handleEnter" @before-leave="handleLeave" @leave="handleLeaving">
          <div v-if="open" class="modal">
            <transition name="modal-content-transition" appear>
              <div v-if="showContent" ref="modalContent" class="modal-content" role="dialog">
                <header class="relative">
                  <ModalCloseButton :closeable="closeable" @onClose="handleCloseModal" />
                  <slot name="header">
                    <div v-if="title" class="pt-2 mb-7">
                      <TextSubtitle as="h2" :text="title" alignment="center" />
                    </div>
                  </slot>
                </header>
                <TextParagraph 
                v-if="message" 
                variant="neutral" 
                :text="message"
                :alignment="messageAlignment"
                weight="semibold" />
                <slot></slot>
              </div>
            </transition>
            <span class="modal-backdrop" @click="handleCloseByBackdrop"></span>
          </div>
        </transition>
      </template>
    </MountingPortal>
  </client-only>
</template>

<script>
import { MountingPortal } from "portal-vue";
import ModalCloseButton from './ModalCloseButton.vue';
import TextSubtitle from '../Typography/TextSubtitle.vue';
import TextParagraph from '../Typography/TextParagraph.vue';

export default {
  name: "KModal",
  components: {
    MountingPortal,
    ModalCloseButton,
    TextSubtitle,
    TextParagraph,
  },
  model: {
    prop: "open",
    event: "input",
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "base"
    },
    preserveModal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    closeable: {
      type: Boolean,
      default: false
    },
    closeableByBackdrop: {
      type: Boolean,
      default: false
    },
    messageAlignment: {
      type: String,
      default: "left"
    },
    showUnderlineDrawer : {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showContent: this.open,
    }
  },
  methods: {
    handleCloseByBackdrop() {
      if (this.closeableByBackdrop) {
        this.handleCloseModal();
      }
    },
    handleCloseModal() {
      this.$emit('input', false);
    },
    handleEnter() {
      this.showContent = true;
    },
    handleLeave() {
      this.showContent = false;
    },
    handleLeaving() {
      if(window) {
        if(this.preserveModal) {
          const content = this.$refs.modalContent;
          content.style.transition = 'transform .2s';
          content.style.transform = 'scale(.8)';
        }
        else {
          const drawerContent = this.$refs.drawerContent;
          drawerContent.style.transition = 'transform .2s';
          drawerContent.style.transform = 'translateY(100%)';
        }
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.open ? "overflow-y-hidden" : ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.modal {
  @apply fixed z-50 inset-6 sm:inset-0 flex items-center justify-center;
}

.modal-content {
  @apply rounded-xl bg-white z-50 w-full max-w-sm md:max-w-lg max-h-full overflow-y-auto p-6 sm:p-8;
}


.drawer {
  @apply fixed z-50 inset-0 sm:inset-6 flex items-center justify-center;
}

.drawer-content {
  @apply rounded-t-xl sm:rounded-xl bg-white z-50 w-full mt-auto sm:mt-0 sm:max-w-md md:max-w-lg sm:max-h-full overflow-y-auto p-6 sm:p-8;
  @media screen and (max-width: 640px) {
    max-height: 85%;
  }
}

.modal-backdrop {
  @apply fixed inset-0 bg-kambista-blue opacity-70;
}

.drawer-transition {
  &-enter-active,
  &-leave-active {
    transition: 0.3s;
  }
  &-enter,&-leave-to {
    opacity: 0;
  }
}

.drawer-content-transition {
  &-enter-active,
  &-leave-active {
    transition: 0.2s;
  }
  &-enter,
  &-leave-to {
    transform: translateY(20px);
    @media (max-width:600px) {
      transform:translateY(100%);
    }
  }
}

.modal-transition {
  &-enter-active,
  &-leave-active {
    transition: 0.3s;
  }
  &-enter, &-leave-to {
    opacity: 0;
  }
}

.modal-content-transition {
  &-enter-active,
  &-leave-active {
    transition: 0.2s;
  }
  &-enter,
  &-leave-to {
    transform: scale(.8);
  }
}
</style>
