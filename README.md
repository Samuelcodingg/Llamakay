# Llamakay
Sistema Web para la bolsa laboral de los practicantes de la FISI

## Convención para estructura de directorios y archivos

### Frontend

![](https://github.com/Samuelcodingg/Llamakay/blob/master/frontend/public/frontend-folder-structure.png)

### Backend

![](https://github.com/Samuelcodingg/Llamakay/blob/master/frontend/public/backend-folder-structure.png)

## Nota

* Para obtener las dependencias de tanto frontend como backend, utilizar el comando `npm install` en la respectiva carpeta individual.
* En el backend, se deben considerar las variables de configuración del archivo .env, si no tiene este, crearlo y poner las variables siguientes.  
`DATABASE=mongodb://localhost/llamakay`, en caso esto no funcione cambiar `localhost` por `0.0.0.0:27017`
`PORT=5000`  
`JWT_SECRET=asa12jsjakdj2e3jdg`  
`FRONT_URL=http://localhost:3000`

* En el frontend, igual crear el archivo .env y poner las variables siguientes. Donde 5000 es el puerto por el cual va a correr el servidor del backend.  
`REACT_APP_API_URL=http://localhost:5000/api`  
