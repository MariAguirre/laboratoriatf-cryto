<template>
  <div>
    <Topbar variant="light" show-logo
      ><div class="hidden lg:inline-block">
        <TextParagraph
          weight="medium"
          text="Horario: Lunes a viernes 9:00 am a 7:00 p.m"
        />
        <TextParagraph
          weight="medium"
          text="Sábados de 09:00 am a 2:00 pm"
        /></div
    ></Topbar>
    <Main />
  </div>
</template>

<script>
import TextParagraph from "~/shared/ui/components/Typography/TextParagraph.vue";
import Topbar from "~/shared/ui/components/Layouts/Dashboard/Topbar.vue";
import Main from "@/modules/confirmacion/Main.vue";

export default {
  components: { Topbar, TextParagraph, Main },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "login" });
    }
  }
};
</script>
