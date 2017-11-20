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
    var listmonth = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
    var year = today.getFullYear();
    document.write(" Today date is ", listday[day], " ", listmonth[month], " ", ddate + ", ", year);

    return "Today is " + day + ", " + month + " " + ddate;

}


// 3. Count Down

function birthdaycountDown(datestring) {

    var today = new Date(),
        end = new Date(datestring),

        duf = (today.getTime() - end.getTime()) / (24 * 60 * 60 * 1000),
        rduf = (today.getTime() - end.getTime()) % (24 * 60 * 60 * 1000),
        days = Math.floor(duf),

        huf = rduf / (60 * 60 * 1000),
        rhuf = rduf % (60 * 60 * 1000),
        hours = Math.floor(huf),

        muf = rhuf / (60 * 1000),
        rmuf = rhuf % (60 * 1000),
        minutes = Math.floor(muf),

        suf = rmuf / 1000,
        rsuf = rmuf % 1000,
        seconds = Math.floor(suf);

    return "There are " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until my next birthday";

}
