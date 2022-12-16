'use strict';

const images = [
    { 'id': '1', 'url':'./img/Sabotagem.jpg' },
    { 'id': '2', 'url':'./img/TIM.jpg' },
    { 'id': '3', 'url':'./img/Zeca.jpg' },
    { 'id': '4', 'url':'./img/RZO.jpg' },
    { 'id': '5', 'url':'./img/Racionais.jpg' },
    { 'id': '6', 'url':'./img/Martinho.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);