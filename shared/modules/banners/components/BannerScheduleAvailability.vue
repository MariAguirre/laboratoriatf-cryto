<template>
  <div class="hidden lg:inline-block">
    <TextParagraph weight="medium" text="Horario: Lunes a viernes 9:00 am a 7:00 p.m"/>
    <TextParagraph weight="medium" text="Sábados de 09:00 am a 2:00 pm"/>
  </div>
</template>

<script>
import TextParagraph from '~/shared/ui/components/Typography/TextParagraph.vue';
export default {
  components: { TextParagraph },
};
</script>