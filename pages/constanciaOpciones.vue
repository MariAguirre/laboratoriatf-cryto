<template>
  <div>
    <Topbar variant="light" show-logo></Topbar>
    <div class="m-24 mr-16 grid grid-cols-2 grap-4">
      <BaseCard text="">
        <ConstancySend />
      </BaseCard>
      <BaseText />
      <DetalleTransfer
        class="flex justify-left md:p-4"
        :data2="quote"
        :data3="transaction"
        :number-destiny="numberDestiny"
        :currency="currency"
        :banco="banco"
      />
    </div>
  </div>
</template>

<script>
import Topbar from "~/shared/ui/components/Layouts/Dashboard/Topbar.vue";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancySend from "@/modules/constans/components/ConstancySend.vue";
import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";

export default {
  components: { Topbar, BaseCard, BaseText, ConstancySend, DetalleTransfer },

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
