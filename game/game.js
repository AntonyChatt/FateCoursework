document.getElementById('battle_start').addEventListener(
    "click",
    () => {
        document.getElementById('battle_start').style.display = 'none';
        document.getElementById('game').style.display = 'flex';
    }
);
document.getElementById('attack').addEventListener(
    "click",
    () => {
        document.getElementById('attack_screen').style.display = 'flex';
    }
);
document.getElementById('skill').addEventListener(
    "click",
    () => {
        busterATK = busterATK*7;
        quickATK = quickATK*7;
        artATK = artATK*7;
    }
);

let busterATK = 750;
let quickATK = 300;
let artATK = 200;

let ATK = [];

let b1 = document.getElementById('buster_card').addEventListener('click',() => {
    ATK.push('b');
    b1.classList.add('in_attack');
    if (ATK.length === 3) {
        attack();
        b1.classList.remove('in_attack');
        q1.classList.remove('in_attack');
        q2.classList.remove('in_attack');
        a1.classList.remove('in_attack');
        a2.classList.remove('in_attack');
    }
});
let q1 = document.getElementById('quick_card').addEventListener('click', () => {
    ATK.push('q');
    q1.classList.add('in_attack');
    if (ATK.length === 3) {
        attack();
        b1.classList.remove('in_attack');
        q1.classList.remove('in_attack');
        q2.classList.remove('in_attack');
        a1.classList.remove('in_attack');
        a2.classList.remove('in_attack');
    }
});
let q2 = document.getElementById('quick_card_1').addEventListener('click', () => {
    ATK.push('q');
    q2.classList.add('in_attack');
    if (ATK.length === 3) {
        attack();
        b1.classList.remove('in_attack');
        q1.classList.remove('in_attack');
        q2.classList.remove('in_attack');
        a1.classList.remove('in_attack');
        a2.classList.remove('in_attack');
    }
});
let a1 = document.getElementById('art_card').addEventListener('click', () => {
    ATK.push('a');
    a1.classList.add('in_attack');
    if (ATK.length === 3) {
        attack();
        b1.classList.remove('in_attack');
        q1.classList.remove('in_attack');
        q2.classList.remove('in_attack');
        a1.classList.remove('in_attack');
        a2.classList.remove('in_attack');
    }
});
let a2 = document.getElementById('art_card_1').addEventListener('click', () => {
    ATK.push('a');
    a2.classList.add('in_attack');
    if (ATK.length === 3) {
        attack();
        b1.classList.remove('in_attack');
        q1.classList.remove('in_attack');
        q2.classList.remove('in_attack');
        a1.classList.remove('in_attack');
        a2.classList.remove('in_attack');
    }
});

function attack() {

}

let skeleton = 567;
let giles = 5567;

let sHP = document.getElementById('skeleton_hp_amount');
let sHPwidth = document.getElementById('skeleton_hp');
let gHP = document.getElementById('giles_hp_amount');
let gHPwidth = document.getElementById('giles_hp');
let myHP = document.getElementById('hp_amount');
let myHPwidth = document.getElementById('hp');

