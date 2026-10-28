Portafolio Web Personal - Kevin Vaca

🎯 Objetivo del Proyecto

El objetivo principal de este proyecto es diseñar y desarrollar un sitio web estático tipo portafolio utilizando HTML5 y CSS3 para reflejar la información de mi hoja de vida (perfil profesional, formación académica en Ingeniería de Software en la ESPE, experiencia laboral, habilidades técnicas, certificaciones y datos de contacto). Además, el proyecto implementa el control de versiones del código fuente en GitHub y la contenedorización de la aplicación web para su distribución y despliegue a través de Docker Hub.

🛠️ Tecnologías Utilizadas

HTML5: Estructuración semántica del contenido del portafolio (nav, section, article, form, footer).

CSS3: Diseño visual, maquetación con Flexbox y adaptabilidad a dispositivos móviles mediante Media Queries (style.css y mediaqueries.css).

Git y GitHub: Control de versiones y alojamiento del código fuente.

Docker y Docker Hub: Creación de la imagen del contenedor (servidor web ligero como Nginx/Apache) y registro público en la nube.

Visual Studio Code: Entorno de desarrollo integrado (IDE).

📂 Estructura del Proyecto

El repositorio cuenta con la siguiente organización de archivos y directorios:

├── assets/                  # Recursos multimedia (imágenes de perfil, íconos y CV en PDF)
│   ├── about-pic.png
│   ├── arrow.png
│   ├── checkmark.png
│   ├── education.png
│   ├── experience.png
│   ├── github.png
│   ├── linkedin.png
│   ├── profile-pic.png
│   └── resume-example.pdf
├── index.html               # Página principal con la estructura y datos de la hoja de vida
├── style.css                # Hoja de estilos principal del portafolio
├── mediaqueries.css         # Estilos responsivos para pantallas móviles y tablets
├── Dockerfile               # Archivo de configuración para construir la imagen Docker
└── README.md                # Documentación del proyecto


🐳 Instrucciones para Construir y Ejecutar la Imagen Docker

Descargar y ejecutar directamente desde Docker Hub

Descargar la imagen (Pull):

docker pull kevinv593/portafoliocss:latest

Ejecutar el contenedor (Run):

docker run -d -p 8080:80 --name mi-portafolio kevinv593/portafoliocss:latest

Visualizar en el navegador: Ingresa a http://localhost:8080

Cambios Locales: file:///home/kevinv/Garage/code/web/PerfilProfesional_CSS/index.html

🔗 Enlace a Docker Hub

Repositorio en Docker Hub: https://hub.docker.com/r/kevinv593/portafoliocss
