window.addEventListener("load", loader)

function loader() {

    const timeline = gsap.timeline()

    timeline
    .to(".logo", {y: 0, ease: "power1.easeOut"})
    .to(".enMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to(".frMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to(".lightMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to(".darkMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to(".allNavLink", {opacity: 1, duration: 2, ease: "power1.easeOut"})
    // .to(".homeHeaderP", {x: 0, ease: "power1.easeOut"}, "-=1")
    // .to(".mainH1", {x: 0, ease: "power1.easeOut"}, "-=1")
    // .to(".homePContainer", {x: 0, ease: "power1.easeOut"}, "-=1")
    // .to(".ppImg", {x: 0, duration: 1, ease: "power1.easeOut"}, "-=0.5")
    // .to(".mainH2", {x: 0, duration: 1.25, ease: "power1.easeOut"}, "-=0.2")
    .to(".leftSideNav", {x: 0, ease: "power1.easeOut"}, "-=1.5")
    .to(".rightSideNav", {x: 0, ease: "power1.5.easeOut"}, "-=1.5")
    .to("#homeSection", {opacity: 1, duration: 1.5}, "-=0.75")
    // .to("#homeSectionBottomLeftCornerDecoration", {opacity: 1, duration: 0.5, ease: "power1.easeOut"}, "+=0.5")
    // .to("#homeSectionTopRightCornerDecoration", {opacity: 1, duration: 0.5, ease: "power1.easeOut"}, "-=0.5")
    .to("#scrollMouse", {opacity: 1, duration: 1.5, ease: "power1.easeOut"}, "-=0.2")
}
    
        
    