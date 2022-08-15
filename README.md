# Trabajo final integrador 2022 - Diseño de Experiencia de Usuario

<h2 align="center">
Rainfall Advisor
</h2>

## Descripción del proyecto
Como trabajo final de la asignatura Diseño de Experiencia de Usuario se desarrollo una aplicación que brinda a las personas información y guía sobre la temática del Arroyo Maldonado de la cuidad de La Plata que sufrió mucho en la gran inundación del año 2013. 

La aplicación obtiene de la API:https://www.weatherapi.com/ el nivel de precipitación de la cuidad de La Plata, además de mostrar gráficamente si el nivel al que se encuentra es riesgoso o no y en caso de que se encuentre en riesgo entonces genera una notificación para el usuario que son progresivas a medida que la precipitación empeora. Por otra parte, cuenta con una sección de recomendaciones que indican que hacer antes, durante y despues de una inundación. Además, la aplicación cuenta con una sección de configuración en la cual es usuario puede cambiar el tamaño de la letra, el tiempo en que se actualiza el nivel de precipitación y el tipo de letra de la aplicación.

## Mockup inicial de la aplicación

![imagen](https://user-images.githubusercontent.com/63661809/171318214-663908d0-f7cb-4b6d-82ed-cfa6c7ae197e.png)

## Tecnologías utilizadas
1. React Native con Expo

## Requisitos
* Instalar Expo CLI: `npm install -g expo-cli`
* Instalar Expo GO en el celular. [Link](https://expo.dev/expo-go)
* Instalar npm.


## Método de uso
1. Clonar repositorio: `git clone https://github.com/Nettaros/DEU_App.git`
2. Abrir la carpeta DEU_App
3. Abrir la consola y realizar los siguientes pasos:
* `npm install`
* `expo start`
4. Luego aparecerá un código QR el cual se debe escanear la aplicación de celular Expo Go.
5. En caso caso de que el código QR no aparezca, copiar el link (el que esta seleccionado en rojo en la imagen) y luego copiarlo en el navegador.
*  ![imagen](https://user-images.githubusercontent.com/63661809/175838456-2eba496c-79fb-43f1-89a4-7c3e57b8444f.png)
6. Escanear el codigo QR que aparece abajo a la izquierda.

*Comentario: Es posible utilizar la app en el navegador, pero hay que tener en cuenta que las funcionalidades estan limitadas y no siempre funciona correctamente.
Para abrirlo, realizar hasta el 5to paso inclusive en el método de uso y seleccionar la opcion "Run in web browser"*
