<template>
  <div>
    <div>
      <span>1 {{ currencyTwo }} {{ valueOneRound }} {{ currencyOne }} </span>
      <span>1 {{ currencyOne }} {{ valueTwoRound }} {{ currencyTwo }} </span>
    </div>
    <div>
      <div>
        <label
          >¿Cuánto tienes?
          <input v-model="exchangeOne" size="lg" @keyup="onKeyup" />
          <!-- <Input
            v-model="exchangeOne"
            label="¿Cuánto tienes?"
            size="lg"
            @keyup="onKeyup"
          /> -->
        </label>
        <Select v-model="selectOne" :options="optionsOne" @send="receiveOne" />
      </div>
      <div>
        <label
          >Entonces recibes
          <input v-model="exchangeTwo" @keyup="onKeyup2" />
          <!-- <Input v-model="exchangeTwo" label="Entonces recibes" size="lg" @keyup="onKeyup" /> -->
        </label>
        <Select v-model="selectTwo" :options="optionsTwo" @send="receiveTwo" />
      </div>
    </div>
    <Button text="INICIAR OPERACION" />
  </div>
</template>
<script>
// import Input from "@/shared/ui/components/Input.vue";
import Button from "@/shared/ui/components/Button/Button.vue";
// import logger from "~/shared/ui/utils/logger";
import Select from "../components/Select.vue";

export default {
  components: {
    // Input,
    Select,
    Button
  },
  data() {
    return {
      valueOne: "",
      valueTwo: "",
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
      optionsTwo: []
    };
  },
  mounted() {
    this.showData();
  },
  methods: {
    async showData() {
      this.currencyOne = this.selectOne;
      this.currencyTwo = this.selectTwo;
      const data = await this.$services.markets.findAll();
      this.markets = data;
      localStorage.setItem("markets", data);
      data.forEach(e => {
        this.optionsTwo.push({ name: e.id, value: e.name });
      });
      this.filterPrice(this.currencyOne, this.currencyTwo);
    },
    filterPrice(currencyOne, currencyTwo) {
      const crypto = this.markets.filter(e => e.id === currencyTwo);
      const exchange = crypto[0].bid.filter(e => e.currency === currencyOne);
      this.valueOne = Number(exchange[0].price);
      this.valueOneRound = this.separator(this.valueOne.toFixed(3));
      this.valueTwo = 1 / this.valueOne;
      this.valueTwoRound = this.valueTwo.toFixed(6);
    },
    receiveOne(childData) {
      this.currencyOne = childData;
      this.filterPrice(this.currencyOne, this.currencyTwo);
      this.exchangeOne = Number(this.exchangeTwo) * this.valueOne;
    },
    receiveTwo(childData) {
      this.currencyTwo = childData;
      this.filterPrice(this.currencyOne, this.currencyTwo);
      this.exchangeTwo = Number(this.exchangeOne) * this.valueTwo;
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
    }
  }
};
</script>
