<template>
  <section class="w-375 sm:w-641 sm:flex sm:justify-center sm:flex-col">
    <Modal v-model="open" closeable-by-backdrop>
      <div class="flex flex-col items-center bg-white rounded-xl w-full">
        <h1 class="pb-8">¡UPS!</h1>
        <h2>Ocurrió un error inténtelo nuevamente.</h2>
      </div>
    </Modal>
    <Loader v-if="openLoader" class="h-full w-full bg-white" />
    <div>
      <Topbarflow class="hidden sm:block" variant="light" show-logo show-nav />
    </div>
    <div>
      <Topbarflowsm
        class="block sm:hidden"
        variant="light"
        show-logo
        show-nav
      />
    </div>

    <div
      class="
      flex flex-col
      justify-center
      items-center
      backdrop-blur-sm
      m-2 sm:m-4
    "
    >
      <div>
        <TextTitle
          class="flex mt-8 sm:mt-12 text-center w-full sm:w-full"
          text="Completa los datos de tu operación"
        />
      </div>
      <BaseCardData :base-data="dataQuote" class="w-96 mt-4" />
      <Highlight
        class="mt-6 w-96"
        title="Tiempo estimado de espera"
        :delay="delay"
      />
      <BaseText class=" mt-4" text="¿Desde qué banco nos envías tu dinero?" />
      <Select
        v-model="values.valueBank"
        :options="banks"
        class="mt-1 w-96 bg-white"
        :custom="true"
      >
        <template #currentOption="e">
          <img :src="e.option.image" />
          <i>{{ e.option.name }}</i>
        </template>
        <template #option="e" class="">
          <img :src="e.option.image" />
          <i>{{ e.option.name }}</i>
        </template>
      </Select>
      <BaseText text="¿A qué dirección enviamos tus criptomonedas?" />
      <Select
        v-model="values.valueWallet"
        :options="accounts"
        class="mt-1 w-96 bg-white"
        :custom="true"
      >
        <template #currentOption="e">
          <i>{{ e.option.id }}</i>
        </template>
        <template #option="e" class="">
          <i>{{ e.option.id }}</i>
        </template>
      </Select>
      <BaseText text="Origen de fondos" />
      <Select
        v-model="values.fundsValue"
        class="mt-1 w-96 bg-white"
        :options="funds"
        :custom="true"
      >
        <template #currentOption="e">
          <i>{{ e.option.name }}</i>
        </template>
        <template #option="e" class="flex flex-row">
          <i>{{ e.option.name }}</i>
        </template>
      </Select>
      <Button
        :disabled="disabled"
        class="w-96 mt-3"
        text="Continuar"
        @click.native="createTransaccion"
      />
    </div>
  </section>
</template>

<script>
import Topbarflow from "~/shared/ui/components/Layouts/Dashboard/Topbarflow.vue";
import Topbarflowsm from "~/shared/ui/components/Layouts/Dashboard/Topbarflowsm.vue";
import TextTitle from "~/shared/ui/components/Typography/TextTitle.vue";
import BaseText from "~/shared/ui/components/Typography/BaseText.vue";
import BaseCardData from "../modules/data/BaseCardData.vue";
import Select from "~/shared/ui/components/Select.vue";
import Button from "~/shared/ui/components/Button/Button.vue";
import Highlight from "~/shared/ui/components/Highlight.vue";
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";
import Modal from "@/shared/ui/components/Modal/Modal.vue";

export default {
  components: {
    Topbarflow,
    Topbarflowsm,
    Select,
    TextTitle,
    BaseCardData,
    Button,
    Highlight,
    BaseText,
    Loader,
    Modal
  },
  data() {
    return {
      accounts: [],
      funds: [],
      dataQuote: {},
      dataUtils: {},
      delay: 0,
      banks: [],
      openLoader: true,
      values: {
        valueBank: "",
        valueWallet: "",
        fundsValue: ""
      },
      open: false
    };
  },
  computed: {
    disabled() {
      return !(
        this.values.valueBank !== "" &&
        this.values.valueWallet !== "" &&
        this.values.fundsValue !== ""
      );
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push({path: 'login'});
    } else {
      this.getdata();
    }
  },

  methods: {
    async getdata() {
      this.dataQuote = JSON.parse(localStorage.getItem("quote"));
      this.dataUtils = JSON.parse(localStorage.getItem("utils"));
      this.delay = this.dataQuote.delay;
      this.banks = this.dataUtils.banks;
      this.dataUtils.sourceOfFunds.forEach(e => {
        this.funds.push({ name: e });
      });
      this.accounts = (
        await this.$services.accounts.getAccount(
          localStorage.getItem("token"),
          {
            currency: this.dataQuote.currencyDestiny,
            type: "crypto"
          }
        )
      ).data.data;
      this.openLoader = false;
    },
    async createTransaccion() {
      try {
        const transaction = {
          originCurrency: this.dataQuote.currencyOrigin,
          destinationCurrency: this.dataQuote.currencyDestiny,
          amountSent: this.dataQuote.mountOrigin,
          bankId: this.values.valueBank.id,
          account: this.accounts,
          sourceOfFunds: this.values.fundsValue
        };
        const response = await this.$services.transaction.createTransaction(
          transaction,
          localStorage.getItem("token")
        );
        localStorage.setItem("transaction", JSON.stringify(response.data.data));
        localStorage.setItem("transactionValues", JSON.stringify(this.values));
        window.location.href = "/transfers";
      } catch (err) {
        this.open = true;
      }
    }
  }
};
</script>
