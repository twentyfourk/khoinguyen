const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heartBox = $(".heart.clickable");
const container = $(".container");
const imageLeft = $(".image.leftpos");
const imageRight = $(".image.rightpos");
heartBox.onclick = function (e) {
    const node = document.createElement("div");
    node.classList.add("letter-container");
    const letterContent = `"Cùng anh nếu được thì ăn cả còn ngã về nhà mình ăn ngủ với nhau."`;
    const letterTitle = "Chúc bé qua mùa thi cử";
    const text = `<h1 class='letter-title'>${letterTitle}</h1><p class='letter-content'>${letterContent}</p>`;
    node.innerHTML = text;
    heartBox.remove();
    container.appendChild(node);
};
document.addEventListener("mousemove", function (e) {
    const body = $("body");
    const heart = document.createElement("span");
    const x = e.offsetX;
    const y = e.offsetY;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    const size = Math.random() * 35;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    setTimeout(function () {
        heart.remove();
    }, 1000);
    body.appendChild(heart);
});
let imageLeftNotQuote = true;
let imageRightNotQuote = true;
imageLeft.onclick = function (e) {
    if (imageLeftNotQuote) {
        imageLeft.src = "./quote1.png";
        imageLeftNotQuote = false;
    } else {
        imageLeft.src = "./firstpic.png";
        imageLeftNotQuote = true;
    }
};
imageRight.onclick = function (e) {
    if (imageRightNotQuote) {
        imageRight.src = "./quote2.png";
        imageRightNotQuote = false;
    } else {
        imageRight.src = "./secondpic.png";
        imageRightNotQuote = true;
    }
};
const message = "Love You";
