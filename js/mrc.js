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
