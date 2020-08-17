# Proyecto Final Desarrollo de Aplicaciones Multiplataforma
<img  widht="300" height="200"  src="images/fiuba.png?raw=true">
<BR>

Autor: Lionel Gutiérrez - 2020

[![Maintenance](images/Maintained_-no-red.svg)](#)
[![Ask Me Anything !](images/Ask-me-anything.svg)](#)
[![Typescript](images/typescipt-blue.svg)](#)
[![Javascript](images/Javascript-blue.svg)](#)
[![Node.JS](images/Node.JS-blue.svg)](#)
[![License](images/License-GPL.svg)](#)


# Introducción
El proyecto es el trabajo final con el cual se concluye la materia de Desarrollo de aplicaciones Multiplataforma, de la carrera de Especialización en Internet de las Cosas(CEIot), dictada por la FIUBA.
<BR>El objetivo del mismo es simular un sistema de riego automatizado de un hogar, compuesto por un conjunto de sensores que miden la humedad del suelo. Mientras más seco se encuentra el suelo, más alta es la lectura del sensor. Como referencia, se puede tomar que un valor de 0 a 10 centibares (Cb) significa que el suelo está saturado, de 10 a 30 Cb, el suelo está en capacidad de campo y de 30 a 60 Cb, el suelo está seco y debe regarse de inmediato.
<BR>
<img  widht="200" height="300"  src="images/valores.png?raw=true">
<BR>
En función del valor medido, el sistema deberá permitir abrir una electroválvula para realizar el riego de la zona sensada.

## Características técnicas
El proyecto se implementa como una SPA, utilizando el framework Ionic con typescript para el desarrollo del front-end y node.js para el back-end.
Se utilizarán contenedores y la herramienta docker-compose para el despliegue de la misma.
A continuación, se muestran las pantallas del sistema

# Pantallas del sistema

## Pantalla Principal

![Alt text](/images/pantallaInicial.jpg?raw=true "Pantalla Inicial")

<BR>
En la pantalla principal se muestra el listado de sensores existente en el sistema, junto a información de la ubicación de los mismos.
Se puede hacer click sobre cada uno de los sensores para ver la página de detalle del sensor
<BR>
<BR>

## Pantalla de detalle de sensor

![Alt text](/images/pantallaSensor.jpg?raw=true "Pantalla sensor")
![Alt text](/images/pantallaSensorAbrir.jpg?raw=true "Pantalla sensor Abrir")
<BR>

En esta pantalla se puede visualizar la última medición del sensor. Adicionalmente, si la lectura es mayor a 30 Cb, el sistema permite manipular la electroválvula, abriéndola o cerrándola en función del último estado en que se encuentra la misma.
<BR>
Adicionalmente el sistema permite ver todas las mediciones del sensor y ver el log de riego mediante 2 botones. Finalmente se brinda la opción de volver al listado de sensores.
<BR>

## Pantalla Mediciones

Al hacer click en el botón ![Alt text](/images/botonmediciones.jpg?raw=true "boton mediciones")  de la pantalla de detalle de sensor, el sistema nos muestra la siguiente pantalla:

![Alt text](/images/pantallaMedicion.jpg?raw=true "Pantalla medicion")
En esta pantalla se puede visualizar las mediciones del sensor, ordenadas por fecha. Se muestra el número de medición, la fecha de la medición y el valor medido en ese momento. Además, se cuenta con un botón para volver a la pantalla de detalle del sensor.
<BR>

## Pantalla Log de Riegos

Al hacer click en el botón ![Alt text](/images/botonlogs.jpg?raw=true "boton logs")  de la pantalla de detalle de sensor, el sistema nos muestra la siguiente pantalla:

![Alt text](/images/PantallaLogRiego.jpg?raw=true "Pantalla log riego")
![Alt text](/images/PantallaLogRiegoSDatos.jpg?raw=true "Pantalla log riego sin datos")
<BR>
En esta pantalla se pueden visualizar el log de aperturas y cierres de las electroválvulas asociadas a cada sensor ordenadas por fecha. 
Si la electroválvula todavía no ha sido accionada, el sistema lo indica. Además, se cuenta con un botón para volver a la pantalla de detalle del sensor.


# Correr la aplicación
La aplicación cuenta con un backend y un frontend.
Existen 2 opciones para se ejecución:

## Opción  1 - Script de bash
Para la primer opción basta con ejecutar el script que se encuentra en el directorio principal, llamado "script.sh".
Parado dentro del directorio principal del sistema ejecutar:

```sh
./script.sh
```

El mismo levanta en primer instancia el frontend, espera un tiempo de 20 segundos para asegurar que el mismo levante, y luego levanta el backend.
Esto levanta la aplicación en  ​[http://localhost:8100/home](http://localhost:8100/home), mostrando inicialmente el listado de sensores.
<BR>
En la primer ejecución, dado que se crea la base de datos, el frontend puede levantarse antes que tengamos el backend listo. En este caso se debe refrescar la pantalla principal del sistema en el navegador o reejecutar el script. Sino se puede utilizar la opción 2 para levantar el sistema.


## Opción  2 - comando docker-compose y Ionic Serve

Para poder ejecutar la aplicación se deben realizar 2 pasos:
<BR><BR>
1- Ingresar a la carpeta backend de la solución y ejecutar el siguiente comando:
```sh
docker-compose up
```

Si la ejecución no generó ningún inconveniente, en ​[http://localhost:8000](http://localhost:8000) quedará corriendo el backend de la aplicación y en [http://localhost:8085](http://localhost:8085) se debería poder acceder a PHPMyAdmin para visualizar la base de datos de la aplicación.

2- Ingresar a la carpeta frontend y ejecutar

```sh
ionic serve
```
Esto levanta la aplicación en  ​[http://localhost:8100/home](http://localhost:8100/home), mostrando inicialmente el listado de sensores.

<BR>

## Para detener toda la aplicación se deberá:

### A - Si levantó la aplicación con el script 
1 - Cortar la ejecucición del script con Ctrl + C
<BR>
2 - Para asegurar que los contenedores de docker se paran y eiliminan completamente, ingresar en la carpeta backend y ejecutar el comando siguiente.

```sh
docker-compose down
```
### B - Si levantó la aplicación con docker-compose y ionic serve:

<BR>
1- en la carpeta frontend finalizar con Crtl+C la ejecución del comando ionic serve

2- en la carpeta backend ejecutar el comando siguiente.

```sh
docker-compose down
```


# Detalles técnicos de la aplicación - Estructura de Directorios de la aplicación

La aplicación cuenta con un backend y un frontend

    .
    ├──frontend                      # Fontend de la aplicación desarrollada en Ionic.
    ├──backend                       # Backend de la aplicación desarrolla en node.js, con acceso a base de datos Mysql.
    └──readme.md                     # Documentación de la aplicación.
    
## Estructura de Directorios del backend    
    
    .
    ├── db                           # Directorio para la base de datos del proyecto. Dentro de /dumps se encuentra el 
    ├                                 archivo que genera la base de datos y los registros iniciales.
    ├── mysql                        # Carpeta con archivo index.js de configuración del pool de conexiones a la base de datos.
    ├── nodes_modules                # Carpeta con los módulos utilizados por node.js.
    ├── routes                       # Cada una de las rutas de la aplicación, encargadas de gestionar los pedidos a las distintas
    ├                                   entidades.
    ├──├──dispositivo                # API encargada de la gestión de los dispositivos, tanto para obtener información de un
    ├                                   dispositivo particular o todos los existentes (sensores).
    ├──├──logRiego                   # API que permite consultar el log de riegos de una electroválvula y el último log.
    ├                                  Además permite agregar logs a la electroválvula.
    ├──├──medicion                   # API que permite consultar las mediciones de un dispositivo y la última medición.
    ├                                  Además permite agregar nuevas mediciones.
    ├── docker-compose.yml           # Configuración de los contenedores para levantar el backend.
    ├── index.js                     # Punto de entrada de la API, que permite rutear las solicitudes.
    ├── package.json                 # Archivos de configuración para las dependencias de node.js.
    ├── run_phpadmin.sh              # Script para levantar contenedor docker con phpMyAdmin
    ├── serve_node_app_net.sh        # Script para levantar contenedor docker con node, para levantar el back-end
    └── start_mysql.sh               # Script para levantar contenedor docker con el servidor de base de datos mysql

## Estructura de Directorios del frontend

Se describen los directorios principales de la solución del frontend:
  
    .
    ├── nodes_modules                # Carpeta con los módulos y dependencias de Ionic y Angular.
    ├── src                          # Carpeta con código del frontend. 
    ├──├── main.ts                   # Punto de entrada de la aplicación. Invoca a la página /home.
    ├──├── assets                    # Íconos e imágenes utilizadas por la aplicación.
    ├──├── app                       # Código de las páginas, directivas, pipes y servicios utilizados por la aplicación.
    ├──├──├── directives             # Directivas de la aplicación: son 2 directivas de atributos para dar estilos a tablas y celdas.
    ├──├──├── model                  # Modelo de la aplicación, con 3 clases que representan los dispositivos, las mediciones y los
    ├                                  logs de riego.
    ├──├──├── pipes                  # Pipes de la aplicación, utilizados para formatear fechas y datos de los logs de riego
    ├──├──├── services               # Servicios de la aplicación: son 3 servicios que se comunican con el backend de la aplicación
    ├                                  para gestionar los datos de los sensores (dispositivo.serve.ts), de las mediciones 
    ├                                  (medicion.service.ts) y los logs de riego (log-riego.services.ts).
    ├──├──├── home                   # Página principal de la aplicación.
    ├──├──├── dispositivo            # Página con el detalle del sensor, junto al gráfico de última medición y acceso a logs y mediciones.
    ├──├──├── log-riego              # Página con el detalle del log de aperturas y cierres de la electroválvula.
    └──├──├── medicion               # Página con el detalle de las mediciones asociadas al dispositivo (sensor).

## Diagrama de la base de datos

La base de datos de la aplicación se almacena en una base mysql.
La estructura de la misma es la siguiente:

![Alt text](/images/DB.jpg?raw=true "base de datos")

## Configuración de docker-compose

Para los detalles de configuración particulares, referirse al archivo [docker-compose.yml](/backend/docker-compose.yml) 

La herramienta levanta 3 contenedores y un servicio de red entre los servicios para la ejecución:

* mysql-server: una instancia de mysql server, que almacena la información de los dispositivos (sensores), las electroválvulas y las mediciones.
* phpmyadmin: una instancia de phpMyAdmin, para poder consultar la base de datos mysql.
* node-app: una instancia de Node, que se encarga de servir los archivos de la API (backend).
* mysql-net: red para la comunicación de los contenedores.

## Ejecución del backend con docker desde línea de comando
Se puede ejecutar el proyecto sin utilizar docker-compose. Para ellos se utilizan los 3 scripts que se encuentran en el directorio raíz.
Los pasos a realizar son:

1- Ejecutar
```sh
docker stop $(docker ps -a -q)
```
Esto detiene todos los contenedores en ejecución

2 -Ejecutar
```sh
docker network ls | grep mysql-net 
```
Si no se muestran resultados significa que no está creada la interfaz de red que conecta los contenedores, se debe crear ejecutando
```sh
docker network create --driver bridge mysql-net
```
3- Ejecutar
```sh
 ./start_mysql.sh mysql-net ./db/dumps ./db/data                     
```
Este paso levanta la base de datos, utilizando la información de la carpeta ./db para generar la base de datos y la red configurada anteriormente

4- Ejecutar
```sh
  ./run_phpadmin.sh mysql-net mysql-server 8085
```

Este paso levanta PHPMyAdmin, para lo cual le indicamos la red a utilizar, el contenedor que tiene la base de datos y el puerto en el cual se levantará el servicio. En este caso podemos acceder al mismo desde:​ http://localhost:8085

5- Ejecutar

```sh
  ./serve_node_app_net.sh "$PWD" index.js 8000 mysql-net 
```
Este paso levanta el backend la aplicación, para lo cual se utiliza un servidor express. Le indicamos el directorio base a servir (PWD) y cuál es el archivo o script inicial de la aplicación (index.js). Además, le indicamos el puerto en el que se levantará la aplicación y la red a utilizar para comunicarse con la base de datos. Podemos acceder a la API desde: http://localhost:8000

## Imágenes docker utilizadas - configuraciones

Para las imágenes de docker utilizadas en la solución se utilizan los siguientes parámetros de configuración:

### MySQL:  

- Modo de invocación:   ./start_mysql.sh PARAM1 PARAM2 PARAM3
    <BR>Por ejemplo:    ./start_mysql.sh mysql-net ./db/dumps ./db/data
- Nombre de la imagen:  mysql:5.7
- Nombre contenedor:    mysql-server
- Network:              PARAM1 (mysql-net)
- Variables de entorno: MYSQL_ROOT_PASSWORD=userpass (password de root)
- Puertos:              3306
- Volúmenes:            PARAM3: directorio donde se aloja la DB
                        PARAM2: información para generación de DB inicial


### PHPMyAdmin:  

- Modo de invocación:   ./run_phpadmin.sh PARAM1 PARAM2 PARAM3 
    <BR>Por ejemplo:    ./run_phpadmin.sh mysql-net mysql-server 8085 
- Nombre de la imagen:  phpmyadmin/phpmyadmin
- Nombre contenedor:    phpadmin
- Network:              PARAM1 (mysql-net)
- Variables de entorno: PMA_HOST=PARAM2(mysql-server)). se le pasa como variable de entorno el nombre del contenedor de mysql.
- Puertos:              Bindea el puerto 80 del contenedor con el puerto indicado en PARAM3 (8005)
- Volúmenes:            N/A

### Node App:   

- Modo de invocación:   ./serve_node_app_net.sh PARAM1 PARAM2 PARAM3 PARAM4
    <BR>Por ejemplo:    ./serve_node_app_net.sh "$PWD" index.js 8000 mysql-net
- Nombre de la imagen:  abassi/nodejs-server:10.0-dev
- Nombre contenedor:    nodejs-container
- Network:              PARAM4 (mysql-net)
- Variables de entorno: N/A
- Puertos:              Bindea el puerto 3000 del contenedor con el puerto indicado en el PARAM3 (8000)
- Volúmenes:            Compartir el directorio con el código fuente en el host (PARAM1)
                        al directorio /home/node/app del contenedor.
- nodemon:              herramienta que permite redeploy ante cambios en el código. Escucha cambios según PARAM2



# Contribuir
Para contribuir realizar un pull request con las sugerencias.

# Licencia
GPL
