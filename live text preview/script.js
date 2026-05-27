const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {

    clickBtn.innerText = "Clicked!";
    clickBtn.classList.add("success");

    setTimeout(() => {
        clickBtn.innerText = "Click Me";
        clickBtn.classList.remove("success");
    }, 2000);

});