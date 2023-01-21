

exports.getCurrentDate = function getCurrentDate() {
    const date_ob = new Date();
    var year = date_ob.getFullYear();
    if (date_ob.getMonth()+1 < 10) {
        var month = "0" + String(Number(date_ob.getMonth()+1));
    } else {
        var month = String(Number(date_ob.getMonth()+1));
    }

    if (date_ob.getDate() < 10) {
        var day = "0" + date_ob.getDate();
    } else {
        var day = date_ob.getDate();
    }

    return year + "-" + month + "-" + day
}




exports.getStringDate = function getStringDate(year, month, day, time) {
    var monthArr = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    
    month = monthArr.indexOf(month) + 1;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day + "T" + time + ":00";

}