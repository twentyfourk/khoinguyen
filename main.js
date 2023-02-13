const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heartBox = $(".clickable");
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
