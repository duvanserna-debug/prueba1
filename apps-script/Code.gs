// Backend gratuito: guarda las respuestas en la hoja de cálculo a la que está vinculado este script.
// Cambia la clave de administrador antes de publicar.
const CLAVE_ADMIN = "cambia-esta-clave";

function hoja_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName("Respuestas") || ss.insertSheet("Respuestas");
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d.nombre || !d.documento || !Array.isArray(d.respuestas)) throw new Error("Datos incompletos");
    hoja_().appendRow([new Date(), String(d.nombre).slice(0, 100), String(d.documento).slice(0, 50), ...d.respuestas.map(String)]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  if (e.parameter.action !== "results") return json_({ ok: true });
  if (e.parameter.key !== CLAVE_ADMIN) return json_({ ok: false, error: "Clave incorrecta" });
  const rows = hoja_().getDataRange().getValues().filter(r => r[0] !== "").map(r => ({
    fecha: r[0], nombre: r[1], documento: r[2], respuestas: r.slice(3),
  }));
  return json_({ ok: true, rows });
}
