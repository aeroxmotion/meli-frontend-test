# MeLi front-end Test

## Tabla de contenido (TOC)

1. [Estructura del proyecto](#scaffolding)
2. [Ejecución del proyecto](#dev)
3. [Ejecución de pruebas end-to-end](#e2e)
4. [Stack de tecnologías usadas](#stack)

## <a name="scaffolding"></a> Estructura del proyecto

El proyecto parte de una arquitectura base de [Next.js](https://nextjs.org/).
A continuación detallo cada una de las carpetas y su propósito en el proyecto:

### Carpeta `/__test__`

- **Sub-carpeta `ui`**: Contiene las pruebas end-to-end para probar la interfaz del usuario.
- **Sub-carpeta `api`**: Contienes las pruebas end-to-end que prueban el API custom de MercadoLibre.

### Carpeta `/clients`

Aquí se alojan los clientes consumidos por la UI y por el API custom.

**MeLiClient**: Se encarga de consumir el API proveída de MercadoLibre.

**ProxyClient**: Es el cliente encargado de consumir el API custom creada para ser consumida por la UI.

### Carpeta `/components`

Contienes los componentes usados a través de la UI. Siguen una nomenclatura basada en la [guía de estilo de Vue.js](https://vuejs.org/v2/style-guide), dónde los componentes que se encuentran en la sub-carpeta `common`, son aquellos que se instancian múltiples veces en una misma página/vista, y los que se encuentran en la sub-carpeta `singleton` son aquellos que sólo se instancian una vez por página/vista.

### Carpeta `/config`

Aloja la configuración global de la aplicación. `variables de entorno`, `configuración de rutas`, etc.

### Carpeta `/hooks`

Contiene los hooks de React que pueden ser usados tanto en las `pages` como en los `components`.

### Carpeta `/pages`

Aloja las páginas (`pages` sufijadas con `.page`) de la UI y el API custom (rutas del API sufijadas con `.api`)

### Carpeta `/public`

Aloja los assets usados en la UI

### Carpeta `/styles`

Contiene los estilos globales de la aplicación usando una arquitecura basada en `ITCSS`.

### Carpeta `/utils`

Aloja utilidades para ser usadas a través de toda la aplicación.

## <a name="dev"></a> Ejecución del proyecto

Una vez clonado el proyecto, es necesario instalar [Yarn v1](https://classic.yarnpkg.com/lang/en/), usando el comando:

```bash
$ npm i -g yarn
```

Ahora, se deben instalar las dependencias usando el comando:

```bash
$ yarn
```

**Nota:** es posible instalar las dependencias usando `npm`, pero esto impediría que se ejecuten las pruebas end-to-end (_siguiente sección_).

Después de instaladas las dependencias, para correr el proyecto se debe usar el siguiente comando:

```bash
$ yarn dev
```

Lo anterior iniciará un servidor corriendo sobre `http://localhost:3000`

## <a name="e2e"></a> Ejecución de pruebas end-to-end

Una vez instaladas las dependencias (_anterior sección_), se usa el siguiente comando para ejecutar las pruebas e2e:

```bash
$ yarn test
```

**Nota:** En Windows se recomienda ejecutar el comando anterior con `Git Bash` (_en otras terminales puede que no funcione_).

## <a name="stack"></a> Stack de tecnologías usadas

### UI y API

- **React**
- **SASS**
- [Next.js](https://nextjs.org)

### Tests E2E

- [Playwright](https://playwright.dev)
- [Jest](https://jestjs.io)
