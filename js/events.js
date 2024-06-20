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

const img_slideshow_1 = document.getElementById("slideshow-1")
const img_slideshow_2 = document.getElementById("slideshow-2")
const img_slideshow_3 = document.getElementById("slideshow-3")
const img_slideshow_4 = document.getElementById("slideshow-4")
const img_slideshow_5 = document.getElementById("slideshow-5")

const slideshow_1 = [
    "./img/event-1-1.png",
    "./img/event-1-2.png",
    "./img/event-1-3.png",
    "./img/event-1-4.png",
]
const slideshow_2 = [
    "./img/event-2-1.png",
    "./img/event-2-2.png",
    "./img/event-2-3.png",
    "./img/event-2-4.png",
]
const slideshow_3 = [
    "./img/event-3-1.png",
    "./img/event-3-2.png"
]
const slideshow_4 = [
    "./img/event-4.png",
]
const slideshow_5 = [
    "./img/event-5-1.png",
    "./img/event-5-2.png"
]

var interval_1 = startSlideshow(img_slideshow_1, slideshow_1)
var interval_2 = startSlideshow(img_slideshow_2, slideshow_2)
var interval_3 = startSlideshow(img_slideshow_3, slideshow_3)
var interval_4 = startSlideshow(img_slideshow_4, slideshow_4)
var interval_5 = startSlideshow(img_slideshow_5, slideshow_5)


img_slideshow_1.addEventListener('pointerenter', () => {
    stopSlideshow(interval_1)
})
img_slideshow_2.addEventListener('pointerenter', () => {
    stopSlideshow(interval_2)
})
img_slideshow_3.addEventListener('pointerenter', () => {
    stopSlideshow(interval_3)
})
img_slideshow_4.addEventListener('pointerenter', () => {
    stopSlideshow(interval_4)
})
img_slideshow_5.addEventListener('pointerenter', () => {
    stopSlideshow(interval_5)
})


img_slideshow_1.addEventListener('pointerleave', () => {
    interval_1 = startSlideshow(img_slideshow_1, slideshow_1)
})
img_slideshow_2.addEventListener('pointerleave', () => {
    interval_2 = startSlideshow(img_slideshow_2, slideshow_2)
})
img_slideshow_3.addEventListener('pointerleave', () => {
    interval_3 = startSlideshow(img_slideshow_3, slideshow_3)
})
img_slideshow_4.addEventListener('pointerleave', () => {
    interval_4 = startSlideshow(img_slideshow_4, slideshow_4)
})
img_slideshow_5.addEventListener('pointerleave', () => {
    interval_5 = startSlideshow(img_slideshow_5, slideshow_5)
})
