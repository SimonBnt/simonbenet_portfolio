const readMoreBtnFrVersion = document.getElementById("readMoreBtnFrVersion")
const frenchShowMoreTitle = "Cliquer pour afficher plus de texte"
const frenchShowLessTitle = "Cliquer pour afficher moins de texte"

if (readMoreBtnFrVersion.className == "readMoreBtnFrVersion" && readMoreBtnFrVersion.innerHTML == "Afficher moins") {
    readMoreBtnFrVersion.setAttribute("title", frenchShowLessTitle)
}

readMoreBtnFrVersion.addEventListener("click", function() {
    readMoreBtnFrVersion.parentNode.classList.toggle("active")
 
    if (readMoreBtnFrVersion.className = "readMoreBtnFrVersion" && readMoreBtnFrVersion.innerHTML == "Afficher plus") {
       readMoreBtnFrVersion.innerHTML = "Afficher moins"
       readMoreBtnFrVersion.setAttribute("title", frenchShowLessTitle)
    } else {
       readMoreBtnFrVersion.innerHTML = "Afficher plus"
       readMoreBtnFrVersion.setAttribute("title", frenchShowMoreTitle)
    }
})