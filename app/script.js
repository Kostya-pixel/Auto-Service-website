// document.querySelector('.header__btn-callback').onclick = function () {
// console.log('visible');
// document.querySelector('.dialog__window').style.visibility = 'visible';
// };

// document.getElementById('2').onclick =  function () {
// console.log('visible');
// document.querySelector('.dialog__window').style.visibility = 'visible'; 
// }; 

let btnHeader = document.getElementById('1');
let btnFooter = document.getElementById('2');
let cancelDialogWindow = document.querySelector('.block-inner');

// btnHeader.onclick = function f1() {
// console.log('visible');
// document.querySelector('.dialog__window').style.visibility = 'visible';
// };
//     cancelDialogWindow.onclick = function f1() {
// console.log('closed');
// document.querySelector('.dialog__window').style.visibility = 'hidden'; 
// }
btnFooter.onclick =  function f2() {
console.log('visible');
document.querySelector('.dialog__window').style.display = 'none'; 
}; 
cancelDialogWindow.onclick = function f3() {
console.log('closed');
document.querySelector('.dialog__window').style.display = 'block';
}