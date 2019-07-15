var x = Number(prompt("Enter x:"));
var y = Number(prompt("Enter y:"));

if (!(isNaN(x) || isNaN(y))) {
    switch (prompt("Enter operator:")) {
        case "+":
            alert("x + y ="+(x+y)); break;
        case "-":
            alert("x - y ="+(x-y)); break;
        case "*":
            alert("x * y ="+(x*y)); break;
        case "/":
            if (y != 0) {
                alert("x / y ="+(x/y));
                }
            else {
                alert ("На ноль делить нельзя");
            }
        break;
    default:   
        alert("Непонятная операция!"); break;
        }
    }
    else {alert ("Это не похоже на число");}