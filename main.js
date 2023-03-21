const form  =   document.getElementById("form-contato");
const nomes = [];
const numeros = [];
let linhas ='';


form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha(){
    const inputnomeContato = document.getElementById('nome-contato');
    const inputnumeroContato = document.getElementById('numero-contato');

    if(nomes.includes(inputnomeContato.value)){
        alert(`O nome: ${inputnomeContato.value} já foi inserido`)
    }
    else if (numeros.includes(inputnumeroContato.value)){
        alert(`O número: ${inputnumeroContato.value} já foi inserido`)
    }
    else {
    nomes.push(inputnomeContato.value);
    numeros.push(parseInt( inputnumeroContato.value));
    
       
    let linha = '<tr>';
    linha += `<td>${inputnomeContato.value}</td>`;
    linha += `<td>${inputnumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha
    }
    
    
    inputnomeContato.value = '';
    inputnumeroContato.value = '';
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

