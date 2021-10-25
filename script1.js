let sopen =  document.getElementById("sopen");
let terminal = document.getElementById("terminal");
let summon = document.getElementById("summon");
let fuyuki = document.getElementById("fuyuki");
let fuopen = document.getElementById("fuopen");
let sback = document.getElementById("sback");
let fback = document.getElementById("fback");
let bridge = document.getElementById("bridge");
let history = document.getElementById("history");
let start ;

sopen.addEventListener('click', Sopen);
function Sopen(){
    terminal.style.display = 'none';
    summon.style.display = 'block';
}
sback.addEventListener('click', Sback);
fback.addEventListener('click', Sback);
function Sback(){
    terminal.style.display = 'flex';
    summon.style.display = 'none';
    fuyuki.style.display = 'none';
}
fuopen.addEventListener('click', FuOpen);
function FuOpen(){
    terminal.style.display = 'none';
    fuyuki.style.display = 'block';
}
bridge.addEventListener('click', showBattle);
function showBattle(){
    start = document.createElement('div');
        start.classList.add('battle');
        document.body.append(start);
        let battle = document.createElement('div');
        battle.classList.add('start');
        battle.addEventListener('click', startHistory);
        start.appendChild(battle);
}
function startHistory(){
    fuyuki.style.display = 'none';
    history.style.display = 'flex';
    start.style.display = 'none';
}