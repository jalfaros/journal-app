
# Journal App

Aplicación desarrollada con la librería de React, utilizando el patrón de diseño Redux como manejador de estados y Firebase como base de datos, además de los distintos customs
hooks creados y helpers que realizan una abstracción del código y minimiza la repetición de código.

La principal función de la aplicación es crear notas estilo diario, lo cual le brinda al usuario una cronología en temas de recordatorios.


## Capturas de la aplicación


### Autenticación del usuario
Se cuenta con la protección de rutas públicas y privadas, mediante la utilización de <strong>React Router Dom</strong>, esto permite que se mantenga la seguridad en la aplicación y solo se permita ingresar al usuario si cuenta con una cuenta válida.
A su vez, la integración con <strong>Firebase</strong> permite que se realicen autenticaciones con providers externos, tales como Google, GitHub, Apple, entre otros.

<p align='center'>
<img src="https://res.cloudinary.com/dfnkcacaz/image/upload/v1643493880/auth_fzzhf7.jpg" width="900">  
</p>

### Pantalla principal
Se muestra las notas creadas con anterioridad por el usuario y además de la capacidad de crear nuevas.

<p align="center"> 
 <img src="https://res.cloudinary.com/dfnkcacaz/image/upload/v1643494440/Captura_de_pantalla_2022-01-29_161347_gy7sfg.jpg" width="900">
</p>


## Recursos Externos
- Cloudinary (host de fotografías)
- Firebase-Firestore (base de datos)

