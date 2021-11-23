<template>
  <div class="Grid grid-flow-col">
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
    <div class="">
      <div class=" flex-col justify-center items-center w-full">
        <BaseCard
          class=" flex-col justify-center items-center p-0 sm:p-14 w-404 md:w-719 h-359"
          text=""
        >
        <div>
          <div class=" flex-col items-center ">
            <div
              class="font-montserrat flex flex-col justify-center items-center"
            >
              <img
                class="mb-0.5"
                src="@/assets/images/document/document-icon.svg"
                alt=""
              />
              <h1
                class="
                  hidden
                  md:block
                  mb-3
                  font-bold
                  text-2xl text-blue
                  leading-29
                  justify-center items-center
                "
              >
                Envía constancia
              </h1>
              <div class="flex-col items-center">
                <span
                  class="
                  block
                  md:hidden
                  mb-3
                  font-bold
                  text-2xl text-blue
                  leading-24
                  text-center 
                "
                >
                  Envía constancia de tu transferencia
                </span>
              </div>

              <div class="w-full flex-col items-center justify-center">
                <label
                  for="first-name"
                  class="
                    mb-2
                    font-normal
                    text-x1 
                    flex
                    justify-center                   
                  "
                  >Escribe el código de operación del banco aquí</label
                >

                <Input
                  v-model="codigo"
                  class=" mx-6 sm:mx-20 w-330 md:w-410 mt-6"
                />

                <div class="flex-col justify-between items-center mt-4">
                  
                  <div
                    class="flex justify-center items-center mt-10 px-8 sm:p-0"
                  >
                    <p
                      class="                      
                      font-light
                      md:font-normal
                      text-14
                      md:text-16 md:leading-20
                      leading-17
                      flex-col 
                      items-center
                      justify-center
                      
                    "
                    >
                      Verificaremos tu operación para enviarte
                    </p>
                    <span class="ml-0 sm:ml-2">
                      {{ transaction.amountEstimated }}
                      {{ transaction.destinationCurrency }}
                    </span>
                    <span class="ml-0 sm:ml-2">a tu dirección.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </BaseCard>
        
        <div class="flex flex-col  justify-end sm:ml-72 items-center">
          <Button
            class="mt-8 w-80 sm:w-410 mb-10"
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
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
import { mapState } from "vuex";

export default {
  components: { BaseCard, Input, Button, Modal },
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
