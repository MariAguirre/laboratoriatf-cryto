<template>
  <div
    class="         
      flex-col
      bg-white                
    "
  >
    <div class="md:p-2">
      <h1 class="font-normal text-14">
        DETALLE DE TU OPERACIÓN
      </h1>
      <div class="mt-4">
        <p>Origen</p>
        <p class="mt-2">{{ banco }}</p>
      </div>
      <div class="mt-4">
        <p>Direccion de destino {{ currency }}</p>
        <p class="mt-2 truncate md:overflow-ellipsis">
          {{ numberDestiny }}
        </p>
      </div>
      <div class="mt-4">
        <h2 class="font-bold mt-2">Monto</h2>
        <p class="mt-2">
          Enviado:
          <span>{{ data2.mountOrigin }} {{ data2.currencyOrigin }}</span>
        </p>
        <p class="mt-2">
          Recibido:
          <span>{{ data2.mountDestiny }} {{ data2.currencyDestiny }}</span>
        </p>
      </div>
      <div class="mt-6">
        <p class="font-bold">
          1{{ data2.currencyDestiny }} = {{ data2.exchangeOne }}
          {{ data2.currencyOrigin }}
        </p>
        <p class="mt-2 font-bold">
          1{{ data2.currencyOrigin }} = {{ data2.exchangeTwo }}
          {{ data2.currencyDestiny }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
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
  mounted() {
    this.getdata();
    this.getdata2();
  },
   methods: {
    getdata() {
      const data = JSON.parse(localStorage.getItem("quote"));
      this.data2 = data;
      
      this.mountOrigin = this.data2.mountOrigin;
      this.currencyOrigin = this.data2.currencyOrigin;
    },
    getdata2() {
      // this.data3 = JSON.parse(localStorage.getItem("transaction"));
      this.data3 = {
        id: "kmGNWBYSUS3Jx4D2Wr",
        customerId: "200e2f2b-829b-4de6-8cbb-19774882f005",
        operationNumber: "kmGNWBY",
        amountEstimated: 0.00038,
        exchangeRate: 261905,
        originCurrency: "PEN",
        destinationCurrency: "BTC",
        amountSent: 100,
        bankId: "BCP",
        account: {
          id: "6de6f675-bb1f-41eb-8147-4702849210b5",
          customerId: "129be299-22ed-4407-b7b8-91daf26d867a",
          type: "crypto",
          number: "3AEcLU8NkukFRP5kGVikbmHVLXhL5KWuGv",
          currency: "BTC",
          alias: "U1 Mi cuenta BTC"
        },
        sourceOfFunds: "Otros",
        cashIn: {
          name: "BCP",
          number: "2003001399567",
          type: "OWN"
        }
      };
      this.number = this.data3.cashIn.number;
      this.numberDestiny = this.data3.account.number;
      this.currency = this.data3.account.currency;
      this.name = this.data3.cashIn.name;
      this.banco = this.data3.bankId
      console.log(this.currency, this.numberDestiny, this.number);      
    },
   }
};
</script>
