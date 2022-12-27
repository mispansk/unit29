//Функция для фильтрации контента

function filterContent() {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}

// глобалльная переменная
let session = new Map();

// сохранение данных сессии
function handleSession() {
    // сохнанение времени начала сессии
    session.set("startDate", new Date().toLocaleString())
    //сохранение userAgent
    session.set("userAgent", window.navigator.userAgent)
}
// проверка возраста пользователя
function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст:"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

// Вывод в консоль сессии
function printSession() {
    for (let result of session) {
        console.log(result)
    }
}

// всплывающее окно (предложение на подписку)
setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    20000);