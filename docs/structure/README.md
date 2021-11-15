# Estructura

- core: Capa de servicios externos

```
core
├── domain
│   ├── models
│   └── repositories
│       ├── analytic
│       └── exchange
└── infrastructure
    ├── http
    │   ├── AnalyticService.ts
    │   └── ExchangeService.ts
    └── loaders
```

- constants: Constantes o tipos reusables en todo el proyecto
- modules: Cada module sigue una estructura de componentes, utilidades, secciones y puntos de entrada. La estructura de carpetas de cada módulo es en caso de que sea muy grande. Sin embargo, es opcional omitir carpetas que vea conveniente.

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
  La carpeta **ui** contiene todas las utilidades componentes y mixins que no involucran servicios externos.
  La carpeta **modules** Sigue una estructura igual que el punto anterior pero pueden acceder a distintas partes de la aplicación.
