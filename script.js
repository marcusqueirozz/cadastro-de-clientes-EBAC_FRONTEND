const crudCrud = "7c279a40faa246319f79ca81f59df9be"

const clientes = document.getElementById("listaClientes");


carregarClientes();

// GET
function carregarClientes() {
    fetch(`https://crudcrud.com/api/${crudCrud}/users`)
        .then(res => res.json())
        .then((listaDeClientes) => {
            clientes.innerHTML = "";
            listaDeClientes.forEach(user=> {
                const item = document.createElement("li");
                item.innerHTML = `${user.name} | ${user.email}  <button onClick="remove('${user._id}')">X</button>`;
                clientes.appendChild(item);
            });
        })
}    

// POST
const addButton = document.getElementById("add");

addButton.addEventListener("click", ()=> {
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
            const item = document.createElement("li");
            item.innerHTML = `${user.name} | ${user.email} <button onClick="remove('${user._id}')">X</button>`;
            clientes.appendChild(item);
        })
})

// DELETE
function remove(_id) {
    
    fetch(`https://crudcrud.com/api/${crudCrud}/users/${_id}`, {
        method: "DELETE",
    })
        .then(()=> carregarClientes())
}