var quotes = [
    [
       "\"Я утверждаю, что добро всегда побеждает зло,\
        а терпение сильнее самурайского меча.\"",

       "В.Цой"
    ],

    [
        "\"Петр I хотел нас поставить на истинный путь,\
         но где-то произошла ошибка...\"",

        "М.Ю.Горшинёв"
    ],

    [
        "\"Если вы хотите успеха, а готовитесь к поражению,\
         то вы получите как раз то, к чему готовитесь.\"",

        "Флоренс Шин"
    ],

    [
        "\"По свету бродят мертвецы, с такими добрыми глазами...\"",

        "КиШ"
    ]
];

document.getElementById("next-quote").addEventListener("click", function() {

    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    var phrase = document.querySelector("#phrase");

    var author = document.querySelector("#author");

    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1];  
});
