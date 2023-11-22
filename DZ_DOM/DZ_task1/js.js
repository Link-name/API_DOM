function updateOrientation() {
    var orientationMessage = document.querySelector('.orientationMessage');

    // Проверяем текущую ориентацию
    if (window.matchMedia("(orientation: portrait)").matches) {
        orientationMessage.textContent = "Ориентация: Ландшафтная";
        
    } else {
        orientationMessage.textContent = "Ориентация: Портретная";
    }
}

// Вызываем функцию при загрузке страницы
updateOrientation();

// Отслеживаем событие изменения ориентации экрана
window.addEventListener("orientationchange", function () {
    updateOrientation();
});