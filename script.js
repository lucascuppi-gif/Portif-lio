const titulo = document.getElementById("titulo");

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.match(/(<br\s*\/?>|.)/g);
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 200 * i);
  });
}

typeWriter(titulo);

const sections = document.querySelectorAll(".animacao");

window.addEventListener("scroll", () => {
  const triggerPoint = window.scrollY + window.innerHeight * 0.8;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (triggerPoint >= sectionTop) {
      section.classList.add("animacaoAtiva");
    } else {
      section.classList.remove("animacaoAtiva");
    }
  });
});

const links = document.querySelectorAll("ul a[href^='#']");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const element = e.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

const menuAbrir = document.querySelector(".menu-abrir");
const menu = document.querySelector(".menu");

menuAbrir.addEventListener("click", () => {
  menu.classList.toggle("menu-ativo");
});
