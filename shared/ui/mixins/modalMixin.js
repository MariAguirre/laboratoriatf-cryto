
export default {
  data() {
    return {
      error: {
        title: "",
        message: ""
      },
      modalOpen: false,
      modalType: "general"
    };
  },
  methods: {
    getModalData({ modalOpen, errorModal, modalType }) {
      this.modalOpen = modalOpen;
      this.error.title =
        errorModal.title || "Ocurrió un error inesperado, inténtelo más tarde";
      this.error.message = errorModal.message;
      this.modalType = modalType || "general";
    },
    goLogin() {
      this.modalOpen = false;
      this.$router.push({
        path: "/login"
      });
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
};
