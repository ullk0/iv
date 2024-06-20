// SHOP SLIDESHOWS (ONCLICK)

function cardsSlideshow() {
    if (document.getElementById("cards-slideshow").src.includes("/img/merch-card-1.png")) {
        document.getElementById("cards-slideshow").src = "./img/merch-card-2.png";
    } else {
        document.getElementById("cards-slideshow").src = "./img/merch-card-1.png";
    }
}

function recordsSlideshow() {
    if (document.getElementById("records-slideshow").src.includes("/img/merch-record-1.png")) {
        document.getElementById("records-slideshow").src = "./img/merch-record-2.png";
    } else if (document.getElementById("records-slideshow").src.includes("/img/merch-record-2.png")) {
        document.getElementById("records-slideshow").src = "./img/merch-record-3.png"
    } else {
        document.getElementById("records-slideshow").src = "./img/merch-record-1.png"
    }
}