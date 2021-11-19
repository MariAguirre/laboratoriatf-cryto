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
    <div class="Grid grid-flow-col">
      <div class=" flex-col justify-center">
        <BaseCard class=" flex-col justify-center items-center p-14 w-400 md:w-719 h-359" text="">
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
                  text-2xl-x1 text-blue
                  leading-24
                  text-center
                  

                "
              >
                Envía constancia de tu transferencia
              </span>
              </div>
             
              <div class="w-full flex-col items-center">
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
                <div class="flex-col w-full items-center">
                  <Input v-model="codigo" class="w-330 md:w-410" />
                </div>
                <div class="flex-col justify-between items-center ">
                  <img class="w-5 mt-4 ml-16 -mr-8"
                    src="@/assets/images/common/question-icon.svg"
                    alt="question"
                  />
               
               v>             
                  <p
                    class="                      
                      font-light
                      md:font-normal
                      text-14
                      mt-1
                      md:text-16 md:leading-20
                      leading-17
                      flex-col 
                      items-center
                      
                      
                    "
                  >
                    Verificaremos tu operación para enviarte<span>
                      {{ transaction.amountEstimated }}
                      {{ transaction.destinationCurrency }}</span
                    >a tu dirección.
                  </p>
                
              </div>
            </div>
          </div>
        </BaseCard>
        <div class="flex-col justify-center items-center">
          <Button
            class="mt-8 ml-80 w-410 mb-10 justify-center items-center"
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
      loading: null,
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"]),
    disabled() {
      return !(this.codigo !== "");
    },
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
    },
  },
};
</script>
