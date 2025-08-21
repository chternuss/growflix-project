import { movies } from './data-movie.js';

const backgroundHome = document.getElementById("header");
const growcastSection = document.getElementById("growcast-content");
const webinarSection = document.getElementById("flutter-content");
const uxuiSection = document.getElementById("uxui-content");
const othersSection = document.getElementById("other-content");
const modalContent = document.getElementById("modal-content");
const modalBox = document.getElementById("iframe-Modal");
const iframeModal = new bootstrap.Modal(modalBox);

const highlight = movies.find((movie) => movie.highlight);
const growcastContent = movies.filter((movie) => movie.category === "Growcast [Episódios]");
const flutterContent = movies.filter((movie) => movie.category === "Webinar em Flutter");
const uxuiContent = movies.filter((movie) => movie.category === "Jornada UX/UI");
const othersContent = movies.filter((movie) => movie.category === "Diversos");

function renderHighlighted(element){
  backgroundHome.innerHTML += `
  <div class="row">
                <div id="header-content" class="col-12">
                    <div class="container position-relative" style="min-height: 680px;">
                        <div class="position-absolute text-white p-5" style="bottom: 30px;">
                            <p class="fw-bold text-shadow"><small>${element.highlight_category}</small></p>
                            <h2 class="m-0 display-1 fw-bold text-shadow">${element.highlight_title}</h2>
                            <button class="btn btn-light btn-sm mt-1 fw-bold btn-hone"><i class="bi bi-play-fill"></i>Assistir</button>
                        </div>
                    </div>
                </div>
            </div>
  `;
}


function renderMovies (element, category){
  category.forEach((movie) => {
        element.innerHTML += `
          <div class="col-12 col-sm-6 col-md-3">
            <div class="card" style="width: 18rem;">
            <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
            <div class="card-body bg-black">
            <p class="card-text text-white link-card" onclick="videoModal(this)" data-iframe='${movie.iframe}' ><i class="bi bi-play-circle-fill icon-video"></i>${movie.title}</p>
            </div>
            </div>
            </div>
        `;
    });
}

function videoModal (element){
  const iframe = element.getAttribute("data-iframe");
   modalContent.innerHTML = iframe;
   iframeModal.show();
}

window.onload = function () {
  backgroundHome.style.background = `url("${highlight.img}") center center / cover no-repeat`;
  backgroundHome.style.width = '100vw';
  renderHighlighted(highlight);
  renderMovies(growcastSection, growcastContent);
  renderMovies(webinarSection, flutterContent);
  renderMovies(uxuiSection, uxuiContent);
  renderMovies(othersSection, othersContent);
}
window.videoModal = videoModal;