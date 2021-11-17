<template>
  <div
    class="rounded-xl bg-white p-1"
    :class="[getShadowStyles, border ? 'border' : '']"
  >
  <div class="p-4">
     <div class="flex justify-between md:justify-between ">
        <p>Tú envías</p>
        <p class=

        "font-bold">{{baseData.mountOrigin}} {{baseData.currencyOrigin}}</p>
      </div>
      <div class="flex justify-between md:justify-between">
        <p class="py-4">Tú recibes</p>
        <p class="py-4 font-bold">{{baseData.mountDestiny}} {{baseData.currencyDestiny}}</p>
      </div>
      <hr class="bg-gray-900 w-72 border-solid-2 z-40 mt-2.5" />
      <div class="font-bold flex justify-between">
        <p class="py-4">1BTC = {{baseData.exchangeOne}} USD</p>
        <p class="py-4">1USD = {{baseData.exchangeTwo}} BTC</p>
      </div>
  </div>

    <slot></slot>
  </div>
</template>
<script>

export default {
  props: {
    text: {
      type: String,
      default: "",
      required: true
    },
    shadow: {
      type: String,
      default: "base",
    },
    border: {
      type: Boolean,
      default: false,
    },
    baseData:{
      type: Object,
    }
  },
 data(){
      return{
          user:[],
          currencyOrigin:''
      }
  },
  computed: {
    getShadowStyles() {
      return (
        {
          base: "shadow",
          small: "shadow-sm",
          medium: "shadow-md",
          large: "shadow-xl",
          inherit: "",
        }[this.shadow] || ""
      );
    },

  },




};
</script>