function squareNumber(number){
    var res = number * number;
    var str = 'The result of squaring the number ' + number + ' is ' + res + '.';
    console.log(str);

    return res;
}

function halfNumber(number){
    var res = number / 2;
    var str = 'Half of ' + number + ' is ' + res + '.';
    console.log(str);
    
    return res;
}

function percentOf(number1,number2){
    var res = number1 * 100 / number2;
    var str = number1 + ' is ' + res + '% of ' + number2 + '.';
    console.log(str);
}

function areaOfCircle(radius){
    var res = (Math.PI * radius * radius).toFixed(2);
    var str = 'The area of a circle with radius ' + radius + ' is ' + res + '.';
    console.log(str);
    
    return res;
}

function calculator(number){
    var half = halfNumber(number);
    var square = squareNumber(half);
    var area = areaOfCircle(square);
    percentOf(area,square);
}

calculator(4);
