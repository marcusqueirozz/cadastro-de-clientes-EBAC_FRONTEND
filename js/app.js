import { ListaClientes } from "./classes.js";

const clientes = new ListaClientes;

// GET ALL
clientes.carregarClientes();

// POST
const addButton = document.getElementById("add");
addButton.addEventListener("click", ()=> {
    clientes.criarCliente();
})

// DELETE
window.remove = function(_id) {
    clientes.removerCliente(_id);
}