function ChangeColor() {
    let palb = document.getElementById('btn-pallet-black');
    let palw = document.getElementById('btn-pallet-white');
    let eyeb = document.getElementById('btn-eye-black');
    let eyew = document.getElementById('btn-eye-white');

    let container = document.getElementById('container');
    let body = document.getElementById('body');

    array = [palb,palw,eyeb,eyew];
    for (i = 0; i < array.length; i++) {
        array[i].classList.toggle('hidden');
        array[i].classList.toggle('visible');
    };

    container.classList.toggle('containerb');
    body.classList.toggle('bodyb')
}
function ChangeSize() {
    let text = [];
    let main = [];
    let aside = document.querySelectorAll('.header__title-aside') ;
    for (i = 0; i < aside.length; i++) {
        aside[i].classList.toggle('hide');
    }
    for (i = 1; i <= 5; i++){
        text.push(document.querySelectorAll(`h${i}`));
        main.push(document.querySelectorAll(`h${i}`));
    };

    text.push(document.querySelectorAll('p'));

    for (i = 0; i < text.length; i++){
        for (j = 0; j < text[i].length; j++) {
            text[i][j].classList.toggle('bigsize');
        }
    };
    for (i = 0; i < main.length; i++){
        for (k = 0; k < main[i].length; k++) {
            main[i][k].classList.toggle('bright');
        };
    };
    document.querySelector('h1').classList.toggle('h1big')
};