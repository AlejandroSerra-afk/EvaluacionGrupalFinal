//Estudiantes

let estudiantes = [];

crearEstudiante = function () {
    let nombre = recuperarTexto("txtNombre");
    let curso = recuperarTexto("txtCurso");
    let matriculaR = recuperarTexto("txtMatricula");
    let estudiante = {};
    estudiante.nombre = nombre;
    estudiante.curso = curso;
    estudiante.matricula = matriculaR;
    return estudiante
}

agregarEstudiante = function () {
    estudianteCreado = crearEstudiante();
    estudiantes.push(estudianteCreado);
    console.log(estudiantes);
    refrescarEstudiante();
}

refrescarEstudiante = function () {
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>CURSO</th>" +
        "<th>MATRICULAS</th>" +
        "</tr>";
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiante = estudiantes[i];
        contenidoTabla += "<tr><td>" + elementoEstudiante.nombre + "</td>" +
            "<td>" + elementoEstudiante.curso + "</td>" +
            "<td>" + elementoEstudiante.matricula + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla
}
buscarEstudiante = function () {
    let estudianteIterado;
    let estudianteEncontrado = false;
    let nombre = recuperarTexto("txtIdentificador");
    for (let i = 0; i < estudiantes.length; i++) {
        estudianteIterado = estudiantes[i];
        if (estudianteIterado.nombre == nombre) {
            estudianteEncontrado = true
        }
    }
    if (estudianteEncontrado == true) {
        alert("ESTUDIANTE ENCONTRADO");
    } else {
        alert("ESTUDIANTE NO ENCONTRADO");
    }
}

recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
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
// Profesor1

let profesores1 = []

crearProfesor1 = function () {
    let nombre = recuperarTexto("txtNombre1");
    let edad = recuperarTexto("txtEdad1");
    let email = recuperarTexto("txtEmail1");

    let profesor = { nombre, edad, email }

    return profesor

}

agregarProfesor1 = function () {

    let profesor1 = crearProfesor1();

    profesores1.push(profesor1);

    console.log(profesores1);
}

refrescarProfesor1 = function () {
    let guardar
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "<th>EMAIL</th>" +
        "</tr>"

    for (let i = 0; i < profesores1.length; i++) {
        guardar = profesores1[i]
        contenidoTabla += "<tr>" +
            "<td>" + guardar.nombre + "</td>" +
            "<td>" + guardar.edad + "</td>" +
            "<td>" + guardar.email + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla = document.getElementById("Tabla")
    cmpTabla.innerHTML = contenidoTabla
}

buscarProfesor1 = function () {
    let buscarProfe = recuperarTexto("txtBuscar")

    let elementoPersona

    for (let i = 0; i < profesores1.length; i++) {
        elementoPersona = profesores1[i]


        if (elementoPersona.nombre == buscarProfe) {
            alert("Profesor " + buscarProfe + " Encontrado")
        } else {
            alert("Profesro No Encontrado")
        }
    }
}

// Profesor2
let profesores2 = []

crearProfesor2 = function () {
    let valorNombre = recuperarTexto("txtNombre")
    let valorEdad = recuperarTexto("txtEdad")
    let valorEmail = recuperarTexto("txtEmail")

    let profesor = {}

    profesor.valorNombre = valorNombre
    profesor.valorEdad = valorEdad
    profesor.valorEmail = valorEmail

    return profesor
}

agregarProfesor2 = function (profesor) {
    let nuevoProfesor = crearProfesor2(profesor)

    profesores2.push(nuevoProfesor)

}

refrescarProfesor2 = function () {
    let cmpTabla = document.getElementById("tablaProfesores");
    let contenidoTabla =
        "<table><tr>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>" +
        "<th>Email</th>" +
        "</tr>";
    let elementoProfesor;

    for (let i = 0; i < profesores2.length; i++) {
        elementoProfesor = profesores2[i];
        contenidoTabla +=
            "<tr><td>" +
            elementoProfesor.valorNombre +
            "</td>" +
            "<td>" +
            elementoProfesor.valorEdad +
            "</td>" +
            "<td>" +
            elementoProfesor.valorEmail +
            "</td>" +
            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarProfesor2 = function () {
    let profesorBusqueda = recuperarTexto("buscarProfesor");

    for (let i = 0; i < profesores2.length; i++) {
        profesorEncontrado = profesores2[i]
        if (profesorEncontrado.valorNombre == profesorBusqueda) {
            return alert("Profesor Encontrado")
        } else {
            return alert("Profesor no encontrado")
        }
    }
    return profesorEncontrado;

}

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
  }
  
  ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
  }
  
  mostrarOpcionAula = function () {
    ocultarComponente("divEstudiantes");
    mostrarComponente("divAulas");
    ocultarComponente("divProfesor1");
    ocultarComponente("divProfesor2");
  }
  
  mostrarOpcionEstudiantes = function () {
    ocultarComponente("divAula");
    mostrarComponente("divEstudiantes");
    ocultarComponente("divProfesor1");
    ocultarComponente("divProfesor2");
  }
  
  mostrarOpcionProfesor1 = function () {
    ocultarComponente("divAula");
    mostrarComponente("divProfesor1");
    ocultarComponente("divEstudiantes");
    ocultarComponente("divProfesor2");
  }
  
  mostrarOpcionProfesor2 = function () {
    ocultarComponente("divAula");
    mostrarComponente("divProfesor2");
    ocultarComponente("divEstudiantes");
    ocultarComponente("divProfesor1");
  }
