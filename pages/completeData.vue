<template>
  <section class="w-full">
    <Modal v-model="open" closeable-by-backdrop>
      <div class="flex flex-col items-center bg-white rounded-xl w-full">
        <div class="flex flex-col w-11/12 sm:w-96">
          <p class="pb-1 text-center text-2xl leading-6 font-normal">
            Ocurrió un error inténtelo nuevamente.
          </p>
          <img src="@/assets/images/error/errorLogin.jpg" alt="question" />
        </div>
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
    <div class="w-full flex justify-center">
      <div class="w-375 sm:w-641 sm:flex sm:justify-center sm:flex-col">
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
            <TextSubTitle
              class="flex mt-8 text-xl sm:text-2xl  sm:mt-12 text-center w-full sm:w-full"
              text="Completa los datos de tu operación"
              alignment="center"
            />
          </div>
          <div class="flex flex-col items-center w-full h-full justify-center">
            <BaseCardData :base-data="dataQuote" class="w-80  sm:w-96 mt-4 sm:mt-4" />
            <Highlight
              class="mt-6 w-80  sm:w-96 "
              title="Tiempo estimado de espera"
              :delay="delay"
            />
            <BaseText
              v-if="dataQuote.stateBuy"
              class="w-80  sm:w-96 mt-8 pl-1 text-7"
              text="¿Desde qué banco nos envías tu dinero?"
            />
            <BaseText
              v-else
              class="w-80  sm:w-96 mt-8 pl-1 text-7"
              text="¿Desde dónde nos envías tus cryptos?"
            />
            <Select
              v-if="dataQuote.stateBuy"
              v-model="values.valueBank"
              :options="banks"
              class="mt-1 w-80  sm:w-96 bg-white"
              :custom="true"
            >
              <template #currentOption="e">
                <div class="flex flex-row items-start w-full">
                  <img :src="e.option.image" />
                  <i class=" ml-2 mt-2 not-italic">{{ e.option.name }}</i>
                </div>
              </template>
              <template #option="e" class="">
                <div class="flex flex-row items-start w-full">
                  <img :src="e.option.image" />
                  <i class=" ml-2 mt-2 not-italic">{{ e.option.name }}</i>
                </div>
              </template>
            </Select>
            <Select
              v-else
              v-model="values.cryptoWallet"
              :options="cryptoWallets"
              class="mt-1 w-80  sm:w-96 bg-white"
              :custom="true"
            >
              <template #currentOption="e">
                <div class="flex flex-row items-start w-full">
                  <i class=" ml-2 mt-2 not-italic">{{ e.option.name }}</i>
                </div>
              </template>
              <template #option="e" class="">
                <div class="flex flex-row items-start w-full">
                  <i class=" ml-2 mt-2 not-italic">{{ e.option.name }}</i>
                </div>
              </template>
            </Select>
            <BaseText
              v-if="dataQuote.stateBuy"
              class="w-80  sm:w-96 pl-1 text-7  mt-4 "
              text="¿A qué dirección enviamos tus criptomonedas?"
            />
            <BaseText
              v-else
              class="w-80  sm:w-96 pl-1 text-7  mt-4 "
              text="¿A qué cuenta enviamos tu dinero?"
            />
            <Select
              v-if="dataQuote.stateBuy"
              v-model="values.valueWallet"
              :options="accounts"
              class="mt-1 w-80  sm:w-96 bg-white"
              :custom="true"
            >
              <template #currentOption="e">
                <i class=" not-italic">{{ e.option.number }}</i>
              </template>
              <template #option="e" class="">
                <i class=" not-italic">{{ e.option.number }}</i>
              </template>
            </Select>
            <Select
              v-else
              v-model="values.valueBank"
              :options="accounts"
              class="mt-1 w-80  sm:w-96 bg-white"
              :custom="true"
            >
              <template #currentOption="e">
                <i class="pl-1 not-italic">{{ e.option.currency }} - </i>
                <i class="pl-1 not-italic">{{ e.option.number }}</i>
              </template>
              <template #option="e" class="">
                <div class="flex items-center">
                  <img
                    :src="getImageBank(e.option.bankId)"
                    class=" not-italic"
                  />
                  <i class="pl-2 not-italic"
                    >{{ e.option.alias.substring(0, 10) }}... -
                  </i>
                  <i class="pl-1 not-italic">{{ e.option.currency }} - </i>
                  <i class="pl-1 not-italic">{{ e.option.number }}</i>
                </div>
              </template>
            </Select>
            <BaseText class="w-80  sm:w-96 pl-1 text-7  mt-4 " text="Origen de fondos" />
            <Select
              v-model="values.fundsValue"
              class="mt-1 w-80  sm:w-96 bg-white"
              :options="funds"
              :custom="true"
            >
              <template #currentOption="e">
                <i class="not-italic">{{ e.option.name }}</i>
              </template>
              <template #option="e" class="flex flex-row">
                <i class="not-italic">{{ e.option.name }}</i>
              </template>
            </Select>
            <Button
            :loading="loading"
            :disabled="disabled"
              class="w-80  sm:w-96 mt-8 mb-28"
              text="Continuar"
              @click.native="createTransaccion"
            />
          </div>
        </div>
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
import Modal from "@/shared/ui/components/Modal/Modal.vue";
import { mapState } from "vuex";

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
    Loader,
    Modal
  },
  data() {
    return {
      accounts: [],
      funds: [],
      dataQuote: {},
      dataUtils: {},
      delay: "",
      banks: [],
      cryptoWallets: [],
      openLoader: true,
      values: {
        valueBank: "",
        valueWallet: "",
        fundsValue: "",
        cryptoWallet: "",
        
      },
      open: false,
      loading: null

    };

  },
  computed: {
    ...mapState(["transaction", "quote"]),
    disabled() {
      if (this.dataQuote.stateBuy) {
        return !(
          this.values.valueBank !== "" &&
          this.values.valueWallet !== "" &&
          this.values.fundsValue !== ""
        );
      }
      return !(
        this.values.cryptoValue !== "" &&
        this.values.valueBank !== "" &&
        this.values.fundsValue !== ""
      );
    }
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "login" });
    } else {
      this.getdata();
    }
  },

  methods: {
    getImageBank(id) {
      const img = this.banks.filter(e => e.id === id);
      return img[0].image;
    },
    async getdata() {
      this.dataQuote = this.quote;
      this.dataUtils = JSON.parse(localStorage.getItem("utils"));
      this.delay = this.convertTime(this.dataQuote.delay);
      this.banks = this.dataUtils.banks;
      this.dataUtils.originWallets.forEach(e => {
        this.cryptoWallets.push({ name: e });
      });
      this.dataUtils.sourceOfFunds.forEach(e => {
        this.funds.push({ name: e });
      });
      this.accounts = (
        await this.$services.accounts.getAccount(
          localStorage.getItem("token"),
          {
            currency: this.dataQuote.currencyDestiny,
            type: this.dataQuote.stateBuy ? "crypto" : "bank"
          }
        )
      ).data.data;
      this.openLoader = false;
    },
    async createTransaccion() {
      this.loading = true;
      try {
        const transaction = {
          originCurrency: this.dataQuote.currencyOrigin,
          destinationCurrency: this.dataQuote.currencyDestiny,
          amountSent: this.dataQuote.mountOrigin,
          bankId: this.dataQuote.stateBuy
            ? this.values.valueBank.id
            : this.values.cryptoWallet.name,
          account: this.accounts,
          sourceOfFunds: this.values.fundsValue
        };
        const response = await this.$services.transaction.createTransaction(
          transaction,
          localStorage.getItem("token")
        );
        this.$store.dispatch("setTransaction", response.data.data);
        localStorage.setItem("transactionValues", JSON.stringify(this.values));

    
        this.$router.push({ path: "transferencia" }, console.log, console.log);

      } catch (err) {
        this.loading = null;
        this.open = true;
      }
    },
    convertTime(time) {
      const minutes = Math.floor(time / 60);
      return `${minutes} min`;
    }
  }
};
</script>
