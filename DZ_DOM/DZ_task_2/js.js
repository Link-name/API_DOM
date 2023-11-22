/* Создайте веб-форму с текстовым полем. Реализуйте функционал, при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, но несохраненных данных. */
var formChanged = false;

function setFormChanged() {
    formChanged = true;
}

// Обработчик изменения текстового поля
document.querySelector(".textInput").addEventListener("input", setFormChanged);

// Обработчик нажатия на кнопку отправки
document.querySelector(".submitButton").addEventListener("click", function() {
    formChanged = false;
    alert("Данные успешно отправлены!");
});

// Обработчик попытки закрыть вкладку
window.addEventListener("beforeunload", function(event) {
    if (formChanged) {
        // Создаем кастомное сообщение для диалогового окна
        var confirmationMessage = "Вы уверены, что хотите покинуть страницу? Введенные данные могут быть потеряны.";
        // (стандарт) Всплывающее окно браузера с кастомным сообщением
        event.returnValue = confirmationMessage;
        return confirmationMessage;
    }
});