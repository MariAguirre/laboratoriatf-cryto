<template>
  <div class="Grid grid-flow-col">
    
    <Loader v-if="openLoader" class="h-full w-full bg-white" />
     <BaseText class="flex justify-center mt-20 ml-14 mr-8 md:ml-0 md:px-20 ">
     <TextParagraph  class="text-lg-xs-xxxs-xxxxs ml-8-2-0 -ml-6 text-gray-500"
     text="El tipo de cambio se actualizará:"
     alignment="center left" /> <span class="flex text-lg-xs-xxxs font-bold text-gray-500"> 00:15 min</span>
    
     </BaseText>
    <div class="m-18 ml-8 mr-8 mt-4 flex justify-center">
      <div>
        <BaseCard class=" w-400 md:w-719 p-1 " text="">
          <BaseText class="">
            <BodyTransfers
              class="flex h-359"
              :monto-origin="mountOrigin"
              :currency-origin="currencyOrigin"
              :data3="data3"
              :number="number"
              :name="name"
            />
          </BaseText>
        </BaseCard>      
      </div>
      <div>
        <BaseCard class="hidden sm:block w-400 md:w-306 ml-9" text="">
          <DetalleTransfers
            class="flex justify-left md:p-4 h-330"
            :data2="data2"
            :data3="data3"
            :number-destiny="numberDestiny"
            :currency="currency"
            :banco="banco"
          />
        </BaseCard>
      </div>
    </div>
   
    <div
      class="               
                    flex flex-col
                    justify-center
                    items-center"
    >
      <Button
        class="mt-8 w-410"
        text="CONFIRMO TRANSFERENCIA"
        @click.native="sendtransfer"
      >
      </Button>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BodyTransfers from "~/modules/transferir/BodyTransfers.vue";
import DetalleTransfers from "@/modules/transferir/DetalleTransfers.vue";

import Button from "@/shared/ui/components/Button/Button.vue";
// import logger from "@/shared/ui/utils/logger.ts";
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";
import TextParagraph from "@/shared/ui/components/Typography/TextParagraph.vue"
import { mapState } from "vuex";

export default {
  components: {
    BaseCard,
    BodyTransfers,
    
    DetalleTransfers,      
    Button,
    Loader,
    TextParagraph
  },
  data() {
    return {
      mountOrigin: "",
      currencyOrigin: "",
      mountDestiny: "",
      currencyDestiny: "",
      exchangeOne: "",
      exchangeTwo: "",
      data2: {},
      number: "",
      banco: "",
      destino: "",
      data3: {},
      currency: "",
      numberDestiny: "",
      name: "",
      openLoader: true
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"])
  },
  mounted() {
    this.getdata();
    this.getdata2();
  },
  methods: {
    getdata() {
      this.data2 = this.quote;
      this.mountOrigin = this.data2.mountOrigin;
      this.currencyOrigin = this.data2.currencyOrigin;
    },
    getdata2() {
      this.data3 = this.transaction;
      console.log(this.data3);
      this.number = this.data3.cashIn.number;
      this.numberDestiny = this.data3.account[0].number;
      this.currency = this.data3.account[0].currency;
      this.name = this.data3.cashIn.name;
      this.banco = this.data3.bankId;
      this.openLoader = false;
    },
    sendtransfer() {
      if (this.data3.cashIn.type === "OWN") {
        this.$router.push({ path: "constancia" }, console.log, console.log);
      } else {
        this.$router.push(
          { path: "constanciaopciones" },
          console.log,
          console.log
        );
      }
    }
  }
};
</script>
