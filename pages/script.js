// Selecionando os elementos do DOM
const btnTheme = document.getElementById("btn-theme");
const html = document.documentElement;
const btnOpenNavMobile = document.getElementById("btn-open");
const btnCloseNavMobile = document.getElementById("btn-close");
const navMobile = document.getElementById("nav-mobile");

// 1. Controle do Menu Mobile
btnOpenNavMobile.addEventListener("click", () => {
    navMobile.classList.remove("hidden");
    navMobile.classList.add("show");
});

btnCloseNavMobile.addEventListener("click", () => {
    navMobile.classList.add("hidden");
    navMobile.classList.remove("show");
});

// 2. Controle do Modo Escuro (Dark Mode)
btnTheme.addEventListener("click", () => {
    // Se já estiver no modo escuro, volta pro claro
    if (html.hasAttribute("data-theme")) {
        html.removeAttribute("data-theme");
        btnTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        localStorage.removeItem("theme"); // Salva a preferência do usuário
    } else {
        // Se estiver no claro, muda pro escuro
        html.setAttribute("data-theme", "dark");
        btnTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        localStorage.setItem("theme", "dark"); // Salva a preferência do usuário
    }
});

// 3. Memória do Tema (Mantém escuro se o usuário mudar de página)
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        html.setAttribute("data-theme", "dark");
        btnTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
};