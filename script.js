const paginas = [alert("SCRIPT NUEVO CARGADO - VERSION 200");
  {
    titulo: "❤️ Dos minutos para ti",
    texto: ["Antes de continuar con tu día...", "Regálate dos minutos.", "Respira.", "Y lee estas palabras con calma."]
  },
  {
    titulo: "Hola",
    texto: ["No sabemos quién eres.", "No conocemos tu historia.", "No sabemos qué has vivido ni qué estás enfrentando hoy.", "Gracias por regalarte este momento."]
  },
  {
    titulo: "Tu vida tiene valor",
    texto: ["Tu valor no depende de la opinión de los demás.", "No depende de tus logros.", "No depende de tus errores.", "Lo determina Aquel que te creó."]
  },
  {
    titulo: "Dios te conoce",
    texto: ["Él conoce tus alegrías.", "Tus preguntas.", "Tus luchas.", "Y aun así te ama profundamente."]
  },
  {
    titulo: "Isaías 41:10",
    texto: ["No temas, porque yo estoy contigo.", "Yo te fortaleceré.", "Yo te ayudaré."]
  },
  {
    titulo: "Mateo 11:28",
    texto: ["Vengan a mí todos los que están cansados.", "Y yo les daré descanso."]
  },
  {
    titulo: "Acércate a Dios",
    texto: ["No necesitas una oración perfecta.", "Solo un corazón sincero.", "Él siempre escucha."]
  },
  {
    titulo: "Gracias ❤️",
    texto: ["No estás olvidado.", "Eres valioso.", "Dios nunca ha dejado de amarte."]
  },
  {
    titulo: "Un último pensamiento",
    texto: ["Quizá aceptaste una galleta por curiosidad.", "Nosotros creemos que Dios puede usar hasta los gestos más pequeños para recordarnos que nunca estamos solos."]
  },
  {
    titulo: "¿Qué necesitas hoy?",
    texto: ["Será un privilegio acompañarte.", "Elige una opción:"],
    final: true
  },
  {
    titulo: "Conocer más sobre Jesús",
    texto: [
      "Jesús no vino para crear una religión vacía.",
      "Él vino para acercarnos al corazón de Dios.",
      "Vino a buscar al cansado, al herido, al que se siente lejos y al que necesita esperanza.",
      "Jesús mostró amor, perdón y compasión a personas que muchos rechazaban."
  ],
    tipo: "jesus1"
  },
  {
    titulo: "Jesús también te llama a ti",
    texto: [
      "La Biblia enseña que Jesús murió y resucitó para darnos vida nueva.",
      "No necesitas tener palabras perfectas para acercarte a Él.",
      "Puedes hablarle con sinceridad, pedirle que te guíe y abrirle tu corazón.",
      "Dios te ama y quiere caminar contigo desde hoy."
    ],
    tipo: "jesusFinal"
  },
  {
    titulo: "¿Dónde puedo congregarme?",
    texto: [
      "Arca de Noé - Iglesia para la Familia",
      "Dirección: Barrio 30 de Agosto, a una cuadra de la Av. Moscú.",
      "Horarios:",
      "Sábado: 19:30 - 21:30",
      "Domingo: 08:00 - 11:30 / 18:00 - 20:30"
    ],
    tipo: "congregarme",
    mapa: true
  }
];

let actual = 0;

const contenido = document.getElementById("contenido");
const boton = document.getElementById("boton");
const numero = document.getElementById("numeroPagina");
const puntos = document.querySelectorAll(".punto");

function mostrarPagina() {
  contenido.classList.remove("hojear");
  void contenido.offsetWidth;
  contenido.classList.add("hojear");

  numero.textContent = actual + 1;

  puntos.forEach(punto => punto.classList.remove("activo"));

  if (puntos[actual]) {
    puntos[actual].classList.add("activo");
  }

  let html = "<h1>" + paginas[actual].titulo + "</h1>";

  paginas[actual].texto.forEach(linea => {
    html += "<p>" + linea + "</p>";
  });

  if (paginas[actual].final) {
    html += `
      <div class="opciones">
        <button id="btnOracion" class="opcion">🙏 Quiero que oren por mí</button>
        <button id="btnJesus" class="opcion">📖 Quiero conocer más sobre Jesús</button>
        <button id="btnHablar" class="opcion">💬 Quiero hablar con alguien</button>
        <button id="btnCongregarme" class="opcion">🏠 ¿Dónde puedo congregarme?</button>
      </div>
    `;
  }

  if (paginas[actual].mapa) {
    html += `<button id="btnMapa" class="opcion">📍 Abrir ubicación en Google Maps</button>`;
  }

  contenido.innerHTML = html;

  if (paginas[actual].final) {
    document.getElementById("btnOracion").addEventListener("click", oracion);
    document.getElementById("btnJesus").addEventListener("click", jesus);
    document.getElementById("btnHablar").addEventListener("click", hablar);
    document.getElementById("btnCongregarme").addEventListener("click", congregarme);
  }

  if (paginas[actual].mapa) {
    document.getElementById("btnMapa").addEventListener("click", abrirMapa);
  }

  if (actual === 0) {
    boton.textContent = "Comenzar";
    boton.style.display = "inline-block";
  } else if (paginas[actual].final || paginas[actual].tipo === "jesusFinal" || paginas[actual].tipo === "congregarme") {
    boton.style.display = "none";
  } else {
    boton.textContent = "➡️ Continuar";
    boton.style.display = "inline-block";
  }
}
boton.onclick = function() {
  if (paginas[actual].tipo === "jesus1") {
    actual = paginas.findIndex(pagina => pagina.tipo === "jesusFinal");
    mostrarPagina();
    return;
  }

  if (actual < 9) {
    actual++;
    mostrarPagina();
  }
};

function oracion() {
  const mensaje = "Hola. Escaneé el QR de Dos Minutos Para Ti y me gustaría que oren por mí.";
  window.open("https://wa.me/59173626070?text=" + encodeURIComponent(mensaje), "_blank");
}

function hablar() {
  const mensaje = "Hola. Escaneé el QR de Dos Minutos Para Ti y me gustaría hablar con alguien.";
  window.open("https://wa.me/59173626070?text=" + encodeURIComponent(mensaje), "_blank");
}

function jesus() {
  actual = paginas.findIndex(pagina => pagina.tipo === "jesus1");
  mostrarPagina();
}

function congregarme() {
  actual = paginas.findIndex(pagina => pagina.tipo === "congregarme");
  mostrarPagina();
}

function abrirMapa() {
  window.open("https://maps.app.goo.gl/1vkNxkM8aYV7ugtG9", "_blank");
}

mostrarPagina();
