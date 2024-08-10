function displayDrinkMessage() {
    var selectElement = document.getElementById("drinkSelect");
    var selectedValue = selectElement.value;
    var message = "";

    if (selectedValue === "coffee") {
        message = "Ви вибрали Каву.";
    } else if (selectedValue === "tea") {
        message = "Ви вибрали Чай.";
    } else if (selectedValue === "juice") {
        message = "Ви вибрали Сік.";
    }

    document.getElementById("drinkMessage").innerText = message;
}

function checkDayOfWeek() {
    var input = document.getElementById("dayInput").value.toLowerCase();
    var weekdays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
    var weekends = ["субота", "неділя"];
    var message = "";

    if (weekdays.includes(input)) {
        message = "Це робочий день.";
    } else if (weekends.includes(input)) {
        message = "Це вихідний день.";
    } else {
        message = "Це не день тижня.";
    }

    document.getElementById("dayMessage").innerText = message;
}

function displaySeason() {
    var month = parseInt(document.getElementById("monthInput").value);
    var message = "";

    if (month >= 1 && month <= 2 || month === 12) {
        message = "Це зима.";
    } else if (month >= 3 && month <= 5) {
        message = "Це весна.";
    } else if (month >= 6 && month <= 8) {
        message = "Це літо.";
    } else if (month >= 9 && month <= 11) {
        message = "Це осінь.";
    } else {
        message = "Некоректний номер місяця.";
    }

    document.getElementById("seasonMessage").innerText = message;
}

function displayDaysInMonth() {
    var month = parseInt(document.getElementById("daysInMonthInput").value);
    var message = "";
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month >= 1 && month <= 12) {
        message = "Цей місяць має " + days[month - 1] + " днів.";
    } else {
        message = "Некоректний номер місяця.";
    }

    document.getElementById("daysInMonthMessage").innerText = message;
}

function displayColorAction() {
    var color = document.getElementById("colorInput").value.toLowerCase();
    var message = "";

    if (color === "червоний") {
        message = "Стоп";
    } else if (color === "зелений") {
        message = "Йти";
    } else if (color === "жовтий") {
        message = "Чекати";
    } else {
        message = "Некоректний колір.";
    }

    document.getElementById("colorMessage").innerText = message;
}

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operationSelect").value;
    var message = "";

    if (isNaN(num1) || isNaN(num2)) {
        message = "Будь ласка, введіть коректні числа.";
    } else {
        if (operation === "+") {
            message = "Результат: " + (num1 + num2);
        } else if (operation === "-") {
            message = "Результат: " + (num1 - num2);
        } else if (operation === "*") {
            message = "Результат: " + (num1 * num2);
        } else if (operation === "/") {
            if (num2 !== 0) {
                message = "Результат: " + (num1 / num2);
            } else {
                message = "Ділення на нуль неможливе.";
            }
        }
    }

    document.getElementById("calcMessage").innerText = message;
    
}
