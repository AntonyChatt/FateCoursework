let novel = [
    {
        author: 'Lev',
        text: 'Hundreds of years of mankind\'s guaranteed existence into the future vanished from out sights. Complaints and queries from the Association and our Sponsors have been piling up a mountain.',
    },
    {
        author: 'Lev',
        text: 'The orders drilled into her in the case where such a situation arises is to "Contain the anomaly without a moment\'s hesitation."',
    },
    {
        author: 'Mash',
        text: 'What\'s more, She turned out to have an unusually low aptitude for a Master.',
    },
    {
        author: 'Lev',
        text: 'The noblest of nobles, one of the twelve lord\'s houses. Animusphere, whom administrates all matters of Astrology within the Mage\'s Association.',
    },
    {
        author: 'Mash',
        text: 'The scandal it must have caused, the head of such a house not being able to become a Master.',
    },
    {
        author: 'Lev',
        text: ' It\'s easy to imagine the amount of whisperings behind her back, so much so that they would reach her own ears.',
    },
    {
        author: 'Lev',
        text: 'Even subjected to such a situation, she gave her all to directing Chaldea. We have made it by the past six months by the skin of our teeth.',
    },
    {
        author: 'Mash',
        text: 'Truth be told, I have wanted her to come for some Mental care, given her workload, but that\'s precisely what makes it impossible.',
    },
    {
        author: 'Mash',
        text: ' And so, do understand that when she deliberately causes you trouble, it\'s not because she hates you.',
    },
];

document.getElementById('novel').addEventListener("click", next);

let LevIcon = document.getElementById('lev');
let MashIcon = document.getElementById('mash');
let Author = document.getElementById('text_author');
let Content = document.getElementById('text_content');
let step;
document.addEventListener('DOMContentLoaded', initialStep);


function initialStep() {
    step = 0;
    Author.innerText = novel[step].author;
    Content.innerText = novel[step].text;
    if (novel[step].author === 'Lev') {
        LevIcon.classList.remove('listener');
        LevIcon.classList.add('speaker');
        MashIcon.classList.remove('speaker');
        MashIcon.classList.add('listener');
    }
    else {
        MashIcon.classList.remove('listener');
        MashIcon.classList.add('speaker');
        LevIcon.classList.remove('speaker');
        LevIcon.classList.add('listener');
    }
}

 function next() {
     step = step + 1;
     if (step === novel.length) {
         window.location.href = 'game.html'
     }
     Author.innerText = novel[step].author;
     Content.innerText = novel[step].text;
     if (novel[step].author === 'Lev') {
         LevIcon.classList.remove('listener');
         LevIcon.classList.add('speaker');
         MashIcon.classList.remove('speaker');
         MashIcon.classList.add('listener');
     }
     else {
         MashIcon.classList.remove('listener');
         MashIcon.classList.add('speaker');
         LevIcon.classList.remove('speaker');
         LevIcon.classList.add('listener');
     }
 }