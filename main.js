const formActivity = document.getElementById('form-activity');
let linhas = '';
const imgAprovado = '<img src="img/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="img/reprovado.png" alt="Emoji triste" />'

formActivity.addEventListener('submit', function(e){
    e.preventDefault();
    const inputActivityname = document.getElementById('activity-name');
    const inputActivitygrade = document.getElementById('activity-grade');

    let linha = '<tr>';
    linha = linha + `<td>${inputActivityname.value}</td>`;
    linha += `<td>${inputActivitygrade.value}</td>`;
    linha += `<td>${inputActivitygrade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
   
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = linhas;



    alert(`Atividade: ${inputActivityname.value} - Nota: ${inputActivitygrade.value}`);

    inputActivityname.value = '';
    inputActivitygrade.value = '';


});