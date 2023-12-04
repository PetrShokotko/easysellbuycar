
// _____________________________Отправка формы___________________________________
// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Предотвращение стандартной отправки формы

//     // Создаем объект для хранения данных
//     var formData = {};

//     // Собираем данные из полей формы и добавляем их в объект
//     formData.makes = document.getElementById("makes").value;
//     formData.model = document.getElementById("model").value;
//     formData.year = document.getElementById("year").value;
//     formData.price = document.getElementById("price").value;
//     formData.name = document.getElementById("name").value;
//     formData.number = document.getElementById("number").value;

//     // Создаем строку для вывода данных
//     var message = "Марка: " + formData.makes + "\n" +
//         "Модель: " + formData.model + "\n" +
//         "Год: " + formData.year + "\n" +
//         "Желаемая цена: " + formData.price + "\n" +
//         "Имя: " + formData.name + "\n" +
//         "Номер: " + formData.number;

//     // Выводим сообщение в консоль
//     console.log(message);

//     // Очищаем поля ввода
//     document.getElementById("makes").value = '';
//     document.getElementById("model").value = '';
//     document.getElementById("year").value = ''; // Добавляем эту строку
//     document.getElementById("price").value = '';
//     document.getElementById("name").value = '';
//     document.getElementById("number").value = '';

//     // Показываем кастомное всплывающее окно
//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("customAlert").style.display = "block";

//     // Плавно устанавливаем прозрачность на 1 и фон на размытый
//     setTimeout(function() {
//         document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";
//         document.getElementById("customAlert").style.opacity = 1;
//     }, 10); // Добавляем небольшую задержку

//     // Автоматически закрываем кастомное всплывающее окно через 3 секунды
//     setTimeout(function() {
//         // Плавно устанавливаем прозрачность на 0 и фон на прозрачный
//         document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";
//         document.getElementById("customAlert").style.opacity = 0;

//         // Задержка перед скрытием
//         setTimeout(function() {
//             document.getElementById("overlay").style.display = "none";
//             document.getElementById("customAlert").style.display = "none";
//         }, 500); // Добавляем задержку, чтобы закрытие было плавным
//     }, 3000);
// });

// Код для первой формы
// Обработчик для отправки формы
// ___________________________________________Рабочая без масива _________________________________
// function handleFormSubmit(event) {
//     event.preventDefault(); // Предотвращение стандартной отправки формы

//     // Получаем форму, на которой произошло событие
//     var form = event.target;

//     // Создаем объект для хранения данных
//     var formData = {};

//     // Собираем данные из полей формы и добавляем их в объект
//     formData.makes = getValueByClass(form, ".makes");
//     formData.model = getValueByClass(form, ".model");
//     formData.year = getValueByClass(form, ".year");
//     formData.price = getValueByClass(form, ".price");
//     formData.name = getValueByClass(form, ".name");
//     formData.number = getValueByClass(form, ".number");

//     // Создаем строку для вывода данных
//     var message = "Марка: " + formData.makes + "\n" +
//         "Модель: " + formData.model + "\n" +
//         "Год: " + formData.year + "\n" +
//         "Желаемая цена: " + formData.price + "\n" +
//         "Имя: " + formData.name + "\n" +
//         "Номер: " + formData.number;

//     // Выводим сообщение в консоль
//     console.log(message);

//     // Очищаем поля ввода
//     clearInputValue(form, ".makes");
//     clearInputValue(form, ".model");
//     clearInputValue(form, ".year");
//     clearInputValue(form, ".price");
//     clearInputValue(form, ".name");
//     clearInputValue(form, ".number");

//     // Показываем кастомное всплывающее окно
//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("customAlert").style.display = "block";

//     // Плавно устанавливаем прозрачность на 1 и фон на размытый
//     setTimeout(function () {
//         document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";
//         document.getElementById("customAlert").style.opacity = 1;
//     }, 10); // Добавляем небольшую задержку

//     // Автоматически закрываем кастомное всплывающее окно через 3 секунды
//     setTimeout(function () {
//         // Плавно устанавливаем прозрачность на 0 и фон на прозрачный
//         document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";
//         document.getElementById("customAlert").style.opacity = 0;
//         document.getElementById("modalOverlay").style.background = "rgba(0, 0, 0, 0)";
        
//         document.getElementById("modalWindow").style.opacity = 0;

//         // Задержка перед скрытием
//         setTimeout(function () {
//             document.getElementById("overlay").style.display = "none";
//             document.getElementById("customAlert").style.display = "none";
//             document.getElementById("modalOverlay").style.display = "none";
//             document.getElementById("modalWindow").style.display = "none";
//         }, 500); // Добавляем задержку, чтобы закрытие было плавным
//     }, 3000);
// }

// // Вспомогательная функция для получения значения по классу с проверкой
// function getValueByClass(form, className) {
//     var element = form.querySelector(className);
//     return element ? element.value : '';
// }

// // Вспомогательная функция для очистки значения поля ввода по классу
// function clearInputValue(form, className) {
//     var element = form.querySelector(className);
//     if (element) {
//         element.value = '';
//     }
// }

// // Находим все формы на странице
// var forms = document.querySelectorAll("form");

// // Присваиваем обработчик каждой форме
// forms.forEach(function (form) {
//     form.addEventListener("submit", handleFormSubmit);
// });
function handleFormSubmit(event) {
    event.preventDefault(); // Предотвращение стандартной отправки формы

    // Получаем форму, на которой произошло событие
    var form = event.target;

    // Создаем объект для хранения данных
    var formData = {};

    // Собираем данные из полей формы и добавляем их в объект
    formData.makes = getValueByClass(form, ".makes");
    formData.model = getValueByClass(form, ".model");
    formData.year = getValueByClass(form, ".year");
    formData.price = getValueByClass(form, ".price");
    formData.name = getValueByClass(form, ".name");
    formData.number = getValueByClass(form, ".number");

    // Создаем массив для хранения непустых полей
    var nonEmptyFields = [];

    // Проверяем каждое поле и добавляем его в массив, если оно не пустое
    if (formData.makes) nonEmptyFields.push("Марка: " + formData.makes);
    if (formData.model) nonEmptyFields.push("Модель: " + formData.model);
    if (formData.year) nonEmptyFields.push("Год: " + formData.year);
    if (formData.price) nonEmptyFields.push("Желаемая цена: " + formData.price);
    if (formData.name) nonEmptyFields.push("Имя: " + formData.name);
    if (formData.number) nonEmptyFields.push("Номер: " + formData.number);

    // Формируем сообщение из непустых полей
    var message = nonEmptyFields.join("\n");

    // Проверяем, что хотя бы одно поле заполнено
    if (nonEmptyFields.length > 0) {
        displayMessage(form, message);
    }
}

// Вспомогательная функция для отображения сообщения
function displayMessage(form, message) {
    // Выводим сообщение в консоль
    console.log(message);

    // Очищаем поля ввода
    clearInputValue(form, ".makes");
    clearInputValue(form, ".model");
    clearInputValue(form, ".year");
    clearInputValue(form, ".price");
    clearInputValue(form, ".name");
    clearInputValue(form, ".number");

    // Показываем кастомное всплывающее окно
    document.getElementById("overlay").style.display = "block";
    document.getElementById("customAlert").style.display = "block";

    // Плавно устанавливаем прозрачность на 1 и фон на размытый
    setTimeout(function () {
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";
        document.getElementById("customAlert").style.opacity = 1;
    }, 10); // Добавляем небольшую задержку

    // Автоматически закрываем кастомное всплывающее окно через 3 секунды
    setTimeout(function () {
        // Плавно устанавливаем прозрачность на 0 и фон на прозрачный
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";
        document.getElementById("customAlert").style.opacity = 0;
                document.getElementById("modalOverlay").style.background = "rgba(0, 0, 0, 0)";
        
        document.getElementById("modalWindow").style.opacity = 0;

        // Задержка перед скрытием
        setTimeout(function () {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("customAlert").style.display = "none";
            document.getElementById("modalOverlay").style.display = "none";
            document.getElementById("modalWindow").style.display = "none";
        }, 500); // Добавляем задержку, чтобы закрытие было плавным
    }, 3000);
}

// Вспомогательная функция для получения значения по классу с проверкой
function getValueByClass(form, className) {
    var element = form.querySelector(className);
    return element ? element.value : '';
}

// Вспомогательная функция для очистки значения поля ввода по классу
function clearInputValue(form, className) {
    var element = form.querySelector(className);
    if (element) {
        element.value = '';
    }
}

// Находим все формы на странице
var forms = document.querySelectorAll("form");

// Присваиваем обработчик каждой форме
forms.forEach(function (form) {
    form.addEventListener("submit", handleFormSubmit);
});

//  ____________________________________ Открытия модального окна ___________________________________
var openModalBtn = document.getElementById("openModal");
    var closeModalBtn = document.getElementById("closeModal");
    var modalOverlay = document.getElementById("modalOverlay");
    var modalWindow = document.querySelector(".modal-window");

    openModalBtn.addEventListener("click", function() {
        modalOverlay.style.display = "block";
        setTimeout(function() {
            modalOverlay.style.background = "rgba(0, 0, 0, 0.5)";
            setTimeout(function() {
                modalOverlay.style.opacity = "1";
                modalWindow.style.display = "block";
                setTimeout(function() {
                    modalWindow.style.opacity = "1";
                }, 10);
            }, 10);
        }, 10);
    });

    closeModalBtn.addEventListener("click", function() {
        modalOverlay.style.opacity = "0";
        setTimeout(function() {
            modalOverlay.style.background = "rgba(0, 0, 0, 0)";
            modalWindow.style.opacity = "0";
            setTimeout(function() {
                modalOverlay.style.display = "none";
                modalWindow.style.display = "none";
            }, 500);
        }, 10);
    });
// _____________________________________Переключение кнопками____________________________________-х___
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const stepItems = document.querySelectorAll(".step-list-item");

let currentIndex = 0;

// Функция для отображения текущего элемента с анимацией
function showCurrentStep() {
    stepItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.opacity = 1;
            item.style.height = "300px"; // Восстанавливаем высоту элемента
        } else {
            item.style.opacity = 0;
            item.style.height = "0"; // Устанавливаем нулевую высоту элемента
        }
    });
}

// Обработчик события для кнопки "Назад"
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + stepItems.length) % stepItems.length;
    showCurrentStep();
});

// Обработчик события для кнопки "Вперед"
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % stepItems.length;
    showCurrentStep();
});

// Вызов функции для отображения первого элемента при загрузке страницы
showCurrentStep();


// __________________________________
// document.addEventListener('DOMContentLoaded', function () {
//     var numberInput = document.getElementById('number');

//     var maskOptions = {
//       mask: Number,
//       scale: 0,  // Ограничиваем ввод только целыми числами
//       signed: false,  // Запрещаем ввод отрицательных чисел
//       thousandsSeparator: '',  // Отключаем разделитель тысяч
//       padFractionalZeros: false,  // Отключаем нули после точки для целых чисел
//       normalizeZeros: true,  // Нормализуем нули при вводе
//       radix: '.'  // Задаем разделитель десятичной части
//     };

//     var mask = IMask(numberInput, maskOptions);
// });
// ________________________________________Выбор года Select _____________________________________________
var selectYears = document.querySelectorAll('.year');

selectYears.forEach(function(selectYear) {
    for (var year = 1990; year <= 2024; year++) {
        var option = document.createElement('option');
        option.value = year;
        option.text = year;
        selectYear.add(option);
    }
});
  



// document.addEventListener('DOMContentLoaded', function () {
//     var numberInput = document.getElementById('number');

//     var maskOptions = {
//       mask: '+38 000 000 00 00',
//       lazy: false
//     };

//     var mask = IMask(numberInput, maskOptions);

//     // Добавляем слушатель события input, чтобы обновлять маску при вводе цифр
//     numberInput.addEventListener('input', function () {
//       mask.updateValue();
//     });
//   });


// __________________________________ Маска номера телефона и ее активация ________________________---
document.addEventListener('DOMContentLoaded', function () {
    // Выбираем все элементы с классом "number"
    var numberInputs = document.getElementsByClassName('number');
    var masks = [];

    var maskOptions = {
        mask: '+38 000 000 00 00',
        lazy: false
    };

    // Добавляем слушатель события focus для каждого элемента
    Array.from(numberInputs).forEach(function (numberInput) {
        numberInput.addEventListener('focus', function () {
            // Проверяем, была ли уже применена маска к этому элементу
            if (!masks[numberInput.id]) {
                masks[numberInput.id] = IMask(numberInput, maskOptions);
                numberInput.setAttribute('placeholder', numberInput.getAttribute('data-mask-placeholder'));
            }
        });

        // Добавляем слушатель разфокуса для каждого элемента
        numberInput.addEventListener('blur', function () {
            if (masks[numberInput.id]) {
                masks[numberInput.id].destroy();
                masks[numberInput.id] = null;
                numberInput.removeAttribute('placeholder');
            }
        });
    });
});
// document.addEventListener('DOMContentLoaded', function () {
//     var numberInput = document.getElementById('number');
//     var mask;

//     var maskOptions = {
//         mask: '+38 000 000 00 00',
//         lazy: false
//     };

//     // Добавляем слушатель события focus, чтобы активировать маску и восстановить placeholder
//     numberInput.addEventListener('focus', function () {
//         if (!mask) {
//             mask = IMask(numberInput, maskOptions);
//             numberInput.setAttribute('placeholder', numberInput.getAttribute('data-mask-placeholder'));
//         }
//     });

//     // Добавляем слушатель разфокуса, чтобы убрать placeholder маски
//     numberInput.addEventListener('blur', function () {
//         if (mask) {
//             mask.destroy();
//             mask = null;
//             numberInput.removeAttribute('placeholder');
//         }
//     });
// });

// __________________________________ Маска $ и желаемой цены в цифрах ____________________________
// document.addEventListener('DOMContentLoaded', function () {
//   var priceInput = document.getElementById('price');

//   var maskOptions = {
//     mask: '$ num',
//     lazy: false,
//     blocks: {
//       num: {
//         mask: Number,
//         thousandsSeparator: ' '
//       }
//     }
//   };

//   var mask = IMask(priceInput, maskOptions);

//   // Добавляем слушатель события input, чтобы обновлять маску при вводе цифр
//   priceInput.addEventListener('input', function () {
//     mask.updateValue();
//   });
// });

// -----------------------------------рабочий код
// document.addEventListener('DOMContentLoaded', function () {
//     var priceInput = document.getElementById('price');
//     var mask;

//     var maskOptions = {
//         mask: '$ num',
//         lazy: false,
//         blocks: {
//             num: {
//                 mask: Number,
//                 thousandsSeparator: ' '
//             }
//         }
//     };

//     // Добавляем слушатель события focus, чтобы активировать маску и восстановить placeholder
//     priceInput.addEventListener('focus', function () {
//         if (!mask) {
//             mask = IMask(priceInput, maskOptions);
//             priceInput.setAttribute('placeholder', priceInput.getAttribute('data-mask-placeholder'));
//         }
//     });

//     // Добавляем слушатель разфокуса, чтобы убрать placeholder маски
//     priceInput.addEventListener('blur', function () {
//         if (mask) {
//             mask.destroy();
//             mask = null;
//             priceInput.removeAttribute('placeholder');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Функция, которую можно повторно использовать для применения маски
    function applyMaskToInput(input) {
        var maskOptions = {
            mask: '$ num',
            lazy: false,
            blocks: {
                num: {
                    mask: Number,
                    thousandsSeparator: ' '
                }
            }
        };

        input.addEventListener('focus', function () {
            if (!input.mask) {
                input.mask = IMask(input, maskOptions);
                input.setAttribute('placeholder', input.getAttribute('data-mask-placeholder'));
            }
        });

        input.addEventListener('blur', function () {
            if (input.mask) {
                input.mask.destroy();
                input.mask = null;
                input.removeAttribute('placeholder');
            }
        });
    }

    // Найти и применить маску ко всем элементам с классом "price"
    var priceInputs = document.querySelectorAll('.price');
    priceInputs.forEach(function (input) {
        applyMaskToInput(input);
    });
});



