# Dashboard components

- MainContent
- MainContentBody
- RootContent
- Sidebar
- Topbar

## Topbar
### Propiedades

```variant```

Opciones:
- default
- light

```show-logo```

Mostrar o mostrar el logo de Kambista. Por defecto no se aplica.

```auto-content```

Se se desea obtener un espacio interno, entonces use esta propiedad. 

### Uso

```html
<RootContent>
  <Sidebar>
    sidebar example
  </Sidebar>
  <MainContent>
    <Topbar>
        topbar
    </Topbar>
    <MainContentBody>
        main content
    </MainContentBody>
  </MainContent>
</RootContent>
```
