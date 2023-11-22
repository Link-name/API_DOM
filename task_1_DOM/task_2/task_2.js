/* Вы должны создать веб-страницу, которая позволяет пользователю динамически
управлять элементами на странице. Ниже приведены основные требования и
функциональность:
1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
"Клонировать элемент".
2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
должен иметь класс .box и содержать текст, указывающий порядковый номер
элемента (1, 2, 3 и так далее).
3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
элемент, если таковой имеется.
4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
добавленного элемента и добавляется на страницу.
5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
любом количестве. */

const contentEl = document.querySelector('.content');
/* var h1El = document.createTextNode("Дополнительный текст");  \\просто создает тест*/

const h1El = document.createElement('h1')
h1El.classList.add('title')
const taxtH1El = h1El.textContent = '1'
const textEl2 = "Новый текст"
var textNode = document.createTextNode("Дополнительный текст");
h1El.textContent = `${taxtH1El} ${textEl2}`
contentEl.appendChild(h1El)
h1El.classList.add('title')


const button_add = document.querySelector('.button_add');
const contenerSquaredrate = document.createElement('div')
contenerSquaredrate.classList.add("contenerSquaredrate")
contentEl.appendChild(contenerSquaredrate)
let count = 0;
button_add.addEventListener('click', (e) => {
    count++;
    const squaredrateEl = document.createElement('div');
    squaredrateEl.classList.add('squaredrate')
    squaredrateEl.textContent = count
    /*     const namb = document.createTextNode(count++); */

    contenerSquaredrate.appendChild(squaredrateEl)
});
const button_delet = document.querySelector('.button_delet');
button_delet.addEventListener('click', function () {
    count--;
    const listEl = contenerSquaredrate.lastChild;
    if (listEl) {
        contenerSquaredrate.removeChild(listEl)
    } else {
        alert('Элементов нет ')
    }
});