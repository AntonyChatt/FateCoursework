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
document.getElementById('skill').addEventListener("click", () => ATKUP());

function  ATKUP() {
    busterATK = busterATK*5;
    quickATK = quickATK*5;
    artATK = artATK*5;
    document.getElementById('skill').classList.add('unavailable');
    document.getElementById('skill').removeEventListener('click', ATKUP)
    document.getElementById('mash_sprite').classList.add('in_attack_servant');
}

let a2 = document.getElementById('art_card_1');
let a1 = document.getElementById('art_card');
let q2 = document.getElementById('quick_card_1');
let q1 = document.getElementById('quick_card');
let b1 = document.getElementById('buster_card');

let busterATK = 650;
let quickATK = 300;
let artATK = 200;

let ATK = [];

b1.addEventListener('click',() => {
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
q1.addEventListener('click', () => {
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
q2.addEventListener('click', () => {
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
a1.addEventListener('click', () => {
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
a2.addEventListener('click', () => {
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
    document.getElementById('attack_screen').style.display = 'none';
    if (skeleton > 0) {
        setTimeout(() =>Shit(0), 1000);
        setTimeout(() =>Shit(1), 3000);
        setTimeout(() =>Shit(2), 5000);
        setTimeout(() =>ATK=[], 6000);
        setTimeout(() =>check(), 8000);
    }
    else if (giles > 0) {
        setTimeout(() =>Ghit(0), 1000);
        setTimeout(() =>Ghit(1), 3000);
        setTimeout(() =>Ghit(2), 5000);
        setTimeout(() =>ATK=[], 6000);
        setTimeout(() =>check(), 8000);

    }
}

function Shit(i) {
    if (ATK[i] === 'b') {
        if (skeleton < busterATK) {
            sHP.innerText = '0';
            sHPwidth.style.width = '0%';
            S.classList.add('unavailable');
            skeleton = 0;
        }
        else {
            skeleton = skeleton - busterATK;
            sHP.innerText = `${skeleton}`;
            sHPwidth.style.width = `${skeleton*108/567}px`;
        }
    }
    else if (ATK[i] === 'q') {
        if (skeleton < quickATK) {
            sHP.innerText = '0';
            sHPwidth.style.width = '0%';
            S.classList.add('unavailable');
            skeleton = 0;
        }
        else {
            skeleton = skeleton - quickATK;
            sHP.innerText = `${skeleton}`;
            sHPwidth.style.width = `${skeleton*108/567}px`;
        }
    }
    else {
        if (skeleton < artATK) {
            sHP.innerText = '0';
            sHPwidth.style.width = '0%';
            S.classList.add('unavailable');
            skeleton = 0;
        }
        else {
            skeleton = skeleton - artATK;
            sHP.innerText = `${skeleton}`;
            sHPwidth.style.width = `${skeleton*108/567}px`;
        }
        np = np + 20;
        myNP.innerText = `${np}%`;
        myNPwidth.style.width = `${np*108/100}px`;
    }
}

function Ghit(i) {
    if (ATK[i] === 'b') {
        if (giles < busterATK) {
            gHP.innerText = '0';
            gHPwidth.style.width = '0%';
            G.classList.add('unavailable');
            giles = 0;
        }
        else {
            giles = giles - busterATK;
            gHP.innerText = `${giles}`;
            gHPwidth.style.width = `${giles*108/5567}px`;
        }
    }
    else if (ATK[i] === 'q') {
        if (giles < quickATK) {
            gHP.innerText = '0';
            gHPwidth.style.width = '0%';
            G.classList.add('unavailable');
            giles = 0;
        }
        else {
            giles = giles - quickATK;
            gHP.innerText = `${giles}`;
            gHPwidth.style.width = `${giles*108/5567}px`;
        }
    }
    else {
        if (giles < artATK) {
            gHP.innerText = '0';
            gHPwidth.style.width = '0%';
            G.classList.add('unavailable');
            giles = 0;
        }
        else {
            giles = giles - artATK;
            gHP.innerText = `${giles}`;
            gHPwidth.style.width = `${giles*108/5567}px`;
        }
        np = np + 20;
        myNP.innerText = `${np}%`;
        myNPwidth.style.width = `${np*108/100}px`;
    }
}

function meHit() {
    HP = HP - 1086;
    myHP.innerText = `${HP}`;
    myHPwidth.style.width = `${HP*108/14567}px`;
}

function check() {
    if (giles > 0) {
        setTimeout(() => meHit(), 2000);
    }
    else {
        setTimeout(() => {
            document.getElementById('game').style.display = 'none';
            document.getElementById('battle_start').style.display = 'flex';
            document.getElementById('battle_start').innerHTML = '<span>Battle finish</span>';
        }, 4000);
        setTimeout(() => {
            window.location.href = './../pages/story/Fuyuki/fuyuki.html';
        }, 8000)
    }
}

let skeleton = 567;
let giles = 5567;
let HP = 14567;
let np = 0;

let sHP = document.getElementById('skeleton_hp_amount');
let sHPwidth = document.getElementById('skeleton_hp');
let S = document.getElementById('skeleton');
let G = document.getElementById('giles');
let gHP = document.getElementById('giles_hp_amount');
let gHPwidth = document.getElementById('giles_hp');
let myHP = document.getElementById('hp_amount');
let myHPwidth = document.getElementById('hp');
let myNP = document.getElementById('np_amount');
let myNPwidth = document.getElementById('np');

