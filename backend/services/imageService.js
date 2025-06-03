import axios from 'axios';

export const getRandomProductImage = async () => {
  try {
    // Usando Lorem Picsum para imágenes aleatorias
    const width = 400;
    const height = 400;
    const response = await axios.get(`https://picsum.photos/${width}/${height}`);
    return response.request.res.responseUrl;
  } catch (error) {
    console.error('Error fetching random image:', error);
    return 'https://via.placeholder.com/400'; // Imagen por defecto
  }
};