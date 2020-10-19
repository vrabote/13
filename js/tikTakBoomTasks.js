const tasks = `

    [
        {
            "question": "Конда при сравнении null и undefined мы получаем true,",
            "answer1": { "result": true, "value": "используем оператор ==" },
            "answer2": { "result": false, "value": "используем оператор ===" }
        },
        {
            "question": "У метода addEventListener есть третий необязательный параметр — useCapture. Что означаете его значени false (по умолчанию)?",
            "answer1": { "result": true, "value": "событие начинается с фазы всплытия" },
            "answer2": { "result": false, "value": "событие начинается с фазы погружения" }
        },
        {
            "question": " Что такое цель события или целевой элемент (event.target)?",
            "answer1": { "result": true, "value": "это элемент, в котором происходит событие" },
            "answer2": { "result": false, "value": "значение поля ввода" }
        },
        {
            "question": "Что такое текущая цель события (event.currentTarget)?",
            "answer1": { "result": true, "value": "это элемент, к которому прикреплен прослушиватель событий." },
            "answer2": { "result": false, "value": "значение текущего элемента" }
        },
        {
            "question": "x = '1'  y = 1 Вопрос что будет результатом x===y ?",
            "answer1": { "result": true, "value": "false" },
            "answer2": { "result": false, "value": "true" }
        },
        {
            "question": "Как сравниваются между собой объекты?",
            "answer1": { "result": true, "value": "по ссылке" },
            "answer2": { "result": false, "value": "по значению"}
        },
        {
            "question": "чему будет равен !![] ?",
            "answer1": { "result": true, "value": "true" },
            "answer2": { "result": false, "value": "false" }
        },
        {
            "question": "чему будет равен !!' ' (c пробелом) ?",
            "answer1": { "result": true, "value": "true" },
            "answer2": { "result": false, "value": "false" }
        },
        {
            "question": "Как проверить, является ли значение ложным?",
            "answer1": { "result": true, "value": "использовать оператор !!" },
            "answer2": { "result": false, "value": "использовать оператор !" }
        },
        {
            "question": "Для чего в том числе используется директива «use strict»?",
            "answer1": { "result": true, "value": "Запрещает обращаться к необъявленным переменным:" },
            "answer2": { "result": false, "value": "Разрешает обращаться к необъявленным переменным:" }
        },
        {
            "question": " Можно ли сохранить значение this в переменной:",
            "answer1": { "result": true, "value": "да" },
            "answer2": { "result": false, "value": "нет" }
        },
        {
            "question": "Верно ли, что стрелочные функции не имеют собственного значения this",
            "answer1": { "result": true, "value": "да" },
            "answer2": { "result": false, "value": "нет" }
        },
        {
            "question": "Что такое прототип объекта? ",
            "answer1": { "result": true, "value": " план (схема или проект) объекта." },
            "answer2": { "result": false, "value": "функция, управляющая объектом" }
        },
        {
            "question": "Для чего используется метод Function.prototype.call?",
            "answer1": { "result": true, "value": " для привязки определенного объекта к значению this вызываемой функции" },
            "answer2": { "result": false, "value": "для получения значения прототипа при вызове функции" }
        },
        {
            "question": "В чем разница между методами call и apply? ",
            "answer1": { "result": true, "value": "В apply аргументы передаются в виде массива, в call — через запятую.4" },
            "answer2": { "result": false, "value": "В apply применяется функция, а в call она только вызывается без параметров" }
        },
        {
            "question": "Какой массив возвращает метод map с результатами вызова callback для каждого элемента массива:",
            "answer1": { "result": true, "value": "новый" },
            "answer2": { "result": false, "value": "текущий" }
        },
        {
            "question": "Что такое функции высшего порядка (Higher Order Functions)?",
            "answer1": { "result": true, "value": " это функция, возвращающая другую функцию или принимающая другую функцию в качестве аргумента." },
            "answer2": { "result": false, "value": "это функция, возвращает только глобавльные переменные" }
        },
        {
            "question": "Можно ли создать объект, не имеющий прототипа?",
            "answer1": { "result": true, "value": "да" },
            "answer2": { "result": false, "value": "нет" }
        },
        {
            "question": "Будут ли глобальными переменные, если объявить их с помощью «var»?",
            "answer1": { "result": true, "value": "да" },
            "answer2": { "result": false, "value": "нет" }
        },
        {
            "question": "Можно ли передавать параметры в стрелочные функции?",
            "answer1": { "result": true, "value": "да" },
            "answer2": { "result": false, "value": "нет" }
        },
        {
            "question": "Сколько аргументов принимает метод reduce? ",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "3" }
        },
        {
            "question": "Что такое модули (Modules)?",
            "answer1": { "result": true, "value": "Модули позволяют объединять (использовать) код из разных файлов" },
            "answer2": { "result": false, "value": "Модули позволяют объединять (использовать) код из разных классов" }
        },
        {
            "question": "Можно ли в в объекте Set хранить одиннаковые значения?",
            "answer1": { "result": true, "value": "нет" },
            "answer2": { "result": false, "value": "да" }
        },
        {
            "question": "C помощью какого метода можно удалить повторяющиеся значения в массиве?",
            "answer1": { "result": true, "value": "Set" },
            "answer2": { "result": false, "value": "Map" }
        },
        {
            "question": "Как работает функция обратного вызова (Callback Function)?",
            "answer1": { "result": true, "value": " вызов может быть отложен на будущее " },
            "answer2": { "result": false, "value": "вызывается сразу" }
        },
        {
            "question": "Что такое промисы (Promises)?",
            "answer1": { "result": true, "value": "один из приемов работы с асинхронным кодом в JS" },
            "answer2": { "result": false, "value": "обработчики ошибок при работе callback функциями" }
        },
        {
            "question": " Что заставяет возвращать использование ключевого слова «async» перед функцией",
            "answer1": { "result": true, "value": "промис" },
            "answer2": { "result": false, "value": "задержку по времени" }
        },
        {
            "question": "Могут ли примитивы строка, число и boolean иметь свойства и методы, несмотря на то, что они не являются объектами?",
            "answer1": { "result": true, "value": "да" },
            "answer2": { "result": false, "value": "нет" },
            "questionMillion": 1
            
        },
        {
            "question": "Что будет результатом: console.log(11 + '77')",
            "answer1": { "result": true, "value": "1177" },
            "answer2": { "result": false, "value": "undefined" }
        },
        {
            "question": "Можно ли JS создать объект с помощью функции конструктора",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "3" }
        },
        {
            "question": "Что будет возвращать  typeof null == 'object' ",
            "answer1": { "result": true, "value": "true" },
            "answer2": { "result": false, "value": "false" },
            "question8": 1
            
        }
                
    ]
`;
