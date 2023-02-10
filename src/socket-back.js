import io from "./servidor.js"
const documents = [
    {
        name: "JavaScript",
        text: "texto de javaScript"
    },
    {
        name: "Node",
        text: "texto de Node"
    },
    {
        name: "Socket.io",
        text: "texto de socketI.io"
    },
]

io.on("connection", (socket) => {
    console.log("Customer connected! ID: ", socket.id)

    socket.on("select_document", (documentName) => {
        const document = findDocument(documentName);

        console.log(document)

        socket.join(documentName);
    })

    socket.on("text_editor", ({text, documentName}) => {

        socket.to(documentName).emit("text_customer_edit", text)
    })
})

function findDocument(name) {
    return documents.find((document) => {
        return document.name === name
    })
}
