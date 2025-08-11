import { movies } from "./data-movie";

const highlight = movies.find((movie) => movie.highlight);

const backgroundHome = document.getElementById("header");
backgroundHome.style.backgroundImage = `url("${highlight.img}")`;
backgroundHome.style.backgroundSize = "cover";
backgroundHome.style.backgroundPosition = "center";
backgroundHome.style.backgroundRepeat = "no-repeat";