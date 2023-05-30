const readMoreBtnEnVersion = document.getElementById("readMoreBtnEnVersion")
const englishShowMoreTitle = "Click to show more text"
const englishShowLessTitle = "Click to show less text"

if (readMoreBtnEnVersion.className == "readMoreBtnEnVersion" && readMoreBtnEnVersion.innerHTML == "Show less") {
   readMoreBtnEnVersion.setAttribute("title", englishShowLessTitle)
}

readMoreBtnEnVersion.addEventListener("click", function(){
   readMoreBtnEnVersion.parentNode.classList.toggle("active")

   if (readMoreBtnEnVersion.className = "readMoreBtnEnVersion" && readMoreBtnEnVersion.innerHTML == "Show more") {
      readMoreBtnEnVersion.innerHTML = "Show less"
      readMoreBtnEnVersion.setAttribute("title", englishShowLessTitle)
   } else {
      readMoreBtnEnVersion.innerHTML = "Show more"
      readMoreBtnEnVersion.setAttribute("title", englishShowMoreTitle)
   }
})

