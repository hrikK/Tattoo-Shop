window.addEventListener("scroll", () => {
    let topBtn = document.querySelector(".top-btn");

    topBtn.classList.toggle("top-btn-display", scrollY);
})

function menuClicked() {
    document.querySelector("header ul").classList.toggle("clicked");
    document.querySelector(".menu-btn").classList.toggle("clicked");
}