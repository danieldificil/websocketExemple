import {emitTextEdit, selectDocument} from "./socketFrontDocument.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const textEditor = document.getElementById("editor-texto");
const documentTitle = document.getElementById("titulo-documento");

documentTitle.textContent = documentName || "Documento sem título"

selectDocument(documentName)

textEditor.addEventListener("keyup", () => {
    emitTextEdit({
        text: textEditor.value,
        documentName
    });
})

function refreshTextEdit(text) {
    textEditor.value = text;
}
export {refreshTextEdit};
