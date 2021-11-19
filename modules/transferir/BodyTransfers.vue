<template>
  <div class="flex flex-col justify-center items-center bg-white mr-4 ml-4">
    <img
      class="mt-4 mb-2"
      src="@/assets/images/navigation/Group7084.svg"
      alt=""
    />
    <TextTitle class="flex">
      <h1 class="hidden sm:block mb-6 font-bold text-2xl">Transfiere a Kambista</h1>
      <h1 class="block sm:hidden mb-6 font-normal text-xl ">Transfiere a Kambista</h1>
    </TextTitle>

    <p for="first-name" class="text-justify text-base hidden sm:block " >
      Transfiere desde tu banco y guarda el
      <span class="underline">Número de operación</span> para el siguiente paso.
    </p>
    <p for="first-name" class="text-justify text-sm block sm:hidden">
      Transfiere desde tu banco y guarda el
      <span class="underline">Número de operación</span> para el siguiente paso.
    </p>

    <div class=" w-306 md:w-719 mt-4 hidden sm:block">
      <div class="flex justify-between">
        <div class="ml-8">
          <p class="font-bold">Monto a tranferir</p>
        </div>
        <div class="mr-8 flex justify-between">
          <p class="font-bold flex justify-between">
            <span>{{ montoOrigin }}</span>
            <span class="ml-1">{{ currencyOrigin }}</span>
          </p>
          <button @click="capture">
            <img
              class="ml-5"
              src="@/assets/images/common/clipboard.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="ml-8">
          <p class="mt-4 font-bold">
            Número de cuenta <span>{{ name }}</span>
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
      <div class="block sm:hidden">
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

    <div class="block sm:hidden">
      <div class="my-2">
          <p class="font-bold text-left text-sm -ml-8">Monto a tranferir</p>
        </div>
        <div class="mr-8 flex justify-between">
          <p class="font-bold flex justify-between">
            <span class="flex justify-center text-xl ml-1">{{ montoOrigin }}</span>
            <span class="flex justify-center text-xl ml-1">{{ currencyOrigin }}</span>
          </p>
          <button @click="capture">
            <img
              class="ml-2"
              src="@/assets/images/common/clipboard.svg"
              alt=""
            />
          </button>
        </div>
        
        <div class="">
          <p class="font-bold text-left text-sm -ml-8">
            Número de cuenta <span>{{ name }}</span>
          </p>
        </div>
        <div class="flex justify-between">
          <p class="font-bold">
            <span class="flex justify-center text-xl ml-1">{{ number }}</span>
          </p>
          <img
            class=""
            src="@/assets/images/common/clipboard.svg"
            alt=""
          />
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
  methods: {
    capture() {
      if (this.montoOrigin === "" && this.currencyOrigin === "") {
        alert("No se encontraron los datos");
      } else {
        // const copy1 = JSON.parse(localStorage.setItem("transaction"))
        // const copy2 = JSON.parse(localStorage.setItem("transaction"));
        // console.log(copy2);
        alert("mensaje copiado");
      }
    }
  }
};
</script>
