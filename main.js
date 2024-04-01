const form = document.getElementById("form-agenda");
const nomes = [];
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');

    if(nomes.includes(nome.value)){
        alert(`O nome: ${nome.value} já foi inserido`);
    }else{
        nomes.push(nome.value);
        let linha = '<tr>';   
        linha += `<td>${nome.value}</td>`;    
        linha += `<td>${telefone.value}</td>`;   
        linha += '</tr>';
            
        linhas += linha;
    }
    nome.value = "";
    telefone.value = "";
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');    
    corpoTabela.innerHTML = linhas; 
}