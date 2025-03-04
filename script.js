document.getElementById("door").addEventListener("click", function () {
    this.classList.add("open");
    setTimeout(() => {
        document.getElementById("messageBox").style.display = "block";
    }, 1500);
});

function closeMessage() {
    document.getElementById("messageBox").style.display = "none";
}