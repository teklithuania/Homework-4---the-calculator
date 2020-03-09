/* The Calculator

Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

Bonus: Round the result so there are only two digits after the decimal.
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate what percentage that half is of the squared result (#3). */

function squareNumber(num) {
    let squareNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squareNumber+'.');
    return squareNumber
}
squareNumber(3);

function halfNumber(num2) {
    let halfNumber = num2 / 2;
    console.log('Half of '+ num2 + ' is ' + halfNumber+'.');
    return halfNumber;
}
halfNumber(5);

function percentOf(num3, num4) {
    let percentOf = (num3 / num4) * 100;
    console.log(num3 + ' is ' + percentOf + '%' + ' of ' + num4 +'.');
    return percentOf;
}

percentOf(45, 100);


function bonus(num10) {
    let half = halfNumber(num10);
    let squered = squareNumber(half);
    let result = percentOf(squered, half);
}
bonus(5);

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);