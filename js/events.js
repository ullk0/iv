// SLIDESHOW FUNCTION

function startSlideshow(element, images) {
    var counter = 0;
    return setInterval(() => {
        element.src = images[counter];
        counter++;
        counter = counter % images.length;
    }, 1000)
}

function stopSlideshow(interval) {
    clearInterval(interval);
}

// EVENT SLIDESHOWS

const slideshow_1 = document.getElementById("slideshow-1")
const slideshow_2 = document.getElementById("slideshow-2")
const slideshow_3 = document.getElementById("slideshow-3")
const slideshow_5 = document.getElementById("slideshow-5")

const array_1 = [
    "./img/event-1-1.png",
    "./img/event-1-2.png",
    "./img/event-1-3.png",
    "./img/event-1-4.png",
]
const array_2 = [
    "./img/event-2-1.png",
    "./img/event-2-2.png",
    "./img/event-2-3.png",
    "./img/event-2-4.png",
]
const array_3 = [
    "./img/event-3-1.png",
    "./img/event-3-2.png"
]

const array_5 = [
    "./img/event-5-1.png",
    "./img/event-5-2.png"
]

var interval_1 = startSlideshow(slideshow_1, array_1)
var interval_2 = startSlideshow(slideshow_2, array_2)
var interval_3 = startSlideshow(slideshow_3, array_3)
var interval_5 = startSlideshow(slideshow_5, array_5)


slideshow_1.addEventListener('pointerenter', () => {
    stopSlideshow(interval_1)
})
slideshow_2.addEventListener('pointerenter', () => {
    stopSlideshow(interval_2)
})
slideshow_3.addEventListener('pointerenter', () => {
    stopSlideshow(interval_3)
})
slideshow_5.addEventListener('pointerenter', () => {
    stopSlideshow(interval_5)
})


slideshow_1.addEventListener('pointerleave', () => {
    interval_1 = startSlideshow(slideshow_1, array_1)
})
slideshow_2.addEventListener('pointerleave', () => {
    interval_2 = startSlideshow(slideshow_2, array_2)
})
slideshow_3.addEventListener('pointerleave', () => {
    interval_3 = startSlideshow(slideshow_3, array_3)
})
slideshow_5.addEventListener('pointerleave', () => {
    interval_5 = startSlideshow(slideshow_5, array_5)
})
