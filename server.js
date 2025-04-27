import express from 'express';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('<h1>Servidor Node.js + Express funcionando 🚀</h1>');
});

// Ruta ejemplo de scraping
app.get('/camaras', async (req, res) => {
  try {
    const url = 'https://www.example.com'; // Cambia esto por la página que quieras scrapear
    const response = await fetch(url);
    const body = await response.text();

    const $ = cheerio.load(body);

    const camaras = [];

    $('img').each((i, elem) => {
      const src = $(elem).attr('src');
      if (src && src.includes('cam')) { // Ajusta este filtro a lo que quieras encontrar
        camaras.push({
          imagen: src.startsWith('http') ? src : `${url}${src}`
        });
      }
    });

    res.json(camaras);

  } catch (error) {
    console.error('Error capturando cámaras:', error);
    res.status(500).json({ error: 'Error capturando cámaras' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT} 🚀`);
});
