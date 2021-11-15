<template>
  <div class="flex flex-col gap-2 items-center mt-8">
    <slot v-if="$slots.default" />
    <template v-else>
      <template v-if="!hideOk">
        <slot v-if="$slots.ok" name="ok" />
        <Button
          v-else
          :loading="loading"
          variant="secondary"
          block
          :text="textOk"
          @click.native="$emit('onOk')"
        />
      </template>
      <template v-if="!hideOk">
        <slot v-if="$slots.cancel" name="cancel" />
        <BaseText
          v-else
          :text="textCancel"
          underline
          variant="inherit"
          class="text-gray-400"
          weight="bold"
          @click.native="$emit('onCancel')"
        />
      </template>
    </template>
  </div>
</template>

<script>
import Button from "../Button/Button.vue";
import BaseText from "../Typography/BaseText.vue";
export default {
  components: {
    Button,
    BaseText
  },
  props: {
    textCancel: {
      type: String,
      default: "Cancelar"
    },
    textOk: {
      type: String,
      default: "continuar"
    },
    loading: {
      type: Boolean,
      default: false
    },
    hideOk: {
      type: Boolean,
      default: false
    },
    hideCancel: {
      type: Boolean,
      default: false
    }
  }
};
</script>
