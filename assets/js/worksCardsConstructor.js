let cards = 0
let cardLimit = 4
let jsonLenght = 0

const showMoreBtn = document.createElement("button")
// const showLessBtn = document.createElement("button")

showMoreBtn.setAttribute("id", "showMoreBtn")
// showLessBtn.setAttribute("id", "showLessBtn")

showMoreBtn.style.display = "none"
// showLessBtn.style.display = "none"

// if (mainWorksContainer.className == "enVersion") {
//     showMoreBtn.style.display = ""
//     showMoreBtn.setAttribute("title", "Show more result")
//     showMoreBtn.innerText = "Show more"
// } else {
//     showMoreBtn.style.display = ""
//     showMoreBtn.setAttribute("title", "Afficher plus de resultat")
//     showMoreBtn.innerText = "Afficher plus"
// }

showMoreBtn.addEventListener("click", () => {
    if ((cardLimit + 4) <= jsonLenght) {
        cardLimit += 4
    } else {
        cardLimit = jsonLenght
    }
    if (cards < cardLimit) {
        addCards()
    } 
})

const addCards = () => {
    fetch("data/worksCards.json")
    .then(result => result.json())
    .then(worksCards => {
        
        jsonLenght = Object.keys(worksCards).length
        
        let i = 0

        if (cards >= 4) {
            i =+ 4*(Math.floor(cards/4))
        }
        
        for(i; i < worksCards.length ; i++) {
            createCards(worksCards[i])
        }
    })
}

const createCards = (work) => {
    const mainWorksContainer = document.getElementById("mainWorksContainer")

    if (cards < cardLimit) {

        const workContainer = document.createElement("div")
        const workImg = document.createElement("img")
        const workDescriptionContainer = document.createElement("div")
        const workTitle = document.createElement("h3")
        const descriptionDecoration = document.createElement("div")
        const workDescription = document.createElement("p")
        const strongDescription = document.createElement("strong")
        const descriptionLinkContainer = document.createElement("div")
        const subdomainLink = document.createElement("a")
        const subdomainIcone = document.createElement("img")
        const githubWorkLink = document.createElement("a")
        const githubIcone = document.createElement("img")
        const codepenWorkLink = document.createElement("a")
        const codepenIcone = document.createElement("img")
        
        workContainer.classList.add("workContainer")
        
        workImg.classList.add("workImg")
        workImg.setAttribute("src", work["workImgSrc"])
        workContainer.appendChild(workImg)

        workDescriptionContainer.classList.add("workDescriptionContainer")
        workContainer.appendChild(workDescriptionContainer)

        workTitle.classList.add("workTitle")
        workDescriptionContainer.appendChild(workTitle)
        
        descriptionDecoration.classList.add("descriptionDecoration")
        workDescriptionContainer.appendChild(descriptionDecoration)
        
        workDescription.classList.add("workDescription")
        
        strongDescription.classList.add("strongDescription")

        workDescriptionContainer.appendChild(workDescription)

        descriptionLinkContainer.classList.add("descriptionLinkContainer")
        workDescriptionContainer.appendChild(descriptionLinkContainer)
        
        if (work["subdomainHref"] !== "") {
            subdomainLink.classList.add("subdomainLink")
            subdomainLink.setAttribute("href", work["githubHref"])
            subdomainLink.setAttribute("rel", "noopener")
            subdomainLink.setAttribute("target", "_blank")
            
            descriptionLinkContainer.appendChild(subdomainLink)
            
            subdomainIcone.classList.add("subdomainIcone")
            subdomainIcone.setAttribute("src", "/assets/img/svg/link.svg")
            
            subdomainLink.appendChild(subdomainIcone)
        }

        if (work["githubHref"] !== "") {
            githubWorkLink.classList.add("githubWorkLink")
            githubWorkLink.setAttribute("href", work["githubHref"])
            githubWorkLink.setAttribute("rel", "noopener")
            githubWorkLink.setAttribute("target", "_blank")
            
            descriptionLinkContainer.appendChild(githubWorkLink)
            
            githubIcone.classList.add("githubIcone")
            githubIcone.setAttribute("src", "/assets/img/svg/github-black.svg")
            
            githubWorkLink.appendChild(githubIcone)
        }

        if (work["codepenHref"] !== "") {
            codepenWorkLink.classList.add("codepenWorkLink")
            codepenWorkLink.setAttribute("href", work["codepenHref"])
            codepenWorkLink.setAttribute("rel", "noopener")
            codepenWorkLink.setAttribute("target", "_blank")
    
            descriptionLinkContainer.appendChild(codepenWorkLink)
    
            codepenIcone.classList.add("codepenIcone")
            codepenIcone.setAttribute("src", "/assets/img/svg/codepen-black.svg")

            codepenWorkLink.appendChild(codepenIcone)
        }
        
        if (mainWorksContainer.className == "enVersion") {
            // workImg.setAttribute("alt", work["enWorkImgAlt"])
            workTitle.innerText += work["enH3"]
            workDescription.innerText += work["enDescription"]
            strongDescription.innerText += work["strong"]
            workImg.setAttribute("alt", work["enWorkImgAlt"])
            subdomainLink.setAttribute("title", "Watch online")
            subdomainIcone.setAttribute("alt", "extern link Icone in svg format")
            githubWorkLink.setAttribute("title", "Watch on github")
            githubIcone.setAttribute("alt", "Github Icone in svg format")
            codepenWorkLink.setAttribute("title", "Watch on codepen")
            codepenIcone.setAttribute("alt", "Codepen Icone in svg format")
            workDescription.appendChild(strongDescription)
        } else {
            // workImg.setAttribute("alt", work["workImgAlt"])
            workTitle.innerText += work["h3"]
            workDescription.innerText += work["description"]
            strongDescription.innerText += work["strong"]
            workImg.setAttribute("alt", work["workImgAlt"])
            subdomainLink.setAttribute("title", "Voir en ligne")
            subdomainIcone.setAttribute("alt", "Icone lien externe au format svg")
            githubWorkLink.setAttribute("title", "Voir sur github")
            githubIcone.setAttribute("alt", "Icone github au format svg")
            codepenWorkLink.setAttribute("title", "Voir sur codepen")
            codepenIcone.setAttribute("alt", "Icone codepen au format svg")
            workDescription.appendChild(strongDescription)
        }
        
        mainWorksContainer.appendChild(workContainer)
        mainWorksContainer.appendChild(showMoreBtn)
        // mainWorksContainer.appendChild(showLessBtn)
        
        cards++
    }
}

window.onload = () => {
    addCards()
}
