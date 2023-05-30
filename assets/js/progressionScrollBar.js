window.addEventListener("scroll", () => {
    let height = document.documentElement.scrollHeight - window.innerHeight
    let actualPosition = window.scrollY
    let width = document.documentElement.clientWidth

    let progressionScrollBar = (actualPosition / height) * width 

    document.getElementById("progressionScrollBar").style.width = progressionScrollBar + "px"
})