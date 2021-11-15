
![](https://storage.googleapis.com/kambista-vouchers/log.png)

Proyecto base en [vue](https://vuejs.org/v2/guide/) y [nuxt](https://nuxtjs.org/docs/get-started/installation) para construir proyectos frontend utilizando un diseño de sistema basado en restricciones y consistencia.

- [Empezando](#Empezando)
- [Comandos de uso](#Comandos-de-uso)
- [Estructura](#Estructura)
- [Componentes](#Componentes)
- [Otros detalles](#Otros-detalles)

## Empezando

```
npm install 
yarn install
```

> Se recomienda usar yarn como gestor de paquetes.


## Comandos de uso
#### Ver documentación

En case de observar la documentación más detallada ejecute uno de los siguientes comandos dentro de la carpeta docs.

```
npm install
npm run docs:dev
```

#### Instalar dependencias de desarrollo

```
// con yarn
yarn install 

// con npm
npm install 
```

#### Ver en modo desarrollo

```
npm run dev
```


#### Construir proyecto para producción

```
npm run build // generar web con ssr
npm run generate // generar web estática
```


## Estructura
  - core: Capa de servicios externos
  - constants: Constantes o tipos reusables en todo el proyecto
  - modules: Cada módulo sigue una estructura de componentes, utilidades, secciones y puntos de entrada.

```
modules
└── calculator
    ├── components
    ├── sections
    ├── services
    ├── mixins
    ├── Main.vue
    ├── utils.js
    └── constants.js
```

  - shared: Componentes y datos compartidos en toda el proyecto. Se encuentra dividido en 2: ui y modules.
  La carpeta _**ui**_ contiene todas las utilidades componentes y mixins que no involucran servicios externos.
  La carpeta _**modules**_ Sigue una estructura igual que el punto anterior pero pueden acceder a distintas partes de la aplicación.

## Componentes

  Componentes base reutilizables. Estos componentes están enfocados en el sistema de diseño como parte de la identidad.

  - [BaseCard](./components/BaseCard.md)
  - [Button](./components/Button.md)
  - [Checkbox](./components/Checkbox.md)
  - [Clipboard](./components/Clipboard.md)
  - [Dropdown](./components/Dropdown.md)
  - [Highlight](./components/Highlight.md)
  - [Input](./components/Input.md)
  - [Layouts](./components/Layouts.md)
  - [Loading](./components/Loading.md)
  - [Modal](./components/Modal.md)
  - [Radio](./components/Radio.md)
  - [Select](./components/Select.md)
  - [Typography](./components/Text.md)
  - [Upload](./components/Upload.md)

## Otros detalles

- **vue-material-icons** Librería de iconos: https://github.com/robcresswell/vue-material-design-icons
- **tailwindCSS** Framework de estilos principal: https://tailwindcss.com/
- **date-fns** Librería para manipular fechas: https://date-fns.org/
- **lodash** Librería para manipular datos: https://lodash.com/