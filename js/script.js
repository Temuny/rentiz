const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

burger.addEventListener("click", () => {
   burger.classList.toggle("_active")
   menu.classList.toggle("_active")
   body.classList.toggle("_lock")
})
/*------------------------------Filterdropdown-----------------------------------------*/

const filter = document.querySelector(".filter")
const items = filter.querySelectorAll(".filter__block")

items.forEach(item => {
   item.addEventListener("click", event => {
      item.querySelector(".block-filter__dropdown").classList.toggle("_active")
      item.querySelector(".block-filter__icon").classList.toggle("_active")

      if (event.target.classList.contains("block-filter__item")) {
         item.querySelector(".block-filter__value").textContent = event.target.textContent;
      }
      console.log(event.target)
   })
})

/*----------------------------------Swiper----------------------------------------*/

const swiper = new Swiper('.popular-slider', {
   spaceBetween: 20,
   slidesPerView: 3,
   loop: true,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
