// 1. Random Greeting

function randomGreeting() {
    var salutation = ["Howdy!", "Greetings!", "Hola!", "Bonjour!", "Take me to your leader!", "!مرحبا", "你好！", "Здравствуйте!", "Sveiki!", "Алло!"];
    var rand = Math.floor(Math.random() * 10);
    return salutation[rand]
}

// 2. Print Date

function dateMessage() {
    var today = new Date();
    var day = today.getDay();
    var ddate = today.getDate();
    var listday = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"]
    var month = today.getMonth() + 1;
    var listmonth = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
    var year = today.getFullYear();

    var datestring = ddate.toString();
    var suffixcheck = datestring.substr(-1);

    if (suffixcheck == 1) {
        var suffix = "st";
    } else if (suffixcheck == 2) {
        var suffix = "nd";
    } else if (suffixcheck == 3) {
        var suffix = "rd";
    } else {
        var suffix = "th";
    }

    return "Today is " + listday[day] + ", " + listmonth[month] + " " + ddate + suffix + ", " + year;

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

    return "There are " + days + " day(s), " + hours + " hour(s), and " + minutes + " minute(s) until my next birthday.";

}

// 4. Date Based Greeting
