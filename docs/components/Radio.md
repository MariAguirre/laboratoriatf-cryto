# Radio

```html
<template>
  <div>
    <Radio v-model="letter" value="option-a" name="letter" />
    <Radio v-model="letter" value="option-b" name="letter" disabled />
    <Radio v-model="letter" value="option-c" name="letter" />
  </div>
</template>
```

### Propiedades

```value```

Valor del componente

```name```

Requerido por semántica de los componentes.

```size```

Cambiar el tamaño del botón.

Propiedades:
* sm
* md (default)
* lg

```disabled```

Valor booleano para habilitar o deshabilitar el componente.