# Test tipo ICFES

Formulario web gratuito (GitHub Pages + Google Sheets). Los estudiantes responden en `index.html`;
tú ves las respuestas en `admin.html` o directamente en la hoja de Google, y puedes exportar a CSV.

## Puesta en marcha (≈5 min)
1. Crea una hoja de cálculo en Google Sheets → **Extensiones → Apps Script**.
2. Pega el contenido de `apps-script/Code.gs` y cambia `CLAVE_ADMIN`.
3. **Implementar → Nueva implementación → Aplicación web**: ejecutar como *Yo*, acceso *Cualquier persona*. Copia la URL.
4. Pega esa URL en `apiUrl` dentro de `questions.js`.
5. Activa **GitHub Pages** (Settings → Pages → rama de esta carpeta) y comparte `index.html` con los estudiantes.

## Preguntas
Edita `questions.js` (las actuales son de ejemplo). `correcta` es opcional: si la pones, el panel muestra puntaje.
