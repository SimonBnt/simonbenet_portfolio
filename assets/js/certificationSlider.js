// const slides = ["/assets/img/opquast.png", "/assets/img/webResponsive.png"]
// let i = 0

// function slideChange(direction) {
//     i = i + direction
//     if (i < 0)
//         i = slides.length - 1
//     if (i > slides.length - 1)
//         i = 0
//     document.getElementById("opquastImg").src = slides[i]
// }

let certificationSlideIndex = 1

showCertificationSlide(certificationSlideIndex)

function certificationSlideChange(direction) {
    showCertificationSlide(certificationSlideIndex += direction)
}

function showCertificationSlide(direction) {

    const certificationSlideImg = document.getElementsByClassName("certificationImg")
    
    if (direction > certificationSlideImg.length) {
        certificationSlideIndex = 1
    }
    if (direction < 1) {
        certificationSlideIndex = certificationSlideImg.length 
    }
    
    for (i = 0; i < certificationSlideImg.length; i++) {
        certificationSlideImg[i].style.display = "none" 
    }
    
    certificationSlideImg[certificationSlideIndex-1].style.display = "block"
}