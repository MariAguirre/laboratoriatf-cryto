<template>
  <div>
    <div>
      <Topbarflow class="hidden sm:block" variant="light" show-logo show-nav />
    </div>
    <div>
      <Topbarflowsm
        class="block sm:hidden"
        variant="light"
        show-logo
        show-nav
      />
    </div>

    <div
      class="
      flex flex-col
      justify-center
      items-center
      backdrop-blur-sm
      m-2 sm:m-4
    "
    >
      <div>
        <TextTitle
          class="flex mt-6 md:text-2xl text-center sm:text-center"
          text="Completa los datos de tu operación"
        />
      </div>
      <BaseCardData :base-data="baseData" class="w-96  h-40 mt-4" />
      <Highlight
        class="mt-6 w-96"
        title="Tiempo estimado de espera"
        :delay="delay"
      />

      <BaseText
        class=" mt-4 text-left"
        text="¿Desde qué banco nos envías tu dinero?"
      />
      <Select class="mt-1 w-96 bg-white " />
      <BaseText text="¿A qué dirección enviamos tus criptomonedas?" />
      <Select :options="dataBank" class="mt-1 w-96 bg-white" />
      <BaseText text="Origen de fondos" />
      <Select class="mt-1 w-96 bg-white" />

      <Button disabled class="w-96 mt-3" text="Continuar" />
    </div>
  </div>
</template>

<script>
import Topbarflow from "~/shared/ui/components/Layouts/Dashboard/Topbarflow.vue";
import Topbarflowsm from "~/shared/ui/components/Layouts/Dashboard/Topbarflowsm.vue";
import TextTitle from "~/shared/ui/components/Typography/TextTitle.vue";
import BaseText from "~/shared/ui/components/Typography/BaseText.vue";
import BaseCardData from "../modules/data/BaseCardData.vue";
import Select from "~/shared/ui/components/Select.vue";
import Button from "~/shared/ui/components/Button/Button.vue";
import Highlight from "~/shared/ui/components/Highlight.vue";
export default {
  components: {
    Topbarflow,
    Topbarflowsm,
    Select,
    TextTitle,
    BaseCardData,
    Button,
    Highlight,
    BaseText
  },
  data() {
    return {
      send: "",
      received: "",
      coinSend: "",
      coinReceived: "",
      currentChangeBTC: "",
      currentChangeDolars: "",
      banks: "",
      keySegurity: "",
      origin: "",
      baseData: {},
      delay: 0,
      dataBank: [
        { value: "bcp", name: "BCP", imagen: "" },
        { value: "Interbank", name: "Interbank", imagen: "" }
      ]
    };
  },
  mounted() {
    this.getdata();
    this.getdataUtil();
  },
  methods: {
    getdata() {
      const dataJ = JSON.parse(localStorage.getItem("quote"));
      console.log(dataJ);
      this.baseData = dataJ;
      this.delay = dataJ.delay;
      // (this.currencyOrigin = dataJ.mountOrigin),
      //   (this.currencyReceived = dataJ.mountDestiny),
      //   (this.coinOrigin = dataJ.currencyOrigin),
      //   (this.coinReceived = dataJ.currencyDestiny),
      //   (this.valueCurrentDolars = dataJ.exchangeTwo),
      //   (this.valueCurrentBTC = dataJ.exchangeOne),
      //   (this.delayCurrent = dataJ.delay);
    },
    getdataUtil() {
      const dataJUtils = JSON.parse(localStorage.getItem("utils"));
      console.log(dataJUtils);
    }
  }
};
</script>
