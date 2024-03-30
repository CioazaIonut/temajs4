const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const calculatorNumber = document.querySelector('.calculator-number');

// setup pentru butonul de plus
const addOne = () => {
    calculatorNumber.innerText = parseInt(calculatorNumber.innerText) + 1;
};

plusButton.addEventListener('click', addOne);

// setup pentru butonul de minus

const minusOne = () => {
    console.log('minus!!!');
};

minusButton.addEventListener('click', minusOne);

// In javascript avem mai multe tipuri de date
// Principalele - number, string, boolean, array si object

// x are o valoare de tip number
const x = 5;

// y are o valoare de tip string
const y = 'Numele meu este Cristian';

/* !!!!!!!!!!!!!!!!!!

la scadere de exemplu
let a = 10;
let b = 5;
let rezultat = a - b;
console.log(rezultat);

la inmultire 
let a = 10;
let b = 5;
let rezultat = a * b;
console.log(rezultat);

la impartire
let a = 10;
let b = 5;
let rezultat = a / b;
console.log(rezultat);

nu am inteles cum sa le implementez in exercitiul de fata*/