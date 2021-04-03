function math(){
    let number1 = document.getElementById('n1').value;
    number1 = parseFloat(number1);
    let number2 = document.getElementById('n2').value;
    number2 = parseFloat(number2);
    let symbol = document.getElementById('symbol').value;
    if(symbol == '+'){
        function plus(n1,n2){
            let result = n1 + n2;
            document.getElementById('out').innerHTML = result;
        };
        plus(number1, number2);
    };
    if(symbol == '-'){
        function minus(n3,n4){
            let result = n3 - n4;
            document.getElementById('out').innerHTML = result;
        };
        minus(number1, number2);
    };
    if(symbol == '*'){
        function multiply(n5,n6){
            let result = n5 * n6;
            document.getElementById('out').innerHTML = result;
        };
        multiply(number1, number2);
    };
    if(symbol == '/'){
        function division(n7,n8){
            let result = n7 / n8;
            document.getElementById('out').innerHTML = result;
        };
        division(number1, number2);
    };
    if(symbol == '**'){
        function Stepen(n9,n10){
            let result = n9 ** n10;
            document.getElementById('out').innerHTML = result;
        };
        Stepen(number1, number2);
    };
    if(symbol == '%'){
        function procent(n11,n12){
            let result = n11 * n12 / 100;
            document.getElementById('out').innerHTML = result;
        };
        procent(number1, number2);
    };
};