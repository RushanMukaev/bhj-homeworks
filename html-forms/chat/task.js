const message = document.querySelector(".chat-widget");
const btn = document.querySelector(".chat-widget__side");
const inp = document.querySelector(".chat-widget__input")

btn.addEventListener ( 'click' , () => {
    message.classList.toggle("chat-widget_active");
})

inp.addEventListener()