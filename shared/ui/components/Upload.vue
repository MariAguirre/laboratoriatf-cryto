<template>
  <label class="inline-block">
    <input
      ref="inputFile"
      class="hidden"
      type="file"
      @change="handleUploadFile"
    >
    <div class="border rounded-lg px-4 py-3 flex items-center w-full sm:cursor-pointer">
      <span class="text-base text-gray-500 block pr-10">{{placeholder}}</span>
      <div class="ml-auto flex">
        <TrayArrowUp/>
      </div>
    </div>
  </label>
</template>

<script>
import TrayArrowUp from "vue-material-design-icons/TrayArrowUp.vue"
export default {
  components:{
    TrayArrowUp,
  },
  model:{
    prop: 'modelValue',
    event: 'update',
  },
  props : {
    modelValue : {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data(){
    return {
      uploadFile: {
        selected: false
      }
    }
  },
  watch: {
    modelValue(value){
      if (value.length === 0 || Object.keys(value).length === 0) {
        this.uploadFile.selected = false;
        this.$refs.inputFile.value.value = '';
      }
    }
  },
  methods: {
    handleUploadFile(e) {
      const files = e.target.files;
      this.$emit('onSelectFile',files);
      this.$emit('update',files);
    }
  }
}
</script>