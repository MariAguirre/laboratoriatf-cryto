# Input

```html
<template>
  <input v-model="username" />
</template>
<script>
  export default {
    data() {
      return {
        username: ""
      };
    }
  };
</script>
```

### Propiedades

```label```

Texto del label para el componente.

```helper```

Texto de ayuda.

```type```

Si el componente es tipo text o password. Por defecto toma el valor de **text**.

```inlineHelper```

Texto que acompaña a la propiedad **label** (opcional).

```placeholder```

Valor por defecto mientras no se escribe ningún texto en el componente.

```disabled```

Valor booleano para habilitar o deshabilitar el componente.

```size```

Cambiar el tamaño del botón.

Propiedades:

- sm
- lg

```element-id```

Identificador para el componente.

```validators```

Arreglo de validaciones. Puedes pasar un dato que posteriormente puede ser modificando para cambiar ciertas validaciones.


Ejemplo de uso aplicando validaciones.

```html
<template>
  <input
    v-model="email.value"
    :element-id="email.id"
    :validators="email.validators"
    placeholder="Escribe tu correo"
    label="Correo"
    size="lg"
    @is-valid="isValidInput"
  />
</template>
<script>
  import { is } from "@/shared/ui/utils/validators";
  import KInput from "@/shared/ui/components/Input.vue";

  export default {
    components: {
      KInput
    },
    data() {
      return {
        email: {
          value: "",
          isValid: false,
          validators: [is.required("correo"), is.email()],
          id: "email"
        }
      };
    },
    methods: {
      isValidInput({ validInput, id }) {
        this[id].isValid = validInput;
      }
    }
  };
</script>
```

### Slots

`prefix-icon`

Icono al comienzo el componente texto.

`sufix-icon`

Icono al final del componente.
