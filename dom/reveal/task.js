const reveal = document.querySelectorAll(".reveal");

function isVisible() {
   reveal.forEach ((element) => {
      const { top, bottom } = element.getBoundingClientRect();
      if(bottom < 0) {
         element.classList.remove("reveal_active");
         return;
      }
      if(top > window.innerHeight) {
         element.classList.remove("reveal_active");
         return;
      }
      element.classList.add("reveal_active");
      return;  
   })
}

document.addEventListener('scroll', isVisible);