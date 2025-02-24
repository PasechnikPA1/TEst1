// script.js

// Пример: Изменение текста при нажатии на кнопку
document.getElementById('changeTextButton').addEventListener('click', function() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = '<p>Текст был изменен с помощью JavaScript!</p>';
});

// Пример: Динамическое добавление элементов
const newElement = document.createElement('p');
newElement.textContent = 'Этот элемент был добавлен с помощью JavaScript.';
document.getElementById('content').appendChild(newElement);