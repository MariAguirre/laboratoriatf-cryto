<template>
  <div
    clas="p-2 sm:p-4 ml-9 w-719 h-96 bg-white
flex flex-col
justify-between
items-center"
  >
    <div>
      <Loader v-if="openLoader" class="h-full w-full bg-white" />
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_bgrlh8or.json"
        background="transparent"
        speed="1"
        style="width:250px; height:500px;"
        loop
        autoplay
      ></lottie-player>
    </div>
    <BaseCard class=" px-2 sm:px-28 w-330 min-w-full" text=""
      ><div class="flex justify-center flex flex-col items-center">
        <img
          class="w-60 pt-16 "
          src="~/assets/images/banners/monedameta.png"
          alt=""
        />

        <h1 class=" text-center pt-4  mb-3 font montserrat text-lg md:text-2xl">
          ¡Constancia Enviada!
        </h1>
      </div>
      <div class="py-8 px-2 sm:flex-grow-0 min-w-full hidden sm:block ">
        <div class="flex justify-between md:justify-between">
          <p class="text-kambista-7 font-bold">Código Kambista</p>
          <p class="font-bold">{{ codIdK }}</p>
        </div>
        <p class="py-4">
          *Usa tu código para dar seguimiento a tu operación o si tuvieras una
          consulta.
        </p>
        <div class="flex justify-between md:justify-between">
          <p class="text-kambista-7 font-bold">Monto a recibir</p>
          <p class="font-bold">{{ count }} {{ tipeMoney }}</p>
        </div>
        <div class="py-2 flex justify-between md:justify-between"></div>
        <div class="py-2 flex justify-between md:justify-between">
          <p class="text-kambista-7 font-bold">Tiempo de espera</p>
          <p class="font-bold">{{ time }} min aprox</p>
        </div>
      </div>
      <div class="py-2 px-2 flex flex-col min-w-full block sm:hidden">
        <p class="text-kambista-7 font-bold">Código Kambista</p>
        <p class="font-bold">{{ codIdK }}</p>

        <p class="py-4">
          *Usa tu código para dar seguimiento a tu operación o si tuvieras una
          consulta.
        </p>
        <div class="flex">
          <div class="py-2 w-1/2 ">
            <p class="text-kambista-7 font-bold">Monto a recibir</p>
            <p class="font-bold ">{{ count }} {{ tipeMoney }}</p>
          </div>
          <div class="py-2 w-1/2">
            <p class="text-kambista-7 font-bold">Tiempo de espera</p>
            <p class="font-bold">{{ time }} min aprox</p>
          </div>
        </div>
      </div>
    </BaseCard>
    <div>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_bgrlh8or.json"
        background="transparent"
        speed="1"
        style="width:250px; height:500px;"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseCard,
    Loader
  },
  data() {
    return {
      codIdK: "",
      count: "",
      tipeMoney: "",
      time: "",
      openLoader: true,
      dataConfirmation: "",
      quoteData: ""
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"])
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.dataConfirmation = this.transaction;
      this.quoteData = this.quote;
      this.codIdK = this.dataConfirmation
        ? this.dataConfirmation.operationNumber
        : "";
      this.count = this.dataConfirmation
        ? this.dataConfirmation.amountEstimated
        : "";
      this.tipeMoney = this.dataConfirmation.destinationCurrency;

      this.time = this.quoteData
        ? this.convertTime(Number(this.quoteData.delay))
        : "";
      this.openLoader = false;
    },
    convertTime(time) {
      const minutes = Math.floor(time / 60);
      return `${minutes}`;
    }
  }
};
</script>
