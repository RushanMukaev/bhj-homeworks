const fontSize = Array.from(document.querySelector(".book__control_font-size").children);
const colorBg = Array.from(document.querySelector(".book__control_background").children);
const colorText = Array.from(document.querySelector(".book__control_color").children);
const book = document.querySelector(".book");

for(let i = 0; i < fontSize.length; i++) {
    fontSize[i].onclick = () => {
        for(let i = 0; i < fontSize.length; i++) {
            fontSize[i].classList.remove("font-size_active");
        }
        fontSize[i].classList.add("font-size_active");
        if(fontSize[i].getAttribute("data-size") === "small") {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        } else if(fontSize[i].getAttribute("data-size") === "big") {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
        }
        return false;
    }
}

for(let i = 0; i < colorText.length; i++) {
    colorText[i].onclick = () => {
        for(let i = 0; i < colorText.length; i++) {
            colorText[i].classList.remove("color_active");
        }
        colorText[i].classList.add("color_active");
        if(colorText[i].getAttribute("data-text-color") === "black") {
            book.classList.remove("book_color-gray");
            book.classList.remove("book_color-whitesmoke");
            book.classList.add("book_color-black");
        } else if(colorText[i].getAttribute("data-text-color") === "gray") {
            book.classList.remove("book_color-black");
            book.classList.remove("book_color-whitesmoke");
            book.classList.add("book_color-gray");
        } else {
            book.classList.remove("book_color-black");
            book.classList.remove("book_color-gray");
            book.classList.add("book_color-whitesmoke");
        }
        return false;
    }
}

for(let i = 0; i < colorBg.length; i++) {
    colorBg[i].onclick = () => {
        for(let i = 0; i < colorBg.length; i++) {
            colorBg[i].classList.remove("color_active");
        }
        colorBg[i].classList.add("color_active");
        if(colorBg[i].getAttribute("data-bg-color") === "black") {
            book.classList.remove("book_bg-gray");
            book.classList.remove("book_bg-whitesmoke");
            book.classList.add("book_bg-black");
        } else if(colorBg[i].getAttribute("data-bg-color") === "gray") {
            book.classList.remove("book_bg-black");
            book.classList.remove("book_bg-whitesmoke");
            book.classList.add("book_bg-gray");
        } else {
            book.classList.remove("book_bg-black");
            book.classList.remove("book_bg-gray");
            book.classList.add("book_bg-whitesmoke");
        }
        return false;
    }
}