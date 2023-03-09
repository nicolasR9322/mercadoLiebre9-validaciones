Trabajo practico de Digital House : "Express Validator"

El objetivo del proyecto es aplicar validaciones en el back-end

Metodo de uso:
    
    -Clonar repositorio

    -En terminal (Carpeta raiz) para instalar las dependencias, ejecutar: npm i

    -Luego ejecutar nodemon o ir a la ruta "src/bin" y ejecutar en la terminal : node www

descripción: en este ejercicio realizaremos la validacion del registro de un usuario

    desafio 1: 
    instalacion
        -ejecutar npm i express-validator

    desafio 2: 
    implementando el middleware en las rutas
        -requerir express validator
        -construir un array con las validaciones
        -utilizar la funcion check para cada campo
        -agregar validaciones adicionales como maximos de caracteres
        -agregar metodo bail para las validaciones principales
        -implementar el middleware en la ruta
    
    desafio 3: 
    implementacion en los controladores
        -requerir validation result de express validator
        -implementarlo pasandolo en dentro de una variable
        -usar el metodo isEmpty() para determinar si hay errores
        -enviar los errores a la vista a traves de mapped()

    desafio 4: 
    implementacion en las vistas
        -validar si existe un error e implementar una respuesta si existe
        -evitar que se reseteen los campos usando el objeto old en caso de error