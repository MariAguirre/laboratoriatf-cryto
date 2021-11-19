<template>
  <div class="flex flex-col">
    <div
      class="
      font-montserrat
      flex flex-col
      justify-center
      items-center
      bg-white
      backdrop-blur-sm
      "
    >
      <Modal v-model="open" closeable-by-backdrop>
        <div class="flex flex-col items-center bg-white rounded-xl">
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
      <h1 class="mb-4 font-bold text-24 text-blue leading-29">
        Envía constancia
      </h1>
      <fieldset class="w-277 sm:w-auto">
        <div>
          <p
            class="pl-3 mb-5 font-normal text-16 leading-20 text-left sm:text-center"
          >
            Selecciona una forma de envío de la constancia de tu transferencia
          </p>
        </div>
        <div class="flex flex-col mt-4 space-y-2 items-center">
          <div
            class="flex flex-col inputContainer justify-center items-center w-306 sm:w-396"
          >
            <div class="flex w-full py-5">
              <input
                id="push-upload"
                v-model="checked"
                value="uploadFile"
                name="push-notifications"
                type="radio"
                class="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                @change="handlingChecked"
              />
              <label
                for="push-upload"
                class="ml-3 w-5/6 text-14 sm:text-16 font-normal text-blue leading-24 tracking-wider"
              >
                Enviar una imagen del voucher
              </label>
            </div>
            <div v-if="check" class="block w-full pb-3">
              <div class="text-sm text-grey">
                <label
                  for="file-upload"
                  class="
                  w-250
                  sm:w-330
                  h-50
                  relative
                  cursor-pointer
                  border-border-upload border-1
                  rounded-md
                  font-medium
                  text-grey
                  hover:text-indigo-500
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500
                  flex flex-row
                  justify-around
                  items-center
                "
                >
                  <span v-if="image">Adjunta una imagen</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only w-4 h-4"
                    @change="captureFile"
                  />
                  <span v-if="imageUpload">{{ fileName }}</span>
                  <img
                    src="@/assets/images/common/upload-icon.svg"
                    alt="upload"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="flex items-center inputContainer ">
            <input
              id="push-email"
              v-model="checked"
              value="email"
              name="push-notifications"
              type="radio"
              class="focus:ring-indigo-500 h-4 w-4  text-indigo-600 border-gray-300"
              @change="handlingChecked"
            />
            <label
              for="push-email"
              class="ml-3  text-14 w-396 h-70 sm:text-16 font-normal text-blue leading-24 tracking-wider"
            >
              Enviar comprobante por correo
              <a
                class="underline font-bold w-5/6 tracking-wider text-blue leading-24 text-14 sm:text-16"
                >operaciones@kambista.com</a
              >
            </label>
          </div>
        </div>
      </fieldset>
      <div class="flex items-center mt-8">
        <input
          id="check"
          name="remember-me"
          type="checkbox"
          :value="true"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          @change="handlingInmediate"
        />
        <label
          for="check"
          class="ml-2 font-normal text-12 sm:text-14 text-gray-2 leading-15 w-396 h-70 sm:w-auto"
        >
          Realicé una
          <b class="text-12 sm:text-14 text-gray-2 leading-15"
            >transferencia interbancaria</b
          >
          inmediata a la cuenta de Kambista</label
        >
      </div>
    </div>
    <Button
      class="mt-8 w-410 text-right"
      :disabled="disabled"
      :loading="loading"
      text="ENVIAR CONSTANCIA"
      @click.native="sendconstancia"
    />
  </div>
</template>
<script>
import Button from "@/shared/ui/components/Button/Button.vue";
import Modal from "@/shared/ui/components/Modal/Modal.vue";
import { mapState } from "vuex";

export default {
  components: {
    Button,
    Modal
  },
  props: {},
  data() {
    return {
      checked: "",
      check: false,
      image: true,
      imageUpload: true,
      fileName: "",
      open: false,
      inmediate: false,
      file: "",
      loading: null
    };
  },
  computed: {
    ...mapState(["transaction", "quote", "check"]),
    disabled() {
      return !(this.checked !== "");
    }
  },
  methods: {
    handlingChecked(e) {
      if (e.target.value === "uploadFile") {
        this.checked = e.target.value;
        this.check = true;
        this.$emit("send", this.checked);
      } else {
        this.check = false;
        this.image = true;
        this.imageUpload = false;
      }
    },
    handlingInmediate(e) {
      this.inmediate = e.target.value;
    },
    captureFile(e) {
      this.image = false;
      this.imageUpload = true;
      this.file = e.target.files[0];
      this.fileName = e.target.files[0].name;
    },
    async sendconstancia() {
      this.loading = true;
      try {
        if (this.checked === "uploadFile") {
          const data = new FormData();
          data.append("image", this.file);
          const id = this.transaction.id;
          const img = await this.$services.file.uploadFile(
            data,
            localStorage.getItem("token")
          );
          await this.$services.transaction.checkTransaction(
            { voucherImage: img.data.data.url, immediate: this.inmediate },
            localStorage.getItem("token"),
            id
          );
          this.$router.push({ path: "confirmacion" }, console.log, console.log);
        } else {
          const id = this.transaction.id;
          await this.$services.transaction.checkTransaction(
            { voucherEmail: true, immediate: this.inmediate },
            localStorage.getItem("token"),
            id
          );
          this.$router.push({ path: "confirmacion" }, console.log, console.log);
        }
      } catch (err) {
        this.loading = null;
        this.open = true;
      }
    }
  }
};
</script>
<style scoped>
.inputContainer {
  padding-left: 29px;
  border-radius: 8px;
  border: 1px solid #e0e4eb;
  box-sizing: border-box;
}
</style>
