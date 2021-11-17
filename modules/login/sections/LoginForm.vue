<template>
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
    <RecoveryPasswordTitle/>
    <KButton
      text="Iniciar Sesión"
      size="lg"
      class="w-full mt-8"
      :disabled="disabled"
      :loading="loading"
    />
  </form>
</template>

<script>
import KInput from "@/shared/ui/components/Input.vue";
import KButton from "@/shared/ui/components/Button/Button.vue";
import { is } from "@/shared/ui/utils/validators";
import RecoveryPasswordTitle from '../components/RecoveryPasswordTitle.vue';


export default {
  components: {
    KInput,
    KButton,
    RecoveryPasswordTitle
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
      loading: null
    };
  },
  computed: {
    disabled() {
      return !(this.email.isValid && this.password.isValid);
    }
  },
  mounted() {
  },
  methods: {
    isValidInput(e) {
      const { validInput, id } = e;
      this[id].isValid = validInput;
    },
    async handleSubmit() {
      let formData = {
        email: this.email.value,
        password: this.password.value
      };
      const data = await this.$services.login.login(formData);
      console.log(data);
      if(data.status == 200){
        localStorage.setItem('dataLogin', JSON.stringify(data.data.data));
        localStorage.setItem('token', data.data.data.token);
        //aca agregar dirigir a home
      }

    },
  }
};
</script>
