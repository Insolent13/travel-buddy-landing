const header = document.querySelector(".header")
const toggle = document.querySelector(".toggle-button")

let openMobileMenu = function() {
  if(header.classList.contains("header--open-mobile")) {
    header.classList.remove("header--open-mobile")
  } else {
    header.classList.add("header--open-mobile")
  }
}

let sticky = function() {
  if(window.pageYOffset >= 100) {
    header.classList.add("header--sticky")
  } else {
    header.classList.remove("header--sticky")
  }
}


toggle.addEventListener("click", openMobileMenu)
window.addEventListener('scroll', sticky)



if (fieldsCountry) {
  fieldsCountry.forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("field-country__control--open")
    })
  })
}

if (btnsCompanionLike) {
  btnsCompanionLike.forEach(el => {
    el.addEventListener("click", (evt) => {
      let t = evt.target

      if (t.classList.contains("companion-like__button")) {
        el.classList.toggle("companion-like--active")
      }
    })
  })
}