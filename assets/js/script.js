const caret = document.querySelector("#moreBtn i");

console.dir(caret.classList);
/* caret.classList.remove("fa-solid"); */
/* caret.classList.remove("fa-caret-right");
caret.classList.toggle("fa-caret-down"); */

const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener(
    "click",
    function (event) {
        caret.classList.toggle("fa-caret-right");
        caret.classList.toggle("fa-caret-down");
        /* event.preventDefault(); */
        subMenu.classList.toggle("hide")


        

    }
)