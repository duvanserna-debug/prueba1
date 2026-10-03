// Configuración del simulacro Pensar 1 – Grado 6 (100 preguntas, 2 minutos por pregunta).
// La clave de respuestas NO está aquí: vive en apps-script/Code.gs para que los estudiantes no la vean.
window.CONFIG = {
  titulo: "Simulacro Pensar 1 – Grado sexto",
  // Pega aquí la URL de tu Apps Script publicado (ver README)
  apiUrl: "PEGA_AQUI_LA_URL_DEL_APPS_SCRIPT",
  segundosPorPregunta: 120,
};

window.AREAS = [
  { nombre: "Matemáticas", desde: 1, hasta: 20 },
  { nombre: "Lectura crítica", desde: 21, hasta: 40 },
  { nombre: "Ciencias naturales", desde: 41, hasta: 60 },
  { nombre: "Ciencias sociales", desde: 61, hasta: 80 },
  { nombre: "Inglés", desde: 81, hasta: 100 },
];

// Páginas del cuadernillo (paginas/p-NN.jpg) que se muestran en cada pregunta, incluyendo el texto de contexto.
window.PAGINAS = {
  1: [3], 2: [3], 3: [4], 4: [4, 5], 5: [4, 5], 6: [5, 6], 7: [6, 7], 8: [7], 9: [8], 10: [8],
  11: [8, 9], 12: [9], 13: [9], 14: [9, 10], 15: [9, 10], 16: [10], 17: [11], 18: [11], 19: [12], 20: [13],
  21: [14], 22: [14, 15], 23: [14, 15], 24: [15, 16], 25: [15, 16], 26: [15, 16], 27: [17], 28: [17], 29: [17],
  30: [18], 31: [18], 32: [18], 33: [18], 34: [18], 35: [19], 36: [19], 37: [20], 38: [20, 21], 39: [21], 40: [22],
  41: [22, 23], 42: [22, 23], 43: [23, 24], 44: [23, 24], 45: [23, 24], 46: [23, 24], 47: [25], 48: [25, 26], 49: [25, 26],
  50: [27], 51: [27], 52: [28], 53: [28], 54: [28], 55: [29], 56: [29], 57: [30], 58: [30], 59: [31], 60: [31, 32],
  61: [32], 62: [33], 63: [33], 64: [34], 65: [34], 66: [35], 67: [35], 68: [35], 69: [35, 36], 70: [35, 36],
  71: [36], 72: [37], 73: [37], 74: [38], 75: [38], 76: [39], 77: [39], 78: [40], 79: [40, 41], 80: [41],
  81: [41, 42], 82: [41, 42], 83: [41, 42], 84: [41, 42], 85: [41, 42], 86: [42], 87: [42], 88: [42], 89: [42], 90: [42],
  91: [42, 43], 92: [42, 43], 93: [42, 43], 94: [42, 43], 95: [42, 43], 96: [43], 97: [43], 98: [43], 99: [43], 100: [43],
};

// Preguntas con solo 3 opciones (A, B, C); el resto tiene 4.
window.TRES_OPCIONES = [86, 87, 88, 90, 91, 92, 93, 94, 95];
