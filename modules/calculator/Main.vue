<template>
  <div>
    <div class="flex">
      <Button text="Compra" />
      <Button text="Venta" />
    </div>
    <BuyComponent />
  </div>
</template>

<script>
import BuyComponent from "./sections/BuyComponent.vue";
import Button from "@/shared/ui/components/Button/Button.vue";

export default {
  components: {
    BuyComponent,
    Button
  },
  created() {}
};
</script>
