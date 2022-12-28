export function repeatFlowers() {
    let flower = document.querySelector(".js-flower");
    let flowersNum = Math.round(window.innerWidth / 130);

    for (let i = 0; i < flowersNum; i++) {
        flower.innerHTML += '<div class="loader__bottom-el js-flower-item"><div class="sun-top"></div><div class="sun-bottom"></div></div>';
    }
}

export function repeatFlowersClass() {
    let flowerItem = document.querySelectorAll(".js-flower-item");
    let flowersClasses = ["xl", "md", "s"];

    flowerItem.forEach((item) => {
        let flowerClassName = Math.floor(Math.random() * flowersClasses.length);
        item.classList.add(flowersClasses[flowerClassName]);
    });
}

export function hideLoader() {
    setTimeout(() => {
        document.querySelector(".js-loader").style.opacity = "0";
    }, "4300");
}
