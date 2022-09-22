const starList = document.querySelectorAll(".star-num");
const subminBtn = document.querySelector(".final-btn");
const thankYou = document.querySelector(".thank-you");
const UserRating = document.querySelector(".input");

let selectedRating = 0;

starList.forEach((star) => {
    star.addEventListener("click", (e) => {
        starList.forEach((item) => {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            }
        });
        star.classList.add("active");
        selectedRating = Number(e.target.innerText);
        subminBtn.removeAttribute("disabled");
    });
});

subminBtn.addEventListener("click", () => {
    if (selectedRating != 0) {
        thankYou.childNodes[3].innerText = `You have selected ${selectedRating} out of 5`;
        UserRating.classList.add("hide");
        thankYou.classList.add("show");
    }
});
