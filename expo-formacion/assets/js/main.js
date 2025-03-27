
  // Función para mostrar una sección y ocultar las demás
  function mostrarSeccion(id) {
    document.querySelectorAll('.section').forEach(seccion => {
      seccion.classList.remove('activa');
    });
    const seccion = document.getElementById(id);
    if (seccion) {
      seccion.classList.add('activa');
      // Si es la sección de charlas, actualizar contadores y estado
      if (id === 'charlas') {
        actualizarContadores();
        actualizarEstadoCharlas();
      }
    }
  }

  // Actualizar contadores de inscriptos en charlas
  function actualizarContadores() {
    ['charla1', 'charla2'].forEach(charla => {
      const span = document.getElementById(charla + '-inscriptos');
      if (span) {
        span.innerText = localStorage.getItem(charla) || 0;
      }
    });
  }

  // Actualizar estado de las charlas según la hora actual
  function actualizarEstadoCharlas() {
    var ahora = new Date();
    var hora = ahora.getHours();
    var minuto = ahora.getMinutes();
    var mensaje = "";
    // Ejemplo de horarios:
    // Charla 1: 10:00 - 11:30
    // Charla 2: 11:30 - 13:00
    if (hora < 10) {
      mensaje = "Las charlas aún no han comenzado.";
    } else if (hora < 11 || (hora === 11 && minuto < 30)) {
      mensaje = "La charla 'Nuevas tecnologías en la construcción' está en curso o por empezar.";
    } else if (hora < 13) {
      mensaje = "La charla 'Instalación de redes sanitarias seguras' está en curso o por empezar.";
    } else {
      mensaje = "Las charlas han finalizado por hoy.";
    }
    document.getElementById("estadoCharlas").innerText = mensaje;
  }

  // Función para inscribirse en una charla desde la sección de charlas
  function inscribirse(charla) {
    let inscriptos = parseInt(localStorage.getItem(charla)) || 0;
    inscriptos++;
    localStorage.setItem(charla, inscriptos);
    document.getElementById(charla + '-inscriptos').innerText = inscriptos;
    alert('Te has inscrito a ' + charla + '. ¡Gracias!');
    actualizarEstadoCharlas();
  }

  // Funciones para el popup del formulario de Preinscripción
  function openPopup() {
    document.getElementById("preinscripcion-popup").style.display = "flex";
  }
  function closePopup() {
    document.getElementById("preinscripcion-popup").style.display = "none";
  }
  function guardarInscripcion(event) {
    event.preventDefault();
    const charla = document.getElementById("charla").value;
    let inscriptos = parseInt(localStorage.getItem(charla)) || 0;
    inscriptos++;
    localStorage.setItem(charla, inscriptos);
    const span = document.getElementById(charla + '-inscriptos');
    if (span) {
      span.innerText = inscriptos;
    }
    alert('Inscripción exitosa a ' + charla + '!');
    closePopup();
    actualizarEstadoCharlas();
  }

  // Función para mostrar empresas por categoría
  function mostrarEmpresas(categoria) {
    const empresas = {
      construccion: [
        { nombre: 'Empresa A', logo: 'https://via.placeholder.com/150', descripcion: 'Obras civiles.' },
        { nombre: 'Empresa B', logo: 'https://via.placeholder.com/150', descripcion: 'Edificios residenciales.' }
      ],
      sanitarias: [
        { nombre: 'Empresa C', logo: 'https://via.placeholder.com/150', descripcion: 'Sistemas sanitarios.' },
        { nombre: 'Empresa D', logo: 'https://via.placeholder.com/150', descripcion: 'Instalación de agua y gas.' }
      ],
      gas: [
        { nombre: 'Empresa E', logo: 'https://via.placeholder.com/150', descripcion: 'Instalación de gas.' }
      ],
      electricidad: [
        { nombre: 'Empresa F', logo: 'https://via.placeholder.com/150', descripcion: 'Soluciones eléctricas.' }
      ],
      informatica: [
        { nombre: 'Empresa G', logo: 'https://via.placeholder.com/150', descripcion: 'Soporte informático.' }
      ]
    };
    const contenedor = document.getElementById("empresas-lista");
    contenedor.innerHTML = "";
    (empresas[categoria] || []).forEach(empresa => {
      const card = document.createElement('div');
      card.className = 'empresa-card';
      card.innerHTML = `
        <img src="${empresa.logo}" alt="Logo de ${empresa.nombre}" class="empresa-logo" />
        <p><strong>${empresa.nombre}</strong></p>
        <p>${empresa.descripcion}</p>
      `;
      contenedor.appendChild(card);
    });
  }

  // Al cargar la página, mostrar la sección Inicio
  window.onload = function() {
    mostrarSeccion('inicio');
  };

  // Función para alternar el menú en móviles
  function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
  }
  