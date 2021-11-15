# Dropdown

```html
<template>
  <Dropdown>
    <template #emit="{ onToggle, open }">
      <button @click="onToggle">
        {{open ? "cerrar" : "abrir" }}
      </button>
    </template> 
    <template #subscribe="{ onClose }">
      <button @click="onClose">cerrar</button>
    </template>
  </Dropdown>
</template>
```

### Slots

```emit```

Slot para poder emitir un evento.

```html
  <Dropdown>
    <template #emit="{ onToggle, open }">
      <button @click="onToggle">
        {{open ? "cerrar" : "abrir" }}
      </button>
    </template>
  </Dropdown>
```

```subscribe```

Contenido el cuál se mostrara dependiendo el **emit**.

```html
  <Dropdown>
    <template #subscribe="{ onClose }">
      <button @click="onClose">cerrar</button>
    </template>
  </Dropdown>
```