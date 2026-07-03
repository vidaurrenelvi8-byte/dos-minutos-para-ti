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
  },
  {
  titulo: "¿Qué necesitas hoy?",
  botones: true
}
    texto: [
      "Será un privilegio acompañarte.",
      "Elige una opción:"
    ],
    final: true
  }
];

{
  titulo: "Conocer más sobre Jesús",
  texto: `
  Jesús no vino para crear una religión, vino para acercarnos a Dios.

  Él conoce tus luchas, tus heridas y tus preguntas.

  La Biblia dice:

  "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito..."
  (Juan 3:16)

  Jesús murió y resucitó para darte una nueva vida.

  Puedes comenzar hablándole con tus propias palabras hoy mismo.
  `
},

{
  titulo: "¿Dónde puedo congregarme?",
  texto: `
Arca de Noé - Iglesia para la Familia

Dirección:
Barrio 30 de Agosto, a una cuadra de la Av. Moscú.

Horarios:

Sábado
19:30 - 21:30

Domingo
08:00 - 11:30
18:00 - 20:30

Ubicación:
https://maps.app.goo.gl/1vkNxkM8aYV7ugtG9
`
}
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

  puntos.forEach(function(punto) {
    punto.classList.remove("activo");
  });

  if (puntos[actual]) {
    puntos[actual].classList.add("activo");
  }

  let html = "<h1>" + paginas[actual].titulo + "</h1>";

  paginas[actual].texto.forEach(function(linea) {
    html += "<p>" + linea + "</p>";
  });

  if (paginas[actual].final) {
   html += `
  <div class="opciones">

    <button class="opcion">
      🙏 Quiero que oren por mí
    </button>

    <button class="opcion">
      📖 Quiero conocer más sobre Jesús
    </button>

    <button class="opcion">
      💬 Quiero hablar con alguien
    </button>

    <button class="opcion">
      🏠 ¿Dónde puedo congregarme?
    </button>

  </div>
`;
  } 
 
  if (paginas[actual].final) {
  html = `
    <h2>¿Qué necesitas hoy?</h2>

    <button id="btnOracion">🙏 Quiero que oren por mí</button>
    <button id="btnJesus">📖 Quiero conocer más sobre Jesús</button>
    <button id="btnHablar">💬 Quiero hablar con alguien</button>
    <button id="btnCongregarme">🏠 ¿Dónde puedo congregarme?</button>
  `;
}
  
  contenido.innerHTML = html;

  if (paginas[actual].final) {
  document.getElementById("btnOracion").addEventListener("click", oracion);
  document.getElementById("btnJesus").addEventListener("click", jesus);
  document.getElementById("btnHablar").addEventListener("click", hablar);
  document.getElementById("btnCongregarme").addEventListener("click", congregarme);
}
  
  if (actual === 0) {
    boton.textContent = "Comenzar";
    boton.style.display = "inline-block";
  } else if (paginas[actual].final) {
    boton.style.display = "none";
  } else {
    boton.textContent = "➡️ Continuar";
    boton.style.display = "inline-block";
  }
}

mostrarPagina();

boton.addEventListener("click", function() {
  if (actual < paginas.length - 1) {
    actual++;
    mostrarPagina();
  }
});

function oracion() {

  const mensaje =
    "Hola. Escaneé el QR de Dos Minutos Para Ti y me gustaría que oren por mí.";

  window.open(
    "https://wa.me/59173626070?text=" +
    encodeURIComponent(mensaje),
    "_blank"
  );
}

function hablar() {

  const mensaje =
    "Hola. Escaneé el QR de Dos Minutos Para Ti y me gustaría hablar con alguien.";

  window.open(
    "https://wa.me/59173626070?text=" +
    encodeURIComponent(mensaje),
    "_blank"
  );
}

function jesus() {
  actual = paginas.length - 2;
  mostrarPagina();
}

function congregarme() {
  actual = paginas.length - 1;
  mostrarPagina();
}

function oracion() {
  const mensaje = "Hola. Escaneé el QR de Dos Minutos Para Ti y me gustaría que oren por mí.";
  window.open("https://wa.me/59173626070?text=" + encodeURIComponent(mensaje), "_blank");
}

function hablar() {
  const mensaje = "Hola. Escaneé el QR de Dos Minutos Para Ti y me gustaría hablar con alguien.";
  window.open("https://wa.me/59173626070?text=" + encodeURIComponent(mensaje), "_blank");
}

function jesus() {
  alert("Jesús te ama, conoce tu vida y quiere acercarte a Dios. Puedes hablar con Él con tus propias palabras.");
}

function congregarme() {
  window.open("https://maps.app.goo.gl/1vkNxkM8aYV7ugtG9", "_blank");
}
