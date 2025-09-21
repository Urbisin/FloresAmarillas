// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

audio.volume = 0.4;

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "One, two", time: 0 },
    { text: "Steal my heart and hold my tongue", time: 8 },
    { text: "I feel my time, my time has come", time: 16 },
    { text: "Let me in, unlock the door", time: 25 },
    { text: "I never felt this way before", time: 34 },

    { text: "And the wheels just keep on turning", time: 41 },
    { text: "The drummer begins to drum", time: 44 },
    { text: "I don't know which way I'm going", time: 48 },
    { text: "I don't know which way I've come", time: 53 },

    { text: "Hold my head inside your hands", time: 68 },
    { text: "I need someone who understands", time: 76 },
    { text: "I need someone, someone who hears", time: 84 },
    { text: "For you I've waited all these years", time: 91 },

    { text: "For you I'd wait 'til kingdom come", time: 97 },
    { text: "Until my day, my day is done", time: 106 },
    { text: "And say you'll come and set me free", time: 113 },
    { text: "Just say you'll wait, you'll wait for me", time: 122 },

    { text: "In your tears and in your blood", time: 139 },
    { text: "In your fire and in your flood", time: 148 },
    { text: "I hear you laugh, I heard you sing", time: 156 },
    { text: "I wouldn't change a single thing", time: 164 },

    { text: "And the wheels just keep on turning", time: 168 },
    { text: "The drummers begin to drum", time: 173 },
    { text: "I don't know which way I'm going", time: 177 },
    { text: "I don't know what I've become", time: 181 },

    { text: "For you I'd wait 'til kingdom come", time: 186 },
    { text: "Until my days, my days are done", time: 195 },
    { text: "Say you'll come and set me free", time: 203 },
    { text: "Just say you'll wait, you'll wait for me", time: 211 },
    { text: "Just say you'll wait, you'll wait for me", time: 220 },
    { text: "Just say you'll wait, you'll wait for me", time: 228 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, ((time - currentLine.time) / fadeInDuration) + 3);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);