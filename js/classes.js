import { criarElemento } from "./utils.js";

const crudCrud = "670749d149824253b1f5ca0ed2c64031"

const clientes = document.getElementById("listaClientes");


export class ListaClientes {

    carregarClientes() {
        fetch(`https://crudcrud.com/api/${crudCrud}/users`)
        .then(res => res.json())
        .then((listaDeClientes) => {
            clientes.innerHTML = "";
            listaDeClientes.forEach(user=> {
                criarElemento(user);
            });
        })

        console.log("Clientes carregados");
    }
    
    criarCliente() {
        const name = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        fetch(`https://crudcrud.com/api/${crudCrud}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({name: name, email: email})
        })
            .then(res => res.json())
            .then((user) => {
                criarElemento(user);
            })
    }
    
    removerCliente(_id) {
        fetch(`https://crudcrud.com/api/${crudCrud}/users/${_id}`, {
            method: "DELETE",
        })
            .then(()=> {
                this.carregarClientes()
            })
    }

}