<template>
  <div class=" Grid grid-flow-col">
    <Topbarflow3 variant="light" show-logo></Topbarflow3>
    <div class="m-18 ml-8 mr-8 mt-20 flex justify-center">
      <div>      
        <ConstancySend />      
      <BaseText />
      </div>
      <div class="hidden sm:block w-306 md:w-306 ml-9">
        
      <DetalleTransfer 
        class=" flex justify-left md:p-4 "
        :data2="quote"
        :data3="transaction"
        :number-destiny="numberDestiny"
        :currency="currency"
        :banco="banco"
      />
       
      </div>
    </div>
  </div>
</template>

<script>
import Topbarflow3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue";

import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancySend from "@/modules/constans/components/ConstancySend.vue";
import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";


export default {
  components: { BaseText, ConstancySend, DetalleTransfer, Topbarflow3 },

  data() {
    return {
      data2: {},
      data3: {},
      numberDestiny: "",
      currency: "",
      banco: ""
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"])
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "login" });
    }
    this.data2 = this.quote;
    this.data3 = this.transaction;
    this.numberDestiny = this.data3.account[0].number;
    this.currency = this.data3.account[0].currency;
    this.banco = this.data3.bankId;
  }
};
</script>
