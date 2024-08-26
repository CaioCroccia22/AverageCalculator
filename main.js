const formActivity = document.getElementById('form-activity');
let linhas = '';
const imgAprovado = '<img src="img/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="img/reprovado.png" alt="Emoji triste" />';
const activitys = [];
const grades = [];


formActivity.addEventListener('submit', function(e){
    e.preventDefault();
    addLine();
    updateTable();
    updateAverage();
});

function addLine(){
    const inputActivityname = document.getElementById('activity-name');
    const inputActivitygrade = document.getElementById('activity-grade');

    activitys.push(inputActivityname.value);
    grades.push(parseFloat(inputActivitygrade.value));


    let linha = '<tr>';
    linha = linha + `<td>${inputActivityname.value}</td>`;
    linha += `<td>${inputActivitygrade.value}</td>`;
    linha += `<td>${inputActivitygrade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
   
    inputActivityname.value = '';
    inputActivitygrade.value = '';
}

function updateTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = linhas;
}

function updateAverage(){

    let soma = 0;
    for (i = 0; i < grades.length; i++){
        soma += grades[i];
    }

    const average = soma / grades.length;
    console.log(soma);
    console.log(average)
    
}