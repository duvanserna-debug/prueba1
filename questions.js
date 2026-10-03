// Edita aquí las preguntas del test. "correcta" es opcional (índice de la opción: 0=A, 1=B...).
// Si la pones, el panel muestra el puntaje; si no, solo muestra las respuestas.
window.CONFIG = {
  titulo: "Simulacro tipo ICFES",
  // Pega aquí la URL de tu Apps Script publicado (ver README)
  apiUrl: "PEGA_AQUI_LA_URL_DEL_APPS_SCRIPT",
};

window.PREGUNTAS = [
  { area: "Lectura crítica", texto: "Pregunta de ejemplo 1: ¿Cuál es la idea principal del texto?", opciones: ["Opción A", "Opción B", "Opción C", "Opción D"], correcta: 0 },
  { area: "Matemáticas", texto: "Pregunta de ejemplo 2: Si 3x + 2 = 11, ¿cuánto vale x?", opciones: ["2", "3", "4", "5"], correcta: 1 },
  { area: "Ciencias naturales", texto: "Pregunta de ejemplo 3: ¿Qué organelo produce la mayor parte de la energía celular?", opciones: ["Núcleo", "Ribosoma", "Mitocondria", "Lisosoma"], correcta: 2 },
  { area: "Sociales y ciudadanas", texto: "Pregunta de ejemplo 4: ¿En qué año se promulgó la Constitución colombiana vigente?", opciones: ["1886", "1991", "2001", "1950"], correcta: 1 },
  { area: "Inglés", texto: "Pregunta de ejemplo 5: Choose the correct option: She ___ to school every day.", opciones: ["go", "goes", "going", "gone"], correcta: 1 },
];
