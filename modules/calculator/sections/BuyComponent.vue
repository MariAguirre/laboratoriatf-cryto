<template>
  <section>
    <Loader v-if="openLoader" class="h-full w-full bg-white" />
    <Modal v-model="open" closeable-by-backdrop>
      <div class="flex flex-col items-center bg-white rounded-xl w-full">
        <div class="flex flex-col w-11/12 sm:w-96">
          <span class="pb-1 text-7 text-base leading-6 font-normal"
            >Selecciona tu criptomoneda</span
          >
          <label
            class="flex items-center border border-13 h-12 rounded-xl w-full"
          >
            <Magnify class="px-4" />
            <input
              v-model="searchCrypto"
              class="outline-none text-7 text-base leading-6 font-normal w-full"
              placeholder="Buscar"
            />
          </label>
        </div>
        <div class="flex flex-col  w-11/12 sm:w-96 items-end pt-4">
          <div
            v-for="(item, key) in optionsTwo"
            :key="key"
            class="flex justify-between items-center py-4 w-5/6 mr-2"
          >
            <div class="flex flex-col" @click="selectCrypto(item.name)">
              <span class="text-base font-semibold leading-5">{{
                item.name
              }}</span>
              <span class="text-sm font-normal leading-5">{{
                item.value
              }}</span>
            </div>
            <div class="h-full font-semibold">
              <span class="text-sm leading-5">{{ item.currency }}</span>
              <span class="text-sm leading-5">{{ separator(item.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    <div class="flex w-full">
      <ButtonC text="Compra" :class="classBuy" @click.native="changeToBuy" />
      <ButtonC text="Venta" :class="classSell" @click.native="changeToSell" />
    </div>
    <div
      v-if="stateBuy"
      class="flex flex-col w-full justify-center items-center bg-white"
    >
      <div class="w-312 sm:w-404">
        <div
          class="font-semibold sm:font-medium flex w-full justify-between pt-5 pb-3.5 px-1.5 text-xs sm:text-base leading-7"
        >
          <span
            >1 {{ currencyTwo }} {{ valueOneRound }} {{ currencyOne }}
          </span>
          <span
            >1 {{ currencyOne }} {{ valueTwoRound }} {{ currencyTwo }}
          </span>
        </div>
        <div class="pb-2 sm:pb-6 pt-1 sm:pt-6 w-312 sm:w-404 bg-white">
          <div class="flex h-70 sm:h-81 w-full my-2 sm:my-6">
            <label
              class="flex flex-col bg-kambista-8 w-3/4 h-70 sm:h-81 rounded-l-lg pl-7 pt-3.5 text-sm font-medium leading-4"
              >¿Cuánto tienes?
              <input
                v-model="exchangeOne"
                class="bg-kambista-8 text-sm sm:text-lg font-medium leading-5 outline-none mt-1 sm:mt-2.5"
                @keyup="onKeyup"
              />
            </label>
            <Select
              v-model="selectOne"
              class="w-36 h-70 sm:h-81 rounded-r-lg text-base sm:text-xl font-black flex justify-center"
              :options="optionsOne"
              @send="receiveOne"
            />
          </div>
          <div class="flex h-81 w-full my-2 sm:my-6 rounded-sm">
            <label
              class="flex flex-col bg-kambista-8 w-3/4 h-70 sm:h-81 rounded-l-lg pl-7 pt-3.5 text-sm font-medium leading-4"
              >Entonces recibes
              <input
                v-model="exchangeTwo"
                class="bg-kambista-8 text-sm sm:text-lg font-medium leading-5 outline-none mt-2.5"
                @keyup="onKeyup2"
              />
            </label>
            <div
              class="flex items-center justify-end bg-kambista-blue text-white w-36 h-70 sm:h-81 rounded-r-lg text-base sm:text-xl font-black"
              @click="handleClick"
            >
              {{ selectTwo }}
              <ChevronDown
                class="pl-3 sm:pl-8"
                :size="19"
                aria-hidden="true"
                aria-label="select options"
              />
            </div>
          </div>
        </div>
        <Button
          class="w-full mt-10 sm:mt-0 mb-4 sm:mb-8 text-sm"
          text="INICIAR OPERACIÓN"
          :loading="loading"
          @click.native="setQuote"
        />
      </div>
    </div>
    <div
      v-else
      class="flex flex-col w-full justify-center items-center bg-white"
    >
      <div class="w-312 sm:w-404">
        <div
          class="font-semibold sm:font-medium flex w-full justify-between pt-5 pb-3.5 px-1.5 text-xs sm:text-base leading-7"
        >
          <span
            >1 {{ currencyTwo }} {{ valueOneRound }} {{ currencyOne }}
          </span>
          <span
            >1 {{ currencyOne }} {{ valueTwoRound }} {{ currencyTwo }}
          </span>
        </div>
        <div class="pb-2 sm:pb-6 pt-1 sm:pt-6 w-312 sm:w-404 bg-white">
          <div class="flex h-70 sm:h-81 w-full my-2 sm:my-6">
            <label
              class="flex flex-col bg-kambista-8 w-3/4 h-70 sm:h-81 rounded-l-lg pl-7 pt-3.5 text-sm font-medium leading-4"
              >¿Cuánto tienes?
              <input
                v-model="exchangeTwo"
                class="bg-kambista-8 text-sm sm:text-lg font-medium leading-5 outline-none mt-2.5"
                @keyup="onKeyup2"
              />
            </label>
            <div
              class="flex items-center justify-end bg-kambista-blue text-white w-36 h-70 sm:h-81 rounded-r-lg text-base sm:text-xl font-black"
              @click="handleClick"
            >
              {{ selectTwo }}
              <ChevronDown
                class="pl-3 sm:pl-8"
                :size="19"
                aria-hidden="true"
                aria-label="select options"
              />
            </div>
          </div>
          <div class="flex h-81 w-full my-2 sm:my-6 rounded-sm">
            <label
              class="flex flex-col bg-kambista-8 w-3/4 h-70 sm:h-81 rounded-l-lg pl-7 pt-3.5 text-sm font-medium leading-4"
              >Entonces recibes
              <input
                v-model="exchangeOne"
                class="bg-kambista-8 text-sm sm:text-lg font-medium leading-5 outline-none mt-1 sm:mt-2.5"
                @keyup="onKeyup"
              />
            </label>
            <Select
              v-model="selectOne"
              class="w-36 h-70 sm:h-81 rounded-r-lg text-base sm:text-xl font-black"
              :options="optionsOne"
              @send="receiveOne"
            />
          </div>
        </div>
        <Button
          class="w-full mt-10 sm:mt-0 mb-4 sm:mb-8 text-sm"
          text="INICIAR OPERACIÓN"
          :loading="loading"
          @click.native="setQuote"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Button from "@/shared/ui/components/Button/Button.vue";
import Select from "../components/Select.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import ButtonC from "../components/ButtonC.vue";
import Modal from "@/shared/ui/components/Modal/Modal.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";

export default {
  components: {
    Select,
    ButtonC,
    Button,
    Modal,
    ChevronDown,
    Magnify,
    Loader
  },
  data() {
    return {
      stateBuy: true,
      valueOne: "",
      valueTwo: "",
      valueOneRound: "",
      valueTwoRound: "",
      exchangeOne: "",
      exchangeTwo: "",
      currencyOne: "",
      currencyTwo: "",
      selectOne: "USD",
      selectTwo: "BTC",
      optionsOne: [
        { name: "USD", value: "Dólares" },
        { name: "PEN", value: "Soles" }
      ],
      optionsTwo: [],
      open: false,
      searchCrypto: "",
      openLoader: true,
      loading: null
    };
  },
  computed: {
    classBuy() {
      if (this.stateBuy) {
        return "bg-kambista-blue text-white";
      }
      return "bg-white hover:border hover:border-black hover:bg-kambista-blue hover:text-white";
    },
    classSell() {
      if (!this.stateBuy) {
        return "bg-kambista-blue text-white";
      }
      return "bg-white hover:border hover:border-black hover:bg-kambista-blue hover:text-white";
    }
  },
  mounted() {
    this.showData();
  },
  methods: {
    changeToBuy() {
      this.stateBuy = true;
      this.filterSellOrBuy(this.currencyOne, this.currencyTwo, "bid");
    },
    changeToSell() {
      this.stateBuy = false;
      this.filterSellOrBuy(this.currencyOne, this.currencyTwo, "ask");
    },
    showData() {
      this.currencyOne = this.selectOne;
      this.currencyTwo = this.selectTwo;
      this.filterSellOrBuy(this.currencyOne, this.currencyTwo, "bid");
    },
    async filterSellOrBuy(currencyOne, currencyTwo, state) {
      const data = await this.$services.markets.findAll();
      localStorage.setItem("markets", JSON.stringify(data));
      this.markets = JSON.parse(localStorage.getItem("markets"));
      this.filterPrice(currencyOne, currencyTwo, state);
      this.openLoader = false;
      this.optionsTwo = [];
      data.forEach(e => {
        this.optionsTwo.push({
          name: e.id,
          value: e.name,
          currency: e[state].filter(i => i.currency === currencyOne)[0]
            .currency,
          price: e[state].filter(i => i.currency === currencyOne)[0].price,
          delay: e[state].filter(i => i.currency === currencyOne)[0].delay
        });
      });
    },
    filterCurrency(currencyTwo) {
      return this.markets.filter(e => e.id === currencyTwo);
    },
    filterPrice(currencyOne, currencyTwo, state) {
      const crypto = this.filterCurrency(currencyTwo);
      const exchange = crypto[0][state].filter(e => e.currency === currencyOne);
      this.valueOne = Number(exchange[0].price);
      this.valueOneRound = this.separator(this.valueOne.toFixed(3));
      this.valueTwo = Number(1 / this.valueOne);
      this.valueTwoRound = Number(this.valueTwo).toFixed(5);
    },
    receiveOne(childData) {
      this.currencyOne = childData;
      const state = this.stateBuy ? "bid" : "ask";
      this.filterPrice(this.currencyOne, this.currencyTwo, state);
      this.exchangeOne = this.exchangeOne.replace(/,/g, "");
      this.exchangeTwo = (
        Number(this.exchangeOne) * Number(this.valueTwo)
      ).toFixed(5);
    },
    selectCrypto(value) {
      this.open = false;
      this.currencyTwo = value;
      this.selectTwo = value;
      const state = this.stateBuy ? "bid" : "ask";
      this.filterPrice(this.currencyOne, this.currencyTwo, state);
      this.exchangeOne = this.exchangeOne.replace(/,/g, "");
      this.exchangeTwo = (
        Number(this.exchangeOne) * Number(this.valueTwo)
      ).toFixed(5);
    },
    onKeyup() {
      this.exchangeTwo = this.separator(
        (Number(this.exchangeOne) * this.valueTwo).toFixed(5)
      );
    },
    onKeyup2() {
      this.exchangeOne = this.separator(
        (Number(this.exchangeTwo) * this.valueOne).toFixed(3)
      );
    },
    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    },
    handleClick() {
      this.open = true;
    },
    setQuote() {
      this.loading = true;
      const data = {
        mountOrigin: this.stateBuy ? this.exchangeOne : this.exchangeTwo,
        mountDestiny: this.stateBuy ? this.exchangeTwo : this.exchangeOne,
        currencyOrigin: this.stateBuy ? this.currencyOne : this.currencyTwo,
        currencyDestiny: this.stateBuy ? this.currencyTwo : this.currencyOne,
        exchangeOne: this.valueOneRound,
        exchangeTwo: this.valueTwoRound,
        delay: this.filterCurrency(this.currencyTwo)[0].delay,
        stateBuy: this.stateBuy
      };
      this.$store.dispatch("setQuote", data);
      this.$router.push({ path: "completedata" }, console.log, console.log);
    }
  }
};
</script>
