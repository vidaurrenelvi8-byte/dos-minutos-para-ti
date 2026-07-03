const paginas = [
  {
    titulo: "❤️ Dos minutos para ti",
    texto: [
      "Antes de continuar con tu día...",
      "Regálate dos minutos.",
      "Respira.",
      "Y lee estas palabras con calma."
    ]
  },
  {
    titulo: "Hola",
    texto: [
      "No sabemos quién eres.",
      "No conocemos tu historia.",
      "No sabemos qué has vivido ni qué estás enfrentando hoy.",
      "Gracias por regalarte este momento."
    ]
  },
  {
    titulo: "Tu vida tiene valor",
    texto: [
      "Tu valor no depende de la opinión de los demás.",
      "No depende de tus logros.",
      "No depende de tus errores.",
      "Lo determina Aquel que te creó."
    ]
  },
  {
    titulo: "Dios te conoce",
    texto: [
      "Él conoce tus alegrías.",
      "Tus preguntas.",
      "Tus luchas.",
      "Y aun así te ama profundamente."
    ]
  },
  {
    titulo: "Isaías 41:10",
    texto: [
      "No temas, porque yo estoy contigo.",
      "Yo te fortaleceré.",
      "Yo te ayudaré."
    ]
  },
  {
    titulo: "Mateo 11:28",
    texto: [
      "Vengan a mí todos los que están cansados.",
      "Y yo les daré descanso."
    ]
  },
  {
    titulo: "Acércate a Dios",
    texto: [
      "No necesitas una oración perfecta.",
      "Solo un corazón sincero.",
      "Él siempre escucha."
    ]
  },
  {
    titulo: "Gracias ❤️",
    texto: [
      "No estás olvidado.",
      "Eres valioso.",
      "Dios nunca ha dejado de amarte."
    ]
  },
  {
    titulo: "Un último pensamiento",
    texto: [
      "Quizá aceptaste una galleta por curiosidad.",
      "Nosotros creemos que Dios puede usar hasta los gestos más pequeños para recordarnos que nunca estamos solos."
    ]
  }
];

let actual = 0;

const contenido = document.getElementById("contenido");
const boton = document.getElementById("boton");
const numero = document.getElementById("numeroPagina");

function mostrarPagina() {
  contenido.classList.remove("fade");
  void contenido.offsetWidth;
  contenido.classList.add("fade");

  numero.textContent = actual + 1;

  let html = "<h1>" + paginas[actual].titulo + "</h1>";

  paginas[actual].texto.forEach(function(linea) {
    html += "<p>" + linea + "</p>";
  });

  contenido.innerHTML = html;

  if (actual === paginas.length - 1) {
    boton.textContent = "Finalizar";
  } else {
    boton.textContent = "📖 Pasar la página";
  }
}

mostrarPagina();

boton.addEventListener("click", function() {
  if (actual < paginas.length - 1) {
    actual++;
    mostrarPagina();
  } else {
    actual = 0;
    mostrarPagina();
  }
});
