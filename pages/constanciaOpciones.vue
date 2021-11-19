<template>
  <div class="w-430 ">
    <div class="Grid grid-flow-col">
      <div>
    <Topbarflow3 class="hidden sm:block" variant="light" show-logo show-nav></Topbarflow3>
    </div>
    <Topbarflowsm3
        class="block sm:hidden"
        variant="light"
        show-logo
        show-nav
      />
    <div class="m-18 ml-8 mr-8 mt-20 flex justify-center">
      <div>
      <BaseCard class="h-434 w-719 p-1 " text="">
        <ConstancySend class="flex " />
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
    </div>
    </div>
</template>

<script>
import Topbarflow3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue";
import Topbarflowsm3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflowsm3.vue";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancySend from "@/modules/constans/components/ConstancySend.vue";
import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";

export default {
  components: { Topbarflow3, BaseCard, BaseText, ConstancySend, DetalleTransfer, Topbarflowsm3 },
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
    this.name = this.data3.cashIn.name;
  }
};
</script>
