const header = document.querySelector(".header")
const toggle = document.querySelector(".toggle-button")
const rateButton = document.querySelector(".rate-button")
const modal = document.querySelector(".modal")
const btnModalClose = document.querySelector(".modal__close")
const companionsFilter = document.querySelectorAll(".companions-filter__fieldset")
const locationFilter = document.querySelector(".location-filter")
const locationFilterLands = document.querySelector(".location-filter-lands")
const btnCloseLocationFilter = document.querySelector(".location-filter__button")
const toggleLocationFilter = document.querySelector(".location-filter__toggle")
const btnsLandsLocationFilter = document.querySelectorAll(".location-filter-lands__link")

let openMobileMenu = function() {
	if(header.classList.contains("header--open-mobile")) {
	  header.classList.remove("header--open-mobile")
	} else {
	  header.classList.add("header--open-mobile")
	}
  }

  let openModal = function() {
	modal.classList.add("modal--open")
	document.body.style.overflow = 'hidden';
  }

  let closeModal = function() {
	modal.classList.remove("modal--open")
	document.body.style.overflow = '';
  }

  let sticky = function() {
	if(window.pageYOffset >= 100) {
	  header.classList.add("header--sticky")
	} else {
	  header.classList.remove("header--sticky")
	}
}

let openLocationFilter = () => {
	locationFilter.classList.remove("location-filter--open")
	locationFilter.classList.add("location-filter--open")
}
  
  let closeLocationFilter = () => {
	locationFilter.classList.remove("location-filter--open")
  
	btnsLandsLocationFilter.forEach(el => {
	  el.classList.remove("location-filter-lands__link--active")
	})
}

toggle.addEventListener("click", openMobileMenu)
window.addEventListener('scroll', sticky)

if (modal) {
	rateButton.addEventListener("click", openModal)
	btnModalClose.addEventListener("click", closeModal)
}

if (locationFilter) {
	btnCloseLocationFilter.addEventListener("click", closeLocationFilter)
  
	toggleLocationFilter.addEventListener("click", () => {
	  if (locationFilter.classList.contains("location-filter--open")) {
		closeLocationFilter()
	  } else {
		openLocationFilter()
	  }
	})
  
	locationFilterLands.addEventListener("click", (evt) => {
	  let t = evt.target
  
	  if (t.classList.contains("location-filter-lands__link")) {
		btnsLandsLocationFilter.forEach(el => {
		  el.classList.remove("location-filter-lands__link--active")
		})
  
		openLocationFilter()
		t.classList.add("location-filter-lands__link--active")
	  }
	})
}