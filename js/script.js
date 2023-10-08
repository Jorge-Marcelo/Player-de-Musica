/*Autor: Jorge Marcelo
Data de Criação: 08/10/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Fazendo a counicação do HTML com JS usando DOM*/
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const anteriorButton = document.getElementById("anterior");
const proximoButton = document.getElementById("proximo");
const timer = document.getElementById("timer");
const musicName = document.getElementById("musicName");
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");

/*Array com as Musicas*/
const musicArr = [
"assets/music/Castlevania/01. Vampire Killer.mp3",
"assets/music/Castlevania/02 Ruined Castle Corridor.mp3",
"assets/music/Castlevania/03. Invitation of a Crazed Moon.mp3",
"assets/music/Castlevania/04 - Reincarnated Soul, Part 2 (Stage 1).mp3",
"assets/music/Castlevania/05. Beginning (Akumajo Densetsu).mp3",
"assets/music/Castlevania/06-Condemned Tower.mp3",
"assets/music/Castlevania/07. Clockwork.mp3",
"assets/music/Castlevania/08. Divine Bloodlines.mp3",
"assets/music/Castlevania/09. Vampire Killer.mp3",
];

let musicaAtual = 0; //Variavel da musica atual

/*Funções de play e pause*/
function play() {
audio.play();
}
function pause() {
audio.pause();
}

/*Função de proximo, anterior e caregar a muisca*/
function anterior() {
musicaAtual = (musicaAtual - 1 + musicArr.length) % musicArr.length;
carregarMusica();
}
function proximo() {
musicaAtual = (musicaAtual + 1) % musicArr.length;
carregarMusica();
}
function carregarMusica() {
audio.src = musicArr[musicaAtual];
audio.load();
play();

const nomeArquivo = musicArr[musicaAtual].split("/").pop(); // Extrai o nome do arquivo da última parte do caminho
const nomeSemNumeros = nomeArquivo.replace(/^\d+\s*-\s*/, ""); // Remove o número com hífen da frente
const nomeSemExtensao = nomeSemNumeros.replace(/\.mp3$/, ""); // Remove a extensão .mp3
musicName.textContent = nomeSemExtensao; // Exibe apenas o nome da música
}

function atualizarTimer() {
const tempoAtual = formatarTimer(audio.currentTime); //Pegar o timer baseado na musica selecionada
const duracao = formatarTimer(audio.duration); // Duração baseada na musica selecionada
timer.textContent = `${tempoAtual} / ${duracao}`; // Conteudo do textContent
}

function atualizarBarraProgresso() {
const porcentagem = (audio.currentTime / audio.duration) * 100; //Barra de progresso baseado na musica selecionada
progress.style.width = `${porcentagem}%`; // Largura da barra de progresso baseado na muisca selecionada
progress.style.backgroundColor = "#0400ff;"; // Cor da barra baseado na musica selecionada
}

/*Calculo dos minutos e segundos da musica */
function formatarTimer(time) {
const minutos = Math.floor(time / 60);
const segundos = Math.floor(time % 60);
return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
}

/*Escutadores de eventos para as funções do player*/
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
anteriorButton.addEventListener("click", anterior);
proximoButton.addEventListener("click", proximo);
audio.addEventListener("timeupdate", () => {
atualizarTimer();
atualizarBarraProgresso();
});

/*Função para atualizar a barra de progresso baseado no click da barra*/
progressBar.addEventListener("click", (evento) => {
const porcentagem = evento.offsetX / progressBar.offsetWidth;
audio.currentTime = audio.duration * porcentagem;
atualizarBarraProgresso();
});

/*Chamando a função carregar musica */
carregarMusica();

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink) {
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function () {
threads(threadsLink);
});

/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink) {
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function () {
linkedin(linkedinLink);
});

/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink) {
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function () {
github(githubLink);
});
