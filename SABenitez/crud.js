let nomes = [];
let posVetor = [];

function cadastrar(){
    let addnome = prompt("Digite seu nome");
    if (addnome) {
        nomes.push(addnome);
    } else {
        alert("Nome não pode ser vazio.");
    }
}

function editar(){
    let nomeEdit = prompt("Qual nome deseja editar?");
    if (nomes.includes(nomeEdit)) {
        let nomenovo = prompt("Qual o novo nome?");
        posVetor = nomes.indexOf(nomeEdit);
        nomes[posVetor] = nomenovo;
    } else {
        alert("Nome não encontrado.");
    }
}

function excluir(){
    let nomeDel = prompt("Qual nome deletar?");
    if (nomes.includes(nomeDel)) {
        posVetor = nomes.indexOf(nomeDel);
        nomes.splice(posVetor, 1);
    } else {
        alert("Nome não encontrado.");
    }
}

function listar(){
    if (nomes.length > 0) {
        alert("Lista de Nomes: \n" + nomes.join(", "));
    } else {
        alert("Não há nomes cadastrados.");
    }
}


