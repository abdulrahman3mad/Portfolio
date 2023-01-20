// DOM
let projectsImgs = document.querySelectorAll(".main-projects img");
let projectHeight = window.getComputedStyle(document.querySelector(".main-projects .project")).height.split("px")[0];

projectsImgs.forEach((project) => {
    let position = 0;
    let interval;

    project.addEventListener("mouseover", function () {
        interval = setInterval(() => {
            (position >= project.height - projectHeight) && clearInterval(interval)
            position += 0.5;
            this.style.top = -position + "px"
        }, 2);
    })

    project.addEventListener("mouseleave", function () {
        position = 0;
        this.style.top = position + "px"
        clearInterval(interval)
    })
})
