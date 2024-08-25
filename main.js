const formActivity = document.getElementById('form-activity');


formActivity.addEventListener('submit', function(e){
    e.preventDefault();
    const inputActivityname = document.getElementById('activity-name');
    const inputActivitygrade = document.getElementById('activity-grade');
    alert(`Atividade: ${inputActivityname.value} - Nota: ${inputActivitygrade.value}`);
})