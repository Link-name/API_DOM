/* Задание 1 (тайминг 30 минут)
Работа с BOM
1. Определение текущего размера окна браузера:
○ Напишите функцию, которая будет выводить текущую
ширину и высоту окна браузера при его изменении */

/* создали функцию которая выводит сообщение */
console.log(window.innnerWidth);
function handleButtonClicl() {
    alert('Кнопка была нажата');
}

/* создали ссылку на элемент в html в данный момент
это button */
var myButton = document.getElementById('myButton')

/* обращаемся  mybutton
*/
myButton.addEventListener('click', handleButtonClicl)

/* выводим на экран размер window */
function
    windowSize() {
        var width = window.innerWidth;
        var height = window.innerHeight;
   /*   var width1 = document.getElementById('width1')
        var height1 = document.getElementById('height1') */
        document.getElementById('width1').innerHTML = width
        document.getElementById('height1').innerHTML = height
        console.log(`width = ${width} , hight = ${height}`);
}
window.addEventListener('resize',windowSize)
windowSize();



/* 2. Подтверждение закрытия страницы:
○ Создайте всплывающее окно или диалоговое окно,
которое появляется при попытке закрыть вкладку
браузера и спрашивает пользователя, уверен ли он в
своем решении закрыть страницу. */


/* window.addEventListener('beforeunload',function(event){
    var confirmationMessage = "Вы уверены, что хотите покинуть страницу?";
    event.returnValue = confirmationMessage;
}) */


/* 3. Управление историей переходов:
○ Используйте объект history для управления историей
переходов на веб-странице. Создайте кнопки "Назад" и
"Вперед" для перемещения по истории. */

document.getElementById("back").addEventListener('click', function() {
    history.back();
}) 
document.getElementById("forward").addEventListener('click',function() {
    history.forward();
});
document.querySelector('selector');
document.addEventListener('load', function (e) {
    // body
});
const titleEl = document.querySelector('.title');
const buttonEl = document.querySelector('.button');
const inputEl = document.querySelector('.input');
buttonEl.addEventListener('click', (e) => {
    titleEl.textContent = inputEl.value

});
