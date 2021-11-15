# Typography

La fuente tipografica está compuesta por 4 componentes de texto principales, TextTitle, TextSubtitle, TextParagraph, BaseText. Cada uno poseen las mismas características como fontSize, weigh, variant.

Cada uno recibe las mismas propiedades dando diferentes resultados.
El componente de texto mas genérico es BaseText cual comparte propiedades comúnes entre los demás.


## BaseText

```html
<template>
  <BaseText>
     Hello 
  </BaseText>
</template>
```

### Propiedades

```text```

Por defecto puede agregar un contenido dentro del componente. Sin embargo, si solo se quiere poner un texto sin mayor lógica es recomendable usar esta propiedad.

```variant```

Cambiar el color de texto.

Opciones:
* normal (default)
* neutral
* inherit

```weight```

Cambiar el tamaño de la fuente.

Opciones:
* normal (default)
* medium
* bold

```underline```

Crear decoración en el texto con borde debajo.

```as```

Cambiar la etiqueta por defecto usa **p**.

```fontSize```

Modificar el tamaño de la fuente del texto.

Opciones:
* 20 
* 50 (default)
* 100
* 200
* 300

```alignment```

Alinear el texto, por defecto se encuentra a la izquierda.

Opciones:
* left (default)
* center
* right

## TextTitle 

```html
<template>
  <TextTitle text="example text" />
</template>
```

### Propiedades

```font-size```

Opciones:
- ultra-small
- small
- base

## TextSubtitle

```html
<template>
  <TextSubtitle text="example text" />
</template>
```
### Propiedades

```font-size```

Opciones:
- base
- medium
- large
- ultra-large

## TextParagraph

```html
<template>
  <TextParagraph text="example text" />
</template>
```

### Propiedades

```font-size```

Opciones:
- ultra-small
- small
- base