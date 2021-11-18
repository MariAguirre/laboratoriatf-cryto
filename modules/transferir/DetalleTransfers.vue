<template>
  <div
    class="         
      flex-col
      bg-white                
    "
  >
    <div class="md:p-2">
      <h1 class="font-normal text-14">
        DETALLE DE TU OPERACIÓN
      </h1>
      <div class="mt-4">
        <p>Origen</p>
        <p class="mt-2">
          {{ data3 ? (data3.bankId ? data3.bankId : "no funciona") : "" }}
        </p>
      </div>
      <div class="mt-4">
        <p>Direccion de destino {{ currency }}</p>
        <p class="mt-2 truncate md:overflow-ellipsis">
          {{ numberDestiny }}
        </p>
      </div>
      <div class="mt-4">
        <h2 class="font-bold mt-2">Monto</h2>
        <p class="mt-2">
          Enviado:
          <span>{{ data2.mountOrigin }} {{ data2.currencyOrigin }}</span>
        </p>
        <p class="mt-2">
          Recibido:
          <span>{{ data2.mountDestiny }} {{ data2.currencyDestiny }}</span>
        </p>
      </div>
      <div class="mt-6">
        <p class="font-bold">
          1{{ data2.currencyDestiny }} = {{ data2.exchangeOne }}
          {{ data2.currencyOrigin }}
        </p>
        <p class="mt-2 font-bold">
          1{{ data2.currencyOrigin }} = {{ data2.exchangeTwo }}
          {{ data2.currencyDestiny }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    data2: {
      type: Object,
      default() {
        return {};
      }
    },
    data3: {
      type: Object,
      default() {
        return {};
      }
    },
   }
};
</script>
