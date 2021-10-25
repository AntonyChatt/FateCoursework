let banner = document.getElementById('banner');
let start = document.getElementById('start');
document.getElementById('accept').addEventListener("click", acceptAction);

function acceptAction () {
    banner.style.display='none';
    start.style.display='flex';
}