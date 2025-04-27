# 🕷️ Template Proyectos Scraping

![Scraping Image](https://github.com/JuanjDes/template-scraping/blob/main/webscraping.png?raw=true)

Mini-Template básico para proyectos de Node + Express +ESM + Scraping

## 📋 Información Básica

### 🖥️ server.js

El archivo `server.js` es el punto de entrada principal de nuestra aplicación. Aquí están sus características principales:

- Utiliza **Express.js** como framework web
- Implementa un servidor HTTP básico
- Incluye rutas para el scraping de datos

### 📦 package.json

El archivo `package.json` contiene la configuración y las dependencias del proyecto. Aspectos destacados:

- **Nombre del proyecto:** template-proyectos-scraping
- **Versión:** 1.0.0
- **Tipo:** module (usa sintaxis ES6) -> import/export en archivos .js sin renombrarlos a .mjs
- **Dependencias principales:**
  - `express`: ^4.18.2
  - `node-fetch`: ^3.3.1
  - `cheerio`: ^1.0.0-rc.12

## 🚀 Scripts

- `npm start`: Inicia el servidor
- `npm run dev`: Inicia el servidor con nodemon para desarrollo (reinicia solo cuando guardas cambios)

## 🛠️ Configuración

Para comenzar con este proyecto:

1. Clona el repositorio
2. Ejecuta `npm install` para instalar las dependencias
3. Usa `npm run dev` para iniciar el servidor en modo desarrollo (reinicia solo cuando guardas cambios)

## 📚 Más Información

Para más detalles sobre cómo usar este template para proyectos de scraping, consulta la documentación de las librerías utilizadas:

- [Express.js](https://expressjs.com/)
- [Cheerio](https://cheerio.js.org/)
- [Node-fetch](https://github.com/node-fetch/node-fetch)

¡Feliz scraping! 🎉
