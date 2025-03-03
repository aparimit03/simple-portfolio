'use strict'

// element toggle funtion

const elementToggleFunc = function (elem) { 
  // if (window.matchMedia("(max-width: 1249px)").matches) {
  //   elem.classList.toggle("active"); 
  // }

  if (window.innerWidth < 1250) {
    elem.classList.toggle("active"); 
  }
}

// sidebar variables

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle funcationality for mobile 

sidebar.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

// add click event to all modal items

let dates = ["28th August 2024", "22nd February 2024", "20th February 2023"];

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {

        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        modalDate.innerHTML = dates[i];

        testimonialsModalFunc();
    });
}

// add click event to modal close button

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// custom select variables

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });


// add Event in all select

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}


// filter variables

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    }
    else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    }
    else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerHTML = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact for variables

const form = document.querySelector("[data-form]");
const formInput = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


// add event to all form input field

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("input", function () {

    if (form.checkVisibility()) {
      formBtn.removeAttribute("disabled");
    }

    else {
       formBtn.setAttribute("disabled", "")
    }
  });
}


// page navigation variables 

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
  
      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
  
    });
  }

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    // Get values from the form fields
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct the mailto URL
    const mailtoLink = `mailto:aparimit2003@gmail.com?subject=Message from ${fullName} (${email})&body=${encodeURIComponent(message)}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
});