//Estudiantes

let estudiantes=[];

crearEstudiante=function(){
    let nombre=recuperarTexto("txtNombre");
    let curso =recuperarTexto("txtCurso");
    let matriculaR=recuperarTexto("txtMatricula");
    let estudiante={};
    estudiante.nombre=nombre;
    estudiante.curso=curso;
    estudiante.matricula=matriculaR;
    return estudiante
}

agregarEstudiante=function(){
    estudianteCreado=crearEstudiante();
    estudiantes.push(estudianteCreado);
    console.log(estudiantes);
    refrescarEstudiante();
}

refrescarEstudiante=function(){
    let cmpTabla=document.getElementById("tablaEstudiantes");
    let contenidoTabla="<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>CURSO</th>"+
    "<th>MATRICULAS</th>"+
    "</tr>";
    let elementoEstudiante;
    for (let i=0;i<estudiantes.length;i++){
        elementoEstudiante=estudiantes[i];
        contenidoTabla+="<tr><td>"+elementoEstudiante.nombre+"</td>"+
        "<td>"+elementoEstudiante.curso+"</td>"+
        "<td>"+elementoEstudiante.matricula+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}
buscarEstudiante=function(){
    let estudianteIterado;
    let estudianteEncontrado=false;
    let nombre=recuperarTexto("txtIdentificador");
    for(let i=0;i<estudiantes.length;i++){
        estudianteIterado=estudiantes[i];
        if (estudianteIterado.nombre==nombre){
            estudianteEncontrado=true
        }
    }
    if(estudianteEncontrado==true){
        alert("ESTUDIANTE ENCONTRADO");
    }else{
        alert("ESTUDIANTE NO ENCONTRADO");
    }
}

recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}

//Aulas

let aulas = [];

crearAula = function () {
    let aula = {};
    let numeroAulaC;
    let horarioC;
    let capacidadMaximaC;

    let componenteNumeroAula = document.getElementById("txtNumeroAula");
    let componenteHorario = document.getElementById("txtHorario");
    let componenteCapacidad = document.getElementById("txtCapacidadMaxima");
    numeroAulaC = componenteNumeroAula.value;
    horarioC = componenteHorario.value;
    capacidadMaximaC = componenteCapacidad.value;

    aula.numeroAula = numeroAulaC;
    aula.horario = horarioC;
    aula.capacidadMaxima = capacidadMaximaC;

    return aula;
}

agregarAula = function () {
    let aulaC = crearAula();
    aulas.push(aulaC);
    let elementoAula
    for (let i = 0; i < aulas.length; i++) {
        elementoAula = aulas[i];
        console.log(elementoAula.numeroAula);
        console.log(elementoAula.horario);
        console.log(elementoAula.capacidadMaxima);
    }

}

refrescar = function () {
    let cmpTabla = document.getElementById("tabla");
    let tabla = "<table>"
        + "<tr>"
        + "<th>NUMERO AULA</th>"
        + "<th>HORARIO</th>"
        + "<th>CAPACIDAD</th>"
        + "</tr>"
    let elementoAula;
    for (let i = 0; i < aulas.length; i++) {
        elementoAula = aulas[i];
        tabla +=
            "<tr>"
            + "<td>" + elementoAula.numeroAula + "</td>"
            + "<td>" + elementoAula.horario + "</td>"
            + "<td>" + elementoAula.capacidadMaxima + "</td>"
        "</tr>"
    }
    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
}

buscarAula = function () {
    let componenteBuscar = document.getElementById("txtBuscar");
    let numAula = componenteBuscar.value;
    let elementoAula;
    let aulaEncontrada = null;
    for (let i = 0; i < aulas.length; i++) {
        elementoAula = aulas[i];
        if (numAula == elementoAula.numeroAula) {
            aulaEncontrada = elementoAula;
            break;
        }
    }
    if (aulaEncontrada != null) {
        alert("Aula Encontrada");
    } else {
        alert("Aula no Encontrada")
    }
}