<template>
  <div class="w-340 sm:w-500 m-2 sm:m-4">
    <Topbarflow3 variant="light" show-logo></Topbarflow3>
    <div class=" flex flex-col ">
      <BaseCard text="">
        <ConstancyOpera />
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
      <div
        class="font-montserrat flex flex-col justify-center items-center pt-8"
      >
        <Button text="ENVIAR CONSTANCIA"> </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Topbarflow3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancyOpera from "@/modules/constans/components/ConstancyOpera.vue";
import Button from "@/shared/ui/components/Button/Button.vue";
import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";

export default {
  components: {
    BaseCard,
    BaseText,
    ConstancyOpera,
    Topbarflow3,
    Button,
    DetalleTransfer
  },
  data() {
    return {
      showView: false,
      numberDestiny: "",
      currency: "",
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
