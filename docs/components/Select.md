# Select

```html
<template>
  <Select
    v-model="country"
    :options="countries"
  />
</template>
<script>
  const countries = [
    { value: "pe", name: "Peru" },
    { value: "mex", name: "Mexico" }
  ];
  export default {
    data() {
      return {
        country: "pe",
        countries
      };
    }
  };
</script>
```

### Propiedades

`label`

Nombre del control para detallar la información.

`helper`

Texto de ayuda para el usuario.

`placeholder`

Valor por defecto cuando no se selecciono una opción.

`disabled`

Valor booleano que habilita o deshabilita el uso del selector.

`options`

Array de objetos para el selector.

`render-text`

Función para mostrar un texto personalizado en las opciones. Recibe una función que devuelve un valor para mostrar
en la opción.

```html
<Select :render-text=" e => `(${e.value}) ${e.name}`" />
```

`render-value`

Función para asignar una lista de claves en el valor. Por ejemplo el valor será la propiedad nombre.

```html
<Select :render-value=" e => e.name" />
```

`custom`

Personalizar componente para renderizar datos más complejos.

```html
<Select custom v-model="country">
  <template #currentOption="e">
    {{e}}
  </template>
  <template #option="e">
    <i>{{e}}</i>
  </template>
</Select>
```