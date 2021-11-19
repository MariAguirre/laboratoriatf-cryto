<template>
  <div class="Grid grid-flow-col">
    <Modal v-model="open" closeable-by-backdrop>
      <div
        class="flex flex-col items-center bg-white rounded-xl w-full justify-center"
      >
        <BaseCard class="w-306 md:w-306 my-2" text="">
          <DetalleTransfers
            class="flex justify-left p-4 px-6 h-330"
            :data2="data2"
            :data3="data3"
            :number-destiny="numberDestiny"
            :currency="currency"
            :banco="banco"
          />
        </BaseCard>

        <button
          class="w-306 bg-kambista-blue text-white h-14 rounded-xl mt-2 mb-1"
          @click="closeDetail"
        >
          ENTENDIDO
        </button>
      </div>
    </Modal>
    <Loader v-if="openLoader" class="h-full w-full bg-white" />
    <BaseText class="flex justify-center mt-10 sm:mt-20 ml-14 mr-8 md:ml-0 md:px-20 ">
      <TextParagraph
        class="text-lg-xs-xxxs-xxxxs ml-8-2-0 -ml-6 text-gray-500"
        text="El tipo de cambio se actualizará:"
        alignment="center left"
      />
      <span class="flex text-lg-xs-xxxs pl-2 font-bold text-gray-500">
        15 min</span
      >
    </BaseText>
    <div class="m-18 ml-8 mr-8 mt-4 flex justify-center">
      <div>
        <BaseCard class="w-400 md:w-719 pb-11 sm:py-14" text="">
          <BaseText class="">
            <BodyTransfers
              class="flex"
              :monto-origin="mountOrigin"
              :currency-origin="currencyOrigin"
              :data3="data3"
              :number="number"
              :name="name"
            />
          </BaseText>
        </BaseCard>
        <button
          class="block sm:hidden pt-4 w-full justify-center underline"
          @click="showDetail"
        >
          Detalle de la operación
        </button>
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
    <div class="flex flex-col justify-center items-center">
      <ButtonC
        class="mt-8 w-80 sm:w-410 mb-10"
        text="CONFIRMO TRANSFERENCIA"
        @click.native="sendtransfer"
      >
      </ButtonC>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BodyTransfers from "~/modules/transferir/BodyTransfers.vue";
import DetalleTransfers from "@/modules/transferir/DetalleTransfers.vue";
import ButtonC from "@/shared/ui/components/Button/Button.vue";
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";
import TextParagraph from "@/shared/ui/components/Typography/TextParagraph.vue";
import { mapState } from "vuex";
import Modal from "@/shared/ui/components/Modal/Modal.vue";
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";

export default {
  components: {
    BaseCard,
    BodyTransfers,
    DetalleTransfers,
    ButtonC,
    Loader,
    TextParagraph,
    Modal,
    BaseText
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
      openLoader: true,
      open: false
    };
  },
  computed: {
    ...mapState(["transaction", "quote"])
  },
  mounted() {
    this.getdata();
    this.getdata2();
  },
  methods: {
    showDetail() {
      this.open = true;
    },
    closeDetail() {
      this.open = false;
    },
    getdata() {
      this.data2 = this.quote;
      this.mountOrigin = this.data2.mountOrigin;
      this.currencyOrigin = this.data2.currencyOrigin;
    },
    getdata2() {
      this.data3 = this.transaction;
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
