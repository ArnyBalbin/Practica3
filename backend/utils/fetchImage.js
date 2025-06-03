export default async function fetchImage() {
  const res = await fetch('https://picsum.photos/200');
  return res.url; // Redirección de la imagen aleatoria
}
