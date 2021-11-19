<template>
  <div>
    <div>
      <Topbarflow3 class="hidden sm:block" variant="light" show-logo show-nav />
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
  </div>
</template>

<script>
import Topbarflow3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflow3.vue";
<<<<<<< HEAD
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
=======
>>>>>>> af4fbc3a56011007c6f985cc289896557d5cb582
import BaseText from "@/shared/ui/components/Typography/BaseText.vue";
import ConstancyOpera from "@/modules/constans/components/ConstancyOpera.vue";
import Topbarflowsm3 from "~/shared/ui/components/Layouts/Dashboard/Topbarflowsm3.vue";
import DetalleTransfer from "@/modules/transferir/DetalleTransfers.vue";
import { mapState } from "vuex";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";

export default {
  components: {
    BaseText,
    ConstancyOpera,
    Topbarflow3,
    Topbarflowsm3,
    DetalleTransfer,
    BaseCard
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
    ...mapState(["transaction", "quote"]),
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
    showDetail() {
      this.open = true;
    },
    closeDetail() {
      this.open = false;
    },
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
