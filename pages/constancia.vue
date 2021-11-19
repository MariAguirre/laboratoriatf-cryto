<template>
  <div >
    <div>
    <Topbarflow3 class="hidden sm:block" variant="light" show-logo show-nav/>
    </div>
    <div>
    <Topbarflowsm3
        class="block sm:hidden"
        variant="light"
        show-logo
        show-nav
      />
      </div>
    <div class="m-18 ml-8 mr-8 mt-20 flex justify-center">
      <div>        
           <ConstancyOpera class="flex h-359" />       
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
        </BaseCard>  -->
      </div>
    
  
</template>

<script>
import Topbarflow3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue";

import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancyOpera from "@/modules/constans/components/ConstancyOpera.vue";
import Topbarflowsm3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflowsm3.vue";
import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";

export default {
  components: {    
    BaseText,
    ConstancyOpera,
    Topbarflow3,
    Topbarflowsm3,
    DetalleTransfer
  },
  data() {
    return {
      showView: false,
      data2: {},
      data3: {},
      numberDestiny: "",
      currency: "",
      banco: "",
      codigo: "",
      open: false,
      loading: null
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"]),
    disabled() {
      return !(this.codigo !== "");
    }
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
    this.banco = this.data3.bankId;   
  },
  methods: {
    async sendconstancia() {
      this.loading = true;
      try {
        const id = this.transaction.id;
        const response = await this.$services.transaction.checkTransaction(
          { voucher: this.codigo },
          localStorage.getItem("token"),
          id
        );
        console.log(response);
        window.location.href = "/confirmacion";
      } catch (err) {
        this.open = true;
        this.loading = null;
      }
    }
  }
};
</script>
