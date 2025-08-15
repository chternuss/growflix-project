import { movies } from './data-movie.js';

const backgroundHome = document.getElementById("header");
const growcastSection = document.getElementById("growcast-content");
const webinarSection = document.getElementById("flutter-content");
const uxuiSection = document.getElementById("uxui-content");
const othersSection = document.getElementById("other-content");

const highlight = movies.find((movie) => movie.highlight);
const growcastContent = movies.filter((movie) => movie.category === "Growcast [Episódios]");
const flutterContent = movies.filter((movie) => movie.category === "Webinar em Flutter");
const uxuiContent = movies.filter((movie) => movie.category === "Jornada UX/UI");
const othersContent = movies.filter((movie) => movie.category === "Diversos");

function renderMovies (element, category){
  category.forEach((category) => {
        element.innerHTML += `
          <div class="col-12 col-sm-6 col-md-3">
            <div class="card" style="width: 18rem;">
            <img src="${category.img}" class="card-img-top" alt="${category.title}">
            <div class="card-body bg-black">
            <a class="link-card" href="#">
            <p class="card-text text-white" onclick="openMovie(this)> <i class="bi bi-play-circle-fill icon-video"></i>${category.title}</p>
            </a>
            </div>
            </div>
            </div>
        `;
    });
}

window.onload = function () {
  backgroundHome.style.background = `url("${highlight.img}") center center / cover no-repeat`;
  backgroundHome.style.width = '100vw';
  renderMovies(growcastSection, growcastContent);
  renderMovies(webinarSection, flutterContent);
  renderMovies(uxuiSection, uxuiContent);
  renderMovies(othersSection, othersContent);
}