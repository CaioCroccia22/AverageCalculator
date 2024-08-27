const formActivity = document.getElementById('form-activity');
let linhas = '';
const imgAprovado = '<img src="img/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="img/reprovado.png" alt="Emoji triste" />';
const activitys = [];
const grades = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const minimumGrade = parseFloat(prompt('Digite a nota minima: '));


formActivity.addEventListener('submit', function(e){
    e.preventDefault();
    addLine();
    updateTable();
    updateAverage();
});

function addLine(){
    const inputActivityname = document.getElementById('activity-name');
    const inputActivitygrade = document.getElementById('activity-grade');

    if (activitys.includes(inputActivityname.value)){
        alert(`A atividade ${inputActivityname.value} já foi inserida`);
    }else{

    activitys.push(inputActivityname.value);
    grades.push(parseFloat(inputActivitygrade.value));


    let linha = '<tr>';
    linha = linha + `<td>${inputActivityname.value}</td>`;
    linha += `<td>${inputActivitygrade.value}</td>`;
    linha += `<td>${inputActivitygrade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputActivityname.value = '';
    inputActivitygrade.value = '';
}

function updateTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = linhas;
}

function updateAverage(){
    const average = getAverage();

    const averageValue = document.getElementById('value-average');
    const averageResult = document.getElementById('result-average');

    averageValue.innerHTML = average.toFixed(2);
    averageResult.innerHTML = average >= 7 ? spanAprovado : spanReprovado ;  
    console.log(average);
    
}

function getAverage(){
    let soma = 0;
    for (i = 0; i < grades.length; i++){
        soma += grades[i];
    }

    return soma / grades.length;
}