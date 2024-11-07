// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When we're out in a crowd, laughing loud", time: 0 },
  { text: "And nobody knows why", time: 4 },
  { text: "When we're lost at a club, getting drunk", time: 13 },
  { text: "And you give me that smile", time: 16 },
  { text: "Going home in the back of a car", time: 24 },
  { text: "And your hand touches mine", time: 27 },
  { text: "When we're done making love and you look up", time: 36 },
  { text: "And give me those eyes", time: 42 },

  { text: "Cause all of the small things that you do", time: 48 },
  { text: "Are what remind me why I fell for you", time: 53 },
  { text: "And when we're apart and I'm missing you", time: 59 },
  { text: "I close my eyes and all I see is you", time: 65 },
  { text: "And the small things you do", time: 70 },

  { text: "When you call me at night", time: 84 },
  { text: "While you're out getting high with your friends", time: 87 },
  { text: "Every hi, every bye, every I love you you've ever said", time: 97 },
  { text: "Cause all of the small things that you do", time: 108 },
  { text: "Are what remind me why I fell for you", time: 113 },
  { text: "And when we're apart and I'm missing you", time: 119 },
  { text: "I close my eyes and all I see is you", time: 125 },
  { text: "And the small things you do", time: 130 },

  { text: "When we're done making love", time: 155 },
  { text: "And you look up and give me those eyes", time: 158 },

  { text: "Cause all of the small things that you do", time: 168 },
  { text: "Are what remind me why I fell for you", time: 173 },
  { text: "And when we're apart and I'm missing you", time: 179 },
  { text: "I close my eyes and all I see is you", time: 185 },
  { text: "And the small things you do", time: 190 },
  { text: "All the small things you do", time: 208 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Aplica el efecto de aparición suave
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 200);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
