const openModalBtnList = document.getElementsByClassName("openModal")

for (let btn of openModalBtnList) {
    btn.addEventListener("click", () => {

        let btnClass = btn.classList  
        let bodyClass = body.classList

        const modal = document.createElement("div")
        modal.classList.add("modal")
        body.appendChild(modal)

        const modalContainer = document.createElement("div")
        modalContainer.classList.add("modalContainer")
        modal.appendChild(modalContainer)

        const modalHeader = document.createElement("div")
        modalHeader.classList.add("modalHeader")
        modalContainer.appendChild(modalHeader)

        const closeModalBtn = document.createElement("button")
        closeModalBtn.classList.add("closeModalBtn")
        closeModalBtn.appendChild(document.createTextNode("x"))
        modalHeader.appendChild(closeModalBtn)

        const modalTitle = document.createElement("h2")
        modalTitle.classList.add("modalTitle")

        const mainContainer = document.createElement("div")
        mainContainer.classList.add("mainContainer")
        modalContainer.appendChild(mainContainer)

        const modalFooter = document.createElement("div")
        modalFooter.classList.add("modalFooter")
        
        const bottomCloseModalBtn = document.createElement("button")
        bottomCloseModalBtn.classList.add("bottomCloseModalBtn")
        
        if (bodyClass.contains("enVersion")) {
            bottomCloseModalBtn.appendChild(document.createTextNode("CLOSE"))
        } else {
            bottomCloseModalBtn.appendChild(document.createTextNode("FERMER"))
        }
        
        modalFooter.appendChild(bottomCloseModalBtn)
        modalContainer.appendChild(modalFooter)
        
        
        switch (true) {
            case btnClass.contains("responsiveModal") :

                modalTitle.appendChild(document.createTextNode("Design Responsive ou réactif"))
                modalHeader.appendChild(modalTitle)

                frResponsiveModalP1 = document.createElement("p")
                frResponsiveModalP1.appendChild(document.createTextNode("'Un site web réactif est un site web dont la conception vise, grâce à différents principes et techniques, à offrir une consultation confortable sur des écrans de tailles très différentes. ''Wikipédia'' '"))
                mainContainer.appendChild(frResponsiveModalP1)
                frResponsiveModalP2 = document.createElement("p")
                frResponsiveModalP2.appendChild(document.createTextNode("'Le Responsive Design ou plus précisément le Responsive Web Design (RWD) est une technique de conception d'interface digitale qui fait en sorte que l'affichage d'une quelconque page d'un site s'adapte de façon automatique à la taille de l'écran du terminal qui le lit. ''SOE.fr'' '"))
                mainContainer.appendChild(frResponsiveModalP2)

                break

            case btnClass.contains("responsiveModalEn") :

                modalTitle.appendChild(document.createTextNode("Responsive design"))
                modalHeader.appendChild(modalTitle)

                enResponsiveModalP1 = document.createElement("p")
                enResponsiveModalP1.appendChild(document.createTextNode("'Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically ajust for different screen sizes and viewports. Responsive Web Design is about [...] to automatically resize, hide, shrink, or enlarge a website, to make it look good on all devices (desktops, tablets and phones). ''w3schools'' '"))
                mainContainer.appendChild(enResponsiveModalP1)
                enResponsiveModalP2 = document.createElement("p")
                enResponsiveModalP2.appendChild(document.createTextNode("'Responsive design is an approach to web design in which the interface adapts to the device's layout, facilitating usability, navigation and information seeking. Responsiveness is possible thanks to media queries, allowing the design to adjust automatically to the browser space to ensure content consistency across devices, and design elements being sized in relative units (%). ''interaction-design'' '"))
                mainContainer.appendChild(enResponsiveModalP2)

                break

            case btnClass.contains("accessibilityModal") :

                modalTitle.appendChild(document.createTextNode("Accessibilité web"))
                modalHeader.appendChild(modalTitle)

                frAccessibilityModalP1 = document.createElement("p")
                frAccessibilityModalP1.appendChild(document.createTextNode("'L'accessibilité du web est la problématique de l'accès aux contenus et services web par les personnes handicapées et plus généralement par tous les utilisateurs, quels que soient leurs dispositifs d'accès ou leurs conditions d'environnement. ''Wikipédia'' '"))
                mainContainer.appendChild(frAccessibilityModalP1)
                frAccessibilityModalP2 = document.createElement("p")
                frAccessibilityModalP2.appendChild(document.createTextNode("'L'accessibilité est la mise à disposition de vos sites web au plus grand nombre. On pense souvent que cela s'adresse aux personnes ayant un handicap, mais cela concerne également d'autres groupes comme ceux utilisant des appareils mobiles ou ceux qui ont des connexions internet de faible débit. ''Mozilla'' '"))
                mainContainer.appendChild(frAccessibilityModalP2)

                break

            case btnClass.contains("accessibilityModalEn") :

                modalTitle.appendChild(document.createTextNode("Web accessibility"))
                modalHeader.appendChild(modalTitle)

                enAccessibilityModalP1 = document.createElement("p")
                enAccessibilityModalP1.appendChild(document.createTextNode("'Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. ''w3'' '"))
                mainContainer.appendChild(enAccessibilityModalP1)
                enAccessibilityModalP2 = document.createElement("p")
                enAccessibilityModalP2.appendChild(document.createTextNode("'Web accessibility is the need for websites to utilize tools and technologies developed to aid the perception, understanding, contribution, navigation, and interaction of a person with disabilities on the site. ''monsido'' '"))
                mainContainer.appendChild(enAccessibilityModalP2)

                break

            case btnClass.contains("seoModal") :

                modalTitle.appendChild(document.createTextNode("Référencement ou Seo"))
                modalHeader.appendChild(modalTitle)

                frSeoModalP1 = document.createElement("p")
                frSeoModalP1.appendChild(document.createTextNode("'L'optimisation pour les moteurs de recherche, aussi connue sous le sigle SEO, inclut l'ensemble des techniques qui visent à améliorer le positionnement d'une page, d'un site ou d'une application web dans la page de résultats d'un moteur de recherche. ''Wikipédia'' '"))
                mainContainer.appendChild(frSeoModalP1)
                frSeoModalP2 = document.createElement("p")
                frSeoModalP2.appendChild(document.createTextNode("'SEO (Search Engine Optimization ou, en français, Optimisation pour les moteurs de recherche) est le processus permettant de rendre un site web plus visible dans les résultats de recherche, également appelé amélioration des classements de recherche. ''Mozilla'' '"))
                mainContainer.appendChild(frSeoModalP2)

                break

            case btnClass.contains("seoModalEn") :

                modalTitle.appendChild(document.createTextNode("Search Engine Optimization 'SEO'"))
                modalHeader.appendChild(modalTitle)

                enSeoModalP1 = document.createElement("p")
                enSeoModalP1.appendChild(document.createTextNode("'SEO stands for “search engine optimization.” In simple terms, SEO means the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for. ''searchengineland'' '"))
                mainContainer.appendChild(enSeoModalP1)
                enSeoModalP2 = document.createElement("p")
                enSeoModalP2.appendChild(document.createTextNode("'SEO stands for search engine optimization, which is a set of practices designed to improve the appearance and positioning of web pages in organic search results. Because organic search is the most prominent way for people to discover and access online content, a good SEO strategy is essential for improving the quality and quantity of traffic to your website. ''moz'' '"))
                mainContainer.appendChild(enSeoModalP2)
                
                break

            case btnClass.contains("securityModal") :

                modalTitle.appendChild(document.createTextNode("Sécurité web"))
                modalHeader.appendChild(modalTitle)

                frSecurityModalP1 = document.createElement("p")
                frSecurityModalP1.appendChild(document.createTextNode("'La sécurité Internet est une expression qui décrit la sécurité des activités et des transactions exécutées sur Internet. Elle constitue une partie spécifique de la cybersécurité et de la sécurité informatique et implique des thèmes comme la sécurité du navigateur, les comportements en ligne et la sécurité du réseau. ''Kaspersky'' '"))
                mainContainer.appendChild(frSecurityModalP1)
                frSecurityModalP2 = document.createElement("p")
                frSecurityModalP2.appendChild(document.createTextNode("'Plus formellement, la sécurité des sites web est l'acte de protéger les sites web contre l'accès, l'utilisation, la modification, la destruction ou la perturbation non autorisées. ''Mozilla'' '"))
                mainContainer.appendChild(frSecurityModalP2)

                break

            case btnClass.contains("securityModalEn") :

                modalTitle.appendChild(document.createTextNode("Web security"))
                modalHeader.appendChild(modalTitle)

                enSecurityModalP1 = document.createElement("p")
                enSecurityModalP1.appendChild(document.createTextNode("'In general, web security refers to the protective measures and protocols that organizations adopt to protect the organization from cyber criminals and threats that use the web channel. Web security is critical to business continuity and to protecting data, users and companies from risk. ''mimecast'' '"))
                mainContainer.appendChild(enSecurityModalP1)
                enSecurityModalP2 = document.createElement("p")
                enSecurityModalP2.appendChild(document.createTextNode("'Ensuring that your website or open web application is secure is critical. Even simple bugs in your code can result in private information being leaked, and bad people are out there trying to find ways to steal data. ''mozilla'' '"))
                mainContainer.appendChild(enSecurityModalP2)

                break

            case btnClass.contains("agileModal") :

                modalTitle.appendChild(document.createTextNode("Les méthodes Agiles"))
                modalHeader.appendChild(modalTitle)

                frAgileModalP1 = document.createElement("p")
                frAgileModalP1.appendChild(document.createTextNode("'En ingénierie logicielle, les pratiques agiles mettent en avant la collaboration entre des équipes auto-organisées et pluridisciplinaires et leurs clients. Elles s'appuient sur l'utilisation d'un cadre méthodologique léger mais suffisant centré sur l'humain et la communication. ''Wikipédia'' '"))
                mainContainer.appendChild(frAgileModalP1)
                frAgileModalP2 = document.createElement("p")
                frAgileModalP2.appendChild(document.createTextNode("'La méthode agile est une méthode de gestion de projet. L'idée, lorsque l'on utilise cette approche, est d'apporter souplesse et performance à la gestion de projet. Centrée sur l'humain et la communication, elle permet aux clients de participer au développement d'un produit tout au long de l'avancement du projet. ''Slack'' '"))
                mainContainer.appendChild(frAgileModalP2)

                break

            case btnClass.contains("agileModalEn") :
                
                modalTitle.appendChild(document.createTextNode("Agile software development methods"))
                modalHeader.appendChild(modalTitle)

                enAgileModalP1 = document.createElement("p")
                enAgileModalP1.appendChild(document.createTextNode("'The Agile methodology is a way to manage a project by breaking it up into several phases. It involves constant collaboration with stakeholders and continuous improvement at every stage. Once the work begins, teams cycle through a process of planning, executing, and evaluating. Continuous collaboration is vital, both with team members and project stakeholders. ''wrike'' '"))
                mainContainer.appendChild(enAgileModalP1)
                enAgileModalP2 = document.createElement("p")
                enAgileModalP2.appendChild(document.createTextNode("'Agile Methodology is a people-focused, results-focused approach to software development that respects our rapidly changing world. It’s centered around adaptive planning, self-organization, and short delivery times. It’s flexible, fast, and aims for continuous improvements in quality. ''stackify'' '"))
                mainContainer.appendChild(enAgileModalP2)

                break

            default :
                console.log("error : parent node doesn't exist")    
        }

        closeModalBtn.addEventListener("click", () => {
            modal.remove()
        })

        bottomCloseModalBtn.addEventListener("click", () => {
            modal.remove()
        })

        modal.children[0].addEventListener("click", (e) => {
            e.stopPropagation()
        })
    })
}