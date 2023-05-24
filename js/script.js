'use strict';

//creo un array con tutti i prodotti da acquistare
let shoppingItems = [
    'farina',
    'lievito',
    'acqua',
    'pomodoro',
    'mozzarella',
    'basilico',
    'olio'
]

//dichiaro la variabile che contiene l'elemento del DOM dove dovrò inserire la lista della spesa
let shoppingList = document.querySelector('.shopping-list');

//creo un ciclo che aggiunge gli elementi dell'array alla lista della spesa
let contatore = 0;
while ( contatore < shoppingItems.length) {
    let listItem = document.createElement('li');
    listItem.innerText = `${shoppingItems[contatore]}`;
    shoppingList.append(listItem);
    contatore++
}