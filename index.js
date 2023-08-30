let toggle = document.querySelector('#close-open-toggle')
let navBar = document.querySelector('#nav-bar-sec')
let navLinks = document.querySelectorAll('.nav-links')

const submitBtn = document.querySelector('#submit-btn')
let name = document.querySelector('#name') 
let email = document.querySelector('#email') 
let textarea = document.querySelector('#textarea') 

let DarkLightBtn = document.querySelector('.fa-sun')
let BgColorContainer = document.querySelector('.main-container')


toggle.addEventListener("click", () => { // toggle for slide bar
  navBar.classList.toggle('active')
  toggle.classList.toggle('active')
}) 

navLinks.forEach(link => { // it will close the navbar, if every single of the list got clicked
  link.addEventListener("click", () => {
    navBar.classList.remove('active')
    toggle.classList.toggle('active')
  })
})

DarkLightBtn.addEventListener("click", () => { // for dark-semilight-mode theme
  BgColorContainer.classList.toggle('dark-and-light-mode');

})



submitBtn.addEventListener("click", () => { // submit alert button for feedback
  let nameInput = name.value
  let emailInput = email.value
  let textareaInput = textarea.value

  if(!nameInput || !emailInput || !textareaInput) {
    alert('Please input all the fields :(')

    // reset all the fields
    name.value = "";
    email.value = "";
    textarea.value = "";
  }
  else {
    alert("Your feedback is essential and greatly appreciated!")

    // reset all the fields
    name.value = "";
    email.value = "";
    textarea.value = "";
  }
})

