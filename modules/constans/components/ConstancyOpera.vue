<template>
  <div class="flex flex-col items-center ">
    <div
      class="
      font-montserrat
      flex flex-col
      justify-center
      items-center
      bg-white
      w-330
      h-39
      sm:w-719 sm:h-359
    "
    >
      <Modal v-model="open" closeable-by-backdrop>
        <div class="flex flex-col items-center bg-white rounded-xl w-full">
          <div class="flex flex-col w-11/12 sm:w-96">
            <p class="pb-1 text-center text-2xl leading-6 font-normal">
              Ocurrió un error inténtelo nuevamente.
            </p>
            <img src="@/assets/images/error/errorLogin.jpg" alt="question" />
          </div>
        </div>
      </Modal>
      <img
        class="mb-0.5"
        src="@/assets/images/document/document-icon.svg"
        alt=""
      />
      <h1 class="hidden md:block mb-3 font-bold text-2xl text-blue leading-29">
        Envía constancia
      </h1>
      <span
        class="block md:hidden mb-3 font-bold text-2xl-x1 text-blue leading-24 text-center"
      >
        Envía constancia de tu transferencia
      </span>
      <div class="w-full ">
        <label
          for="first-name"
          class="mb-2 font-normal text-x1 w-330 text-center flex justify-center md:p-0"
          >Escribe el código de operación del banco aquí</label
        >
        <div class="flex-col justify-center items-center">
          <Input v-model="codigo" class=" w-330 md:w-410 pt-2 " />
        </div>

        <div class="flex justify-center mb-2 ">
          <img src="@/assets/images/common/question-icon.svg" alt="question" />
          <span
            class="font-medium text-12 w-410 mt-2 md:text-14 flex justify-center tracking-0.03 md:tracking-normal"
            >¿Dónde encuentro el código de operación?</span
          >

          <div class="flex justify-center mb-2">
            <span
              class="font-medium text-12 w-410 mt-2 md:text-14 flex justify-center tracking-0.03 md:tracking-normal"
            >
              <img
                src="@/assets/images/common/question-icon.svg"
                alt="question"
              />
              ¿Dónde encuentro el código de operación?</span
            >
          </div>
          <p
            class="mb-2 font-light md:font-normal text-14 mt-1 md:text-16 md:leading-20 leading-17 p-1 px-8 md:p-0"
          >
            Verificaremos tu operación para enviarte<span>
              {{ transaction.amountEstimated }}
              {{ transaction.destinationCurrency }}</span
            >a tu dirección.
          </p>
        </div>

        <div>
          <Button
            class=" flex justify-center  w-330 md:w-410 mt-6 h-50 "
            :disabled="disabled"
            :loading="loading"
            text="ENVIAR CONSTANCIA"
            @click.native="sendconstancia"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/shared/ui/components/Input.vue";
import Button from "@/shared/ui/components/Button/Button.vue";
import Modal from "@/shared/ui/components/Modal/Modal.vue";
import { mapState } from "vuex";

export default {
  components: { Input, Button, Modal },
  data() {
    return {
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
  methods: {
    async sendconstancia() {
      this.loading = true;
      try {
        const id = this.transaction.id;
        await this.$services.transaction.checkTransaction(
          { voucher: this.codigo },
          localStorage.getItem("token"),
          id
        );
        this.$router.push({ path: "confirmacion" }, console.log, console.log);
      } catch (err) {
        this.open = true;
        this.loading = null;
      }
    }
  }
};
</script>
