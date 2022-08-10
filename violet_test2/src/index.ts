window.addEventListener("scroll", () => {
    let cover = <HTMLElement>document.querySelector("#cover");
    let translateY = window.scrollY / 3;
    cover.style.transform = "translateY(" + translateY.toString() + "px)";
    let opacity = 1 - window.scrollY / 1000;
    if (opacity < 0) opacity = 0;
    cover.style.opacity = opacity.toString();
});

window.addEventListener("DOMContentLoaded", () => {
    let btns = <NodeListOf<HTMLButtonElement>>document.querySelectorAll(".button");
    for (let i = 0; i < btns.length; i++) {
        const btn = btns.item(i);
        btn.addEventListener("mousemove", (event) => {
            btn.style.setProperty("--shadow-x", event.offsetX + "px");
            btn.style.setProperty("--shadow-y", event.offsetY + "px");
        });
    }
});