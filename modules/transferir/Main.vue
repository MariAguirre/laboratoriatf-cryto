<template>
  <div class="Grid grid-flow-col">
    <BaseText class="flex justify-center mt-20 ml-14 mr-8 md:px-20 ">
      <p class="flex font-bold mr-4">El tipo de cambio se actualizará en</p>
      <span class="flex font-bold">00:15:00</span>
    </BaseText>
    <div class="m-18 ml-8 mr-8 mt-4 flex justify-center">
      <div>
        <BaseCard class="w-306 md:w-719 p-8 " text="">
          <BaseText class="">
            <BodyTransfers class="flex " :monto-origin="mountOrigin" :data3="data3" />
          </BaseText>
        </BaseCard>
      </div>
      <div>
        <BaseCard class="hidden sm:block w-306 md:w-306 ml-9" text="">
          <DetalleTransfers class="flex justify-left md:p-4" :data2="data2" :data3="data3" />
        </BaseCard>
      </div>
    </div>
    <div
      class="               
                    flex flex-col
                    justify-center
                    items-center"
    >
      <Button class="mt-8" text="CONFIRMO TRANSFERENCIA"> </Button>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BodyTransfers from "~/modules/transferir/BodyTransfers.vue";
import DetalleTransfers from "@/modules/transferir/DetalleTransfers.vue";
import Button from "@/shared/ui/components/Button/Button.vue";

export default {
  components: {
    BaseCard,
    BodyTransfers,
    DetalleTransfers,
    Button
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
      number: '',
      banco: '',
      destino:'',
      data3: {},  
    };
  },
  mounted() {
    this.getdata();
    this.getdata2()
  },
  methods: {
    getdata() {
      const data = JSON.parse(localStorage.getItem("quote"));
      this.data2 = data;
      console.log(this.data2);
      this.mountOrigin = this.data2.mountOrigin;
    },
    getdata2() {
        const completeddata = {                       
                "id": "kmMts15u7nJUYv8bX7",
                "customerId": "200e2f2b-829b-4de6-8cbb-19774882f005",
                "operationNumber": "kmMts15",
                "amountEstimated": 0.00038,
                "exchangeRate": 261905,
                "originCurrency": "PEN",
                "destinationCurrency": "BTC",
                "amountSent": 100,
                "bankId": "BCP",
                "account": {
                    "id": "6de6f675-bb1f-41eb-8147-4702849210b5",
                    "customerId": "129be299-22ed-4407-b7b8-91daf26d867a",
                    "type": "crypto",
                    "number": "3AEcLU8NkukFRP5kGVikbmHVLXhL5KWuGv",
                    "currency": "BTC",
                    "alias": "U1 Mi cuenta BTC"
                },
                "sourceOfFunds": "Otros",
                "cashIn": {
                    "name": "2003001399567",
                    "type": "OWN"
                }
            
        }
        this.data3 = completeddata;
        console.log(this.data3);
        this.number = this.data3.customerId;
        console.log(this.number);
        this.banco = this.data3.bankId;
        console.log(this.banco);
        this.destino = this.data3.destinationCurrency;
        console.log(this.destino);
    }
    

  }
};
</script>
