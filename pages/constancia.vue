<template>
  <div class=" Grid grid-flow-col">
    <Topbarflow3 variant="light" show-logo></Topbarflow3>
    <Topbarflowsm2
        class="block sm:hidden"
        variant="light"
        show-logo
        show-nav
      />
    <div class="m-18 ml-8 mr-8 mt-20 flex justify-center">
      <div>
        <BaseCard class="w-306 md:w-719 p-1 " text="">
           <ConstancyOpera class="flex h-359" />
       </BaseCard>
       <BaseText />
       </div>
       <div>
        <BaseCard class="hidden sm:block w-306 md:w-306 ml-9" text="">
       <DetalleTransfer
        class="flex justify-left md:p-4 h-330"
        :data2="quote"
        :data3="transaction"
        :number-destiny="numberDestiny"
        :currency="currency"
        :banco="banco"
       />
       </BaseCard>
      </div>     
    </div>
      
      
        <!-- <BaseCard class="hidden sm:block w-306 md:w-306 ml-9" text="">
          <DetalleTransfer
            class="flex justify-left md:p-4 h-330"
            :data2="data2"
            :data3="data3"
            :number-destiny="numberDestiny"
            :currency="currency"
            :banco="banco"
          />
        </BaseCard> -->
      </div>
    
  
</template>

<script>
import Topbarflow3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancyOpera from "@/modules/constans/components/ConstancyOpera.vue";

import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseCard,
    BaseText,
    ConstancyOpera,
    Topbarflow3,
    
    DetalleTransfer
  },
  props: {
    data2: {
      type: Object,
      default() {}
    },
    data3: {
      type: Object,
      default() {}
    },
    numberDestiny: {
      type: String,
      default: ""
    },
    currency: {
      type: String,
      default: ""
    },
    banco: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showView: false,
      name: ""
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"])
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "login" });
    } else {
      this.showView = true;
    }
    this.data2 = this.quote;
    this.data3 = this.transaction;
    this.numberDestiny = this.data3.account[0].number;
    this.currency = this.data3.account[0].currency;
    this.name = this.data3.cashIn.name;
  }
};
</script>
