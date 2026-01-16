const backgroundLeft = document.getElementById("backgroundLeft");
const backgroundRight = document.getElementById("backgroundRight");

backgroundLeft.addEventListener("mouseenter", () => {
    backgroundLeft.style.width = " 70%";
    backgroundRight.style.width = " 30%";
});
backgroundLeft.addEventListener("mouseleave", () => {
    backgroundLeft.style.width = " 50%";
    backgroundRight.style.width = " 50%";
});
backgroundRight.addEventListener("mouseenter", () => {
    backgroundLeft.style.width = " 30%";
    backgroundRight.style.width = " 70%";
});
backgroundRight.addEventListener("mouseleave", () => {
    backgroundLeft.style.width = "50%";
    backgroundRight.style.width = " 50%";
});
