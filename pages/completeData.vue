<template>
  <section >

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

    <div class="w-340 sm:w-500 lg:w-full m-2 sm:m-4">
      <div>
        <TextSubTitle
          class=" mt-6 text-center w-full "
          text="Completa los datos de tu operación"
          alignment="center"
          
        />
      </div>
      <div class="flex flex-col items-center w-full h-full justify-center">
      <BaseCardData :base-data="dataQuote" class="w-96 sm:mt-4" />
      <Highlight
        class="mt-6 w-96 "
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
          <div class="flex flex-row justify-center">
          <img :src="e.option.image" />
          <i class=" ml-2 mt-2 not-italic">{{ e.option.name }}</i> 
          </div>
        </template>
        <template #option="e" class="">
          <div class="flex flex-row justify-center">
          <img :src="e.option.image" />
          <i class=" ml-2 mt-2 not-italic">{{ e.option.name }}</i>
          </div>
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
        
          <i class=" not-italic">{{ e.option.id }}</i>
        </template>
        <template #option="e" class="">
          <i class=" not-italic">{{ e.option.id }}</i>
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
          <i>{{ e.option }}</i>
        </template>
        <template #option="e" class="flex flex-row">
          <i>{{ e.option }}</i>
        </template>
      </Select>
      <Button
        :disabled="disabled"
        class="w-96 mt-3"
        text="Continuar"
        @click.native="createTransaccion"
      />
      </div> 
    </div>
  </section>
</template>

<script>
import Topbarflow from "~/shared/ui/components/Layouts/Dashboard/Topbarflow.vue";
import Topbarflowsm from "~/shared/ui/components/Layouts/Dashboard/Topbarflowsm.vue";
import TextSubTitle from "~/shared/ui/components/Typography/TextSubtitle.vue";
import BaseText from "~/shared/ui/components/Typography/BaseText.vue";
import BaseCardData from "../modules/data/BaseCardData.vue";
import Select from "~/shared/ui/components/Select.vue";
import Button from "~/shared/ui/components/Button/Button.vue";
import Highlight from "~/shared/ui/components/Highlight.vue";
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";
import logger from "@/shared/ui/utils/logger.ts";

export default {
  components: {
    Topbarflow,
    Topbarflowsm,
    Select,
    TextSubTitle,
    BaseCardData,
    Button,
    Highlight,
    BaseText,
    Loader
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
      }
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
    this.getdata();
  },
  methods: {
    async getdata() {
      this.dataQuote = JSON.parse(localStorage.getItem("quote"));
      this.dataUtils = JSON.parse(localStorage.getItem("utils"));
      this.delay = this.dataQuote.delay;
      this.banks = this.dataUtils.banks;
      this.funds = this.dataUtils.sourceOfFunds;
      this.accounts = (
        await this.$services.accounts.getAccount(
          localStorage.getItem("token"),
          {
            currency: this.dataQuote.currencyDestiny,
            type: "crypto"
          }
        )
      ).data.data;
      logger.info(this.accounts);
      this.openLoader = false;
    },
    async createTransaccion() {
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
      logger.info(response);
      localStorage.setItem("transaction", JSON.stringify(response));
      localStorage.setItem("transaccionValues", JSON.stringify(this.values));
      // window.location.href = "/transfers";
    }
  }
};
</script>
