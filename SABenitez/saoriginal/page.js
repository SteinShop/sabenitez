nomes = [];
posVetor = [];

function cadastrar(){
    let addnome;
    addnome = prompt("Digite seu nome")
    nomes.push(addnome);

}

function editar(){
    nomeEdit = prompt("Qual nome deseja editar?");
    nomenovo = prompt("Qual o novo nome?");
    posVetor = nomes.indexOf(nomeEdit)
    nomes[posVetor] = nomenovo
}

function excluir(){
    nomeDel = prompt("Qual nome deletar?")
    posVetor = nomes.indexOf(nomeDel);
    nomes.splice(posVetor, 1)

}

function listar(){
    alert(nomes)
} 