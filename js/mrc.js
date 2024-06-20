// DATE CHOICE LIMITATION

function setDatepickerMinDate(date, id) {
    const element = document.getElementById(id)
    element.min = date
}

function setDatepickerMaxDate(date, id) {
    const element = document.getElementById(id)
    element.max = date
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getMinDate() {
    const now = (new Date()).addDays(1)
    return now.toISOString().split('T')[0]
}

function getMaxDate() {
    const now = (new Date()).addDays(7)
    return now.toISOString().split('T')[0]
}

setDatepickerMinDate(getMinDate(), "datepick")
setDatepickerMaxDate(getMaxDate(), "datepick")

// SUBMIT BUTTON

var form = document.getElementById("register");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function submitForm() {
    document.getElementById("register").style.display = "none";
    document.getElementById("reg--onsubmit").style.display = "block"
}

// BOOKLET SLIDESHOW

const array_booklet = [
    "./img/scan-1.png",
    "./img/scan-2.png",
    "./img/scan-3.png",
    "./img/scan-4.png",
    "./img/scan-5.png",
    "./img/scan-6.png",
    "./img/scan-7.png",
    "./img/scan-8.png",
    "./img/scan-9.png",
    "./img/scan-10.png",
    "./img/scan-11.png",
    "./img/scan-12.png",
    "./img/scan-13.png",
    "./img/scan-14.png",
    "./img/scan-15.png",
]

var booklet_counter = 0

const booklet = document.getElementById("booklet-slideshow")

function bookletSlideshowNext() {
    booklet_counter++
    booklet_counter = booklet_counter % array_booklet.length;
    booklet.src = array_booklet[booklet_counter]
}

function bookletSlideshowBack() {
    if (booklet_counter == 0) return;
    booklet_counter--;
    booklet_counter = booklet_counter % array_booklet.length;
    booklet.src = array_booklet[booklet_counter]
}
