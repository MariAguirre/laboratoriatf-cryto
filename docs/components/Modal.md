# Modal

```html
<template>
  <Modal v-model="open" />
</template>
<script>
  export default {
    data() {
      return {
        open: false
      };
    }
  };
</script>
```

### Propiedades

```preserve-modal```

Mostrar siempre en formato de modal. Por defecto en mobile el componente aparece de la parte inferior.

```title```

Título del modal.

```closeable```

Permitir mostrar el botón para cerrar el modal.

```closeable-by-backdrop```

Permitir cerrar el modal presionando en el fondo.

```message```

Añadir un mensaje al modal.

```message-alignment```

Alineación del mensaje que se le pasa por defecto en la propiedad 'message'.

```show-underline-drawer```

Valor booleano para mostrar una línea dentro del modal pero sobre el título. Por defecto no se muestra.

### Slots

```header```

Sobrescribir la cabecera del modal.

```html
<Modal v-model="open">
  <template #header>
    <!--Sobrescribir la cabecera del modal -->
  </template>
</Modal>
```

```default```

Contenido del modal, puede usarse en conjunto con el slot **header**.

```html
<Modal v-model="open">
  <template #header>
    header
  </template>
  <h1>main content<h1>
</Modal>
```
