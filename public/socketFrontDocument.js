import { refreshTextEdit } from "./documento.js";

const socket = io();

function selectDocument(name){
    socket.emit("select_document", name)
}

function emitTextEdit(data) {
    socket.emit("text_editor", data);
}

socket.on("text_customer_edit", (text) => {
    refreshTextEdit(text);
})

export {emitTextEdit, selectDocument};
