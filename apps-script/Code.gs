// Backend gratuito: guarda las respuestas en la hoja de cálculo a la que está vinculado este script.
// La clave de respuestas vive aquí (no en la web pública) y el puntaje se calcula al consultar.
const CLAVE_ADMIN = "cambia-esta-clave";
const CLAVE = "ADCACBDCADCBADBACDBCDCBBCBACDBACADBACBCDCADBCDADCBCABCCADBDCBCAACDABACABCBCCDDAABCAADACBCBACBACDCABD";
const N = 100;
const COL_RESP = 6; // fecha, nombre, documento, id, estado | respuestas (N) | tiempos (N)

function hoja_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName("Respuestas") || ss.insertSheet("Respuestas");
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d.id || !d.nombre || !d.documento || !Array.isArray(d.respuestas) || d.respuestas.length !== N) throw new Error("Datos incompletos");
    const fila = [new Date(), String(d.nombre).slice(0, 100), String(d.documento).slice(0, 50), String(d.id), d.estado === "completo" ? "completo" : "parcial",
      ...d.respuestas.map(x => ("ABCD".indexOf(x) >= 0 ? x : "-")), ...d.tiempos.map(Number)];
    const h = hoja_();
    const hit = h.getLastRow() ? h.createTextFinder(String(d.id)).matchEntireCell(true).findNext() : null;
    if (hit && hit.getColumn() === 4) h.getRange(hit.getRow(), 1, 1, fila.length).setValues([fila]);
    else h.appendRow(fila);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  if (e.parameter.action !== "results") return json_({ ok: true });
  if (e.parameter.key !== CLAVE_ADMIN) return json_({ ok: false, error: "Clave incorrecta" });
  const h = hoja_();
  const datos = h.getLastRow() ? h.getDataRange().getValues() : [];
  const rows = datos.filter(r => r[0] !== "").map(r => ({
    fecha: r[0], nombre: r[1], documento: r[2], estado: r[4],
    respuestas: r.slice(COL_RESP - 1, COL_RESP - 1 + N), tiempos: r.slice(COL_RESP - 1 + N, COL_RESP - 1 + 2 * N),
  }));
  return json_({ ok: true, clave: CLAVE.split(""), rows });
}
