var num1 = +prompt('введите первое число')
var num2 = +prompt('введите второе число')
var num3 = +prompt('введите третье число')

if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){
    alert(num1)
}
else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3){
    alert(num2)
}
else if ( num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2){
    alert(num3)
}
