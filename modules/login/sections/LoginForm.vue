<template>
  <section>
    <Modal v-model="open" closeable-by-backdrop>
      <div class="flex flex-col items-center bg-white rounded-xl w-full">
        <div class="flex flex-col w-11/12 sm:w-96">
          <p class="pb-1 text-center text-2xl leading-6 font-normal">
            {{ errorMessage }}
          </p>
          <img src="@/assets/images/error/errorLogin.jpg" alt="question" />
        </div>
      </div>
    </Modal>
    <form ref="customerForm" @submit.prevent="handleSubmit">
      <KInput
        v-model="email.value"
        :element-id="email.id"
        :validators="email.validators"
        label="Correo"
        placeholder="Escribe tu correo"
        size="lg"
        :helper="email.helper"
        @is-valid="isValidInput"
      />
      <KInput
        v-model="password.value"
        :element-id="password.id"
        :validators="password.validators"
        type="password"
        label="Contraseña"
        placeholder="Escribe tu contraseña"
        size="lg"
        class="mt-5 sm:mt-6"
        :helper="password.helper"
        @is-valid="isValidInput"
      />
      <KButton
        text="Iniciar Sesión"
        size="lg"
        class="w-full mt-8"
        :disabled="disabled"
        :loading="loading"
      />
    </form>
  </section>
</template>

<script>
import KInput from "@/shared/ui/components/Input.vue";
import KButton from "@/shared/ui/components/Button/Button.vue";
import { is } from "@/shared/ui/utils/validators";
import Modal from '@/shared/ui/components/Modal/Modal.vue';

export default {
  components: {
    KInput,
    KButton,
    Modal
  },
  data() {
    return {
      email: {
        value: "",
        isValid: false,
        validators: [is.required("correo"), is.email()],
        helper: "",
        id: "email"
      },
      password: {
        value: "",
        isValid: false,
        validators: [is.required("contraseña"), is.minLength(6)],
        helper: "",
        id: "password"
      },
      loading: null,
      open: false,
      errorMessage: ""
    };
  },
  computed: {
    disabled() {
      return !(this.email.isValid && this.password.isValid);
    }
  },
  mounted() {},
  methods: {
    isValidInput(e) {
      const { validInput, id } = e;
      this[id].isValid = validInput;
    },
    goToHome() {
      window.location.href = "/";
      this.loading = false;
    },
    async handleSubmit() {
      this.loading = true;
      let formData = {
        email: this.email.value,
        password: this.password.value
      };
      try {
        const data = await this.$services.login.login(formData);
        if (data.status == 200) {
          const utils = await this.$services.utils2.findUtils();
          localStorage.setItem("utils", JSON.stringify(utils));
          localStorage.setItem("dataLogin", JSON.stringify(data.data.data));
          localStorage.setItem("token", data.data.data.token);
          this.goToHome();
        } else if (data.status == 400) {
          this.loading = false;
          this.open = true;
          this.errorMessage = data.data.error.message;
        }
      } catch (error) {
        this.loading = false;
        this.open = true;
        this.errorMessage = "¡Ups! Sucedió un error, inténtelo nuevamente.";
      }
    }
  }
};
</script>
