<template>
    <div
    clas="p-2 sm:p-4 ml-9 w-719 h-96 bg-white
flex flex-col
justify-between
items-center"><div><lottie-player src="https://assets4.lottiefiles.com/packages/lf20_bgrlh8or.json" background="transparent"  speed="1"  style="width:250px; height:500px;" loop  autoplay></lottie-player>
</div>
<BaseCard class=" px-2 sm:px-28 w-330 min-w-full" text=""><div class="flex justify-center flex flex-col items-center">
<img class="w-60 pt-16 " src ="~/assets/images/banners/monedameta.png" alt="" />
 
<h1 class=" text-center pt-4  mb-3 font montserrat text-lg md:text-2xl">¡Constancia Enviada!</h1>
</div>
<div class="py-8 px-2 sm:flex-grow-0 min-w-full hidden sm:block ">
<div class="flex justify-between md:justify-between">
  <p class="text-kambista-7 font-bold">Código Kambista</p>
  <p class="font-bold">{{codeIdK}}</p>
</div>
<p class="py-4">*Usa tu código para dar seguimiento a tu operación o si tuvieras una consulta.</p>
<div class= "flex justify-between md:justify-between">
  <p class="text-kambista-7 font-bold">Monto a recibir</p>
  <p class="font-bold">{{count}} {{tipeMoney}}</p>
  </div>
  <div class="py-2 flex justify-between md:justify-between">
  
</div>
<div class="py-2 flex justify-between md:justify-between">
  <p class="text-kambista-7 font-bold">Tiempo de espera</p>
  <p class="font-bold"> {{time}} min aprox</p>
</div>
</div>
<div class="py-2 px-2 flex flex-col min-w-full block sm:hidden">
 
  <p class="text-kambista-7 font-bold">Código Kambista</p>
  <p class="font-bold">{{codeIdK}}</p>

  <p class="py-4">*Usa tu código para dar seguimiento a tu operación o si tuvieras una consulta.</p>
<div class= "flex">
  <div class="py-2 w-1/2 ">
  <p class="text-kambista-7 font-bold">Monto a recibir</p>
  <p class="font-bold ">{{count}} {{tipeMoney}}</p>
  </div>
  <div class="py-2 w-1/2">
  <p class="text-kambista-7 font-bold">Tiempo de espera</p>
  <p class="font-bold"> {{time}} min aprox</p>
  </div>
</div>
</div>

    </BaseCard><div><lottie-player src="https://assets4.lottiefiles.com/packages/lf20_bgrlh8or.json" background="transparent"  speed="1"  style="width:250px; height:500px;" loop  autoplay></lottie-player>
</div></div>
</template>
<script>
import BaseCard from '@/shared/ui/components/Cards/BaseCard.vue'

export default {
  components:{
     BaseCard,
    },
    data(){
      return{
        codeIdK:'',
        count:'',
        tipeMoney:'',
        time:'',
      }
    },
   mounted(){
   this.getdata()
  },
  methods:{
    async getdata(){
    //const dataConfirmation = JSON.parse(localStorage.getItem('dataConfirmation'));
    const dataConfirmation= {
        "id": "kmMts15u7nJUYv8bX7",
        "customerId": "200e2f2b-829b-4de6-8cbb-19774882f005",
        "operationNumber": "KMMTS15",
        "amountEstimated": 0.00038,
        "exchangeRate": 261905,
        "originCurrency": "PEN",
        "destinationCurrency": "BTC",
        "amountSent": 100,
        "bankId": "BCP",
        "waitTime": 31,

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

    this.codeIdK=dataConfirmation.operationNumber;
    this.count=dataConfirmation.amountSent;
    this.tipeMoney = dataConfirmation.destinationCurrency;
    this.time=dataConfirmation.waitTime;
   },
  }
}
</script>
