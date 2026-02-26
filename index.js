const axios = require('axios');

async function obtenerPrecio() {
  try {
    const respuesta = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    console.log(`El precio actual de Bitcoin es: $${respuesta.data.bitcoin.usd} USD`);
  } catch (error) {
    console.error("Error al obtener datos", error);
  }
}

obtenerPrecio();


