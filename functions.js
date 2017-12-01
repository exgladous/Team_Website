// 1. Date & Time Greeting
function greeting() {
    var today = new Date();
    var hour = today.getHours();
    var day = today.getDay();
    if (hour < 10) {
        if (day == 0 || day == 6) {
            return "Go back to sleep! Its the weekend!";
        } else if (day == 1) {
            return "Ugh, its a Monday monring!";
        } else {
            return "Good Morning!";
        }
    } else if (hour < 18) {
        if (day == 0 || day == 6) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good Day!";
        }

    } else {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!"
        } else {
            return "Good Evening!";
        }
    }
}

// 2. Print Date

function dateMessage() {
    var today = new Date();
    var day = today.getDay();
    var ddate = today.getDate();
    var listday = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"]
    var month = today.getMonth();
    var listmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = today.getFullYear();

    var strings = ddate.toString();
    var suffixcheck = strings.substr(-1);
    if (suffixcheck == 1) {
        var fix = "st"
    } else if (suffixcheck == 2) {
        var fix = "nd"
    } else if (suffixcheck == 3) {
        var fix = "rd"
    } else {
        var fix = "th"
    }

    return "Today is" + " " + listday[day] + ", " + listmonth[month] + " " + ddate + fix + ", " + year;

}

// 3. Count Down

function birthdaycountDown(birthdate) {

    var today = new Date(),
        bd = new Date(birthdate),

        year = today.getFullYear();
    bd.setFullYear(year);
    var timecheck = (today.getTime() - bd.getTime());

    if (timecheck > 0) {
        bd.setFullYear(year + 1);
    }

    var duf = (bd.getTime() - today.getTime()) / 86400000,
        rduf = (bd.getTime() - today.getTime()) % 86400000,
        days = Math.floor(duf),

        huf = rduf / 3600000,
        rhuf = rduf % 3600000,
        hours = Math.floor(huf),

        muf = rhuf / 60000,
        rmuf = rhuf % 60000,
        minutes = Math.floor(muf);

    return "There are " + days + " day(s), " + hours + " hour(s), and " + minutes + " minute(s) until my next birthday";

}
