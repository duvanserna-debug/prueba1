# Simulacro Pensar 1 – Grado 6

Test web gratuito (GitHub Pages + Google Sheets): 100 preguntas, **2 minutos por pregunta** (avanza solo y no se puede volver atrás).
Las preguntas son las páginas del cuadernillo (`paginas/`); los estudiantes marcan A/B/C/D.
Tú ves los resultados en `admin.html` (por área y por pregunta) o en la hoja de Google, y puedes descargar un CSV.

## Puesta en marcha (≈5 min)
1. Crea una hoja de cálculo en Google Sheets → **Extensiones → Apps Script**.
2. Pega el contenido de `apps-script/Code.gs` y cambia `CLAVE_ADMIN`.
3. **Implementar → Nueva implementación → Aplicación web**: ejecutar como *Yo*, acceso *Cualquier persona*. Copia la URL.
4. Pega esa URL en `apiUrl`, dentro de `questions.js`.
5. Activa **GitHub Pages** (Settings → Pages → rama de esta carpeta) y comparte `index.html` con los estudiantes.

## Notas
- La clave de respuestas está en `Code.gs` (no en la web pública); el puntaje se calcula al abrir el panel.
- Las respuestas se guardan parcialmente cada 5 preguntas, así que si un estudiante cierra la página queda como "parcial".
- Las imágenes del cuadernillo quedan públicas si publicas el sitio: úsalo solo con quienes tengas permiso del material.
- Cambiar tiempos o áreas: `questions.js`.
