const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

burger.addEventListener("click", () =>{
   burger.classList.toggle("_active")
   menu.classList.toggle("_active")
   body.classList.toggle("_lock")
})
