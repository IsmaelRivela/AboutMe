`use strict`

// Links behaviour

const linksButton = document.querySelector(`.footer__button.links`)
const logoLink    = document.querySelectorAll(`.footer__link`)

linksButton.addEventListener(`click`, ()=>{
    logoLink.forEach((eachLink , i)=>{
        setTimeout(()=>{
            logoLink[i].classList.toggle(`isVisible`)
        }, (i * 300))
    })
})