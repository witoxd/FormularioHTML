



menu()

function RealizarOperacion(nump, nums, operacion) {
    if (operacion === '1') {
        alert('La suma de la operacion es: ' + Suma(nump, nums));
       
    } else if (operacion === '2') {
        alert('La resta de la operacion es: ' + resta(nump, nums));
       
    } else if (operacion === '3') {
        alert('La multiplicacion de la operacion es: ' + multiplicacion(nump, nums));
      
    } else {
        alert('La division de la operacion es: ' + Division(nump, nums));
     
    }
}


function CapturarDatos(operacion) {

    let nump = 0;
    let nums = 0;

    while (nump == 0) {
        nump = prompt('\n Por favor ingrese su primer numero, no puede ser 0');
    }
    while (nums == 0) {
        nums = prompt('\n Por favor ingrese su segundo numero, no puede ser 0');
    }

    RealizarOperacion(Number(nump), Number(nums), operacion)
    menu()
}


function menu() {
    operacion = prompt('\nCalculadora Basica elija un numero esto indica la operacion que desea realizar: \n \n 1-Suma   \n 2-Resta  \n 3-Multiplicacion  \n 4-Division \n 0-Salir \n \n Elija una opcion:');

    if (operacion > 0 && operacion <= 4) {
        CapturarDatos(operacion)
    } else if (operacion == null || operacion == 0) {
        alert("Fin de la operacion")
    } else {
        alert("Opcion no valida, no tas viendo que tienes unas cuantas opciones y te haces el pendejo y elijes otra????????")
        menu()
    }
}

function Suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function Division(num1, num2) {
    return num1 / num2;
}