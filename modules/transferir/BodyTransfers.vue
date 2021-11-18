<template>
  <div class="flex flex-col justify-center items-center bg-white">
    <img
      class="mt-2 mb-2"
      src="@/assets/images/navigation/Group7084.svg"
      alt=""
    />
    <TextTitle class="flex">
      <h1 class="mb-6 font-bold text-2xl">Transfiere a Kambista</h1>
    </TextTitle>

    <p for="first-name" class="text-justify text-base">
      Transfiere desde tu banco y guarda el
      <span class="underline">número de operación</span> para el siguiente paso.
    </p>

    <div class=" w-306 md:w-719 mt-4">
      <div class="flex justify-between">
        <div class="ml-8">
          <p class="font-bold">Monto a tranferir</p>
        </div>
        <div class="mr-8 flex justify-between">
          <p class="font-bold flex justify-between">
            <span>{{ montoOrigin }}</span>
            <span class="ml-1">{{ currencyOrigin }}</span>
          </p>
          <img class="ml-5" src="@/assets/images/common/clipboard.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-between">
        <div class="ml-8">
          <p class="mt-4 font-bold">
            Nuemero de cuenta <span>{{ name }}</span>
          </p>
        </div>
        <div class="mr-8 flex justify-between">
          <p class="mt-4 font-bold">
            <span>{{ number }}</span>
          </p>
          <img
            class="ml-5 mt-4"
            src="@/assets/images/common/clipboard.svg"
            alt=""
          />
        </div>
      </div>
      <div class="hidden sm:block">
        <div class="flex justify-between">
          <div class="ml-8">
            <p class="mt-4 font-bold">RUC Kambista</p>
          </div>
          <div class="mr-8 flex justify-between">
            <p class="mt-4 font-bold">20601708141</p>
            <img
              class="ml-5 mt-4"
              src="@/assets/images/common/clipboard.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextTitle from "@/shared/ui/components/Typography/TextTitle.vue";

export default {
  components: {
    TextTitle
  },
  props: {
    montoOrigin: {
      type: String,
      default: ""
    },
    data3: {
      type: Object,
      default() {}
    },
    currencyOrigin: {
      type: String,
      default: ""
    },
    number: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods: {}
};
</script>
