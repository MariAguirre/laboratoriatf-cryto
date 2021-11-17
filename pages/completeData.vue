<template>
  <section>
    <Loader v-if="openLoader" class="h-full w-full bg-white" />
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
      <BaseCardData :base-data="dataQuote" class="w-96  h-40 mt-4" />
      <Highlight
        class="mt-6 w-96"
        title="Tiempo estimado de espera"
        :delay="delay"
      />

      <BaseText
        class=" mt-4 text-left"
        text="¿Desde qué banco nos envías tu dinero?"
      />
      <Select :options="banks" class="mt-1 w-96 bg-white " />
      <BaseText text="¿A qué dirección enviamos tus criptomonedas?" />
      <Select :options="keySeguritys" class="mt-1 w-96 bg-white" />
      <BaseText text="Origen de fondos" />
      <Select class="mt-1 w-96 bg-white" />

      <Button disabled class="w-96 mt-3" text="Continuar" />
    </div>
  </section>
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
import Loader from "@/shared/ui/components/Loading/LoadingScreen.vue";
import logger from "@/shared/ui/utils/logger.ts";

export default {
  components: {
    Topbarflow,
    Topbarflowsm,
    Select,
    TextTitle,
    BaseCardData,
    Button,
    Highlight,
    BaseText,
    Loader
  },
  data() {
    return {
      keySeguritys: [],
      dataQuote: {},
      dataUtils: {},
      delay: 0,
      banks: [
        { value: "bcp", name: "BCP", imagen: "" },
        { value: "Interbank", name: "Interbank", imagen: "" }
      ],
      openLoader: true
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.dataQuote = JSON.parse(localStorage.getItem("quote"));
      this.dataUtils = JSON.parse(localStorage.getItem("utils"));
      this.delay = this.dataQuote.delay;
      this.banks = this.dataUtils;
      logger.info(this.dataUtils);
      this.openLoader = false;
    }
  }
};
</script>
