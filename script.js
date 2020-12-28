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
else {
    if (isNaN(num1) && isNaN(num2) && isNaN(num3)){
        alert('вы не ввели число')}
        else if (isNaN(num1) ){
            alert('первое число не число')
        }
        else if (isNaN(num2)){
            alert('второе число не число')
        }
        else if (isNaN(num3)){
            alert('третье число не число')
        }
        else if ( isNaN(num1) && isNaN(num2) ){
            alert('первые два числа не числа')
        }
        else if ( isNaN(num1) && isNaN(num3) ){
            alert('первое и последнее числа не числа')
        }
        else if ( isNaN(num2) && isNaN(num3) ){
            alert('последние два числа не числа')
        }
    }
