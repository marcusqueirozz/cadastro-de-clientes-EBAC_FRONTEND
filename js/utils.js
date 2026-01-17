const clientes = document.getElementById("listaClientes");

export function criarElemento(user) {
    const item = document.createElement("li");
    item.innerHTML = `${user.name} | ${user.email}  <button onClick="remove('${user._id}')">X</button>`;
    clientes.appendChild(item);
}