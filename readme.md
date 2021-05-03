# Indicaciones de uso para organizacion de archivos

## framework css propietario
Dentro de la carpeta *'settings'* se encuentras las bases de la configuracion del framework propietario.
- Cualquier cambio se realizara desde los archivos de las carpetas *'variables'* y *'base'*
- Posteriormente se ejecutaran desde consola utilizando el comando:
    > npm run build-framework
- se realizarán todos los cambios correspondientes y se terminará el proceso presionando **CTRL + c**
- Los cambios realizados y compilados se encontrarán en la el archivo **base.css**

- tener en cuenta que, luego de clonar este repositorio se debe modificar el archivo *.gitignore* agregando:
    > settings
    para que no se refleje en el contenido del repositorio


## creacion de estilos
Dentro de la carpeta *public/scss* se encuentra todos los archivos de scss.
- Cada pagina que se agrega al proyecto, se escribe en un archivo nuevo en la carpeta *'pages'* y se importa a *'main.scss'*
- Se procederá a ejecutar el comando:
    > npm run build-css
- se realizarán todos los cambios correspondientes y se terminará el proceso presionando **CTRL + c**
- Los cambios realizados y compilados se encontrarán en la el archivo **styles.css**
- Dentro del archivo *'componentes.scss'* se escribiran los estilos de los componentes que se repiten en todas las paginas, tales como el navbar y el footer
- Dentro de mixins, iremos agregando los mixins necesarios para agregar atajos que puedan servir en todo el proyecto

## Organizacion de js
La idea es que cada pagina tenga una carpeta especial que nos permita diferenciarlas en los aspectos generales:
- cada carpeta debe tener un archivo **main.js** donde se alojaran los llamados a las funciones principales y la declaracion de las variables y objetos necesarios
- Ademas tendremos dos archivos llamados **funciones.js** y **dom.js** que contendran:
    - **funciones.js:** tendra cada funcion logica que requiera el proyecto 
    - **dom.js:** tendra las modificaciones del dom que se requiera hacer con js
- Por ultimo, tendremos un archivo llamado **general.js** que contendran las funciones que se repiten tales como:
    - enviar elementos a local storage y session storage, ademas de llamar info dede el storage
    - crear o modificar nodos
    - llamados de ajax general
    - etc

## scripts 
Dentro de los scripts de **package.json** se podran agregar dependecias y scripts segun sea necesario.

### el proyecto o estructura esta abierta a cambios, cualquier consulta o sugerencia será recibida