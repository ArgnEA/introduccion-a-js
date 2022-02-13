//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

$btnCalcular = document.querySelector("#btn-calcular");
$btnCalcular.onclick = function(){
    $horas = document.querySelectorAll(".horas");
    horasTotales = calcularTiempo($horas);
    $minutos = document.querySelectorAll(".minutos");
    minutosTotales = calcularTiempo($minutos);
    $segundos = document.querySelectorAll(".segundos");
    segundosTotales = calcularTiempo($segundos);
    document.querySelector("#total").innerText = `Horas: ${horasTotales} Minutos: ${minutosTotales} Segundos: ${segundosTotales}`;
}

function calcularTiempo(tiempo){
    tiempoTotal = 0
    for (let i = 0; i < tiempo.length; i++) {
        tiempoTotal += Number(tiempo[i].value);
    }
    return tiempoTotal;
}