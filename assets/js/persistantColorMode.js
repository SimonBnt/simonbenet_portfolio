const darkBtn = document.getElementById("darkMode")
const lightBtn = document.getElementById("lightMode")
const body = document.body

if (sessionStorage.getItem("colormode") == "lightmode") {
    lightMode()
} else {
    darkMode()
}

lightBtn.addEventListener("click", () => {
    lightMode()
})

darkBtn.addEventListener("click", () => {
    darkMode()
})

function darkMode() {
    if (darkBtn.classList.contains("active")) {
    
        darkBtn.classList.add("noActive")
        darkBtn.classList.remove("active")

        lightBtn.classList.add("active")
        lightBtn.classList.remove("noActive")
        
        body.classList.remove("light")
        body.classList.add("dark")

        sessionStorage.setItem("colormode", "darkmode")
    }
}

function lightMode() {
    if (lightBtn.classList.contains("active")) {
    
        lightBtn.classList.add("noActive")
        lightBtn.classList.remove("active")

        darkBtn.classList.add("active")
        darkBtn.classList.remove("noActive")

        body.classList.remove("dark")
        body.classList.add("light")

        sessionStorage.setItem("colormode", "lightmode")
    }
}