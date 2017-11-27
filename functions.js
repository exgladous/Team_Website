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

    //return "Today is " + day + ", " + month + " " + ddate;

        var day = today.getDay();
        var ddate = today.getDate();
        var listday = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"]
        var month = today.getMonth() + 1;
        var listmonth = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
        var year = today.getFullYear();
        return "Today is " + listday[day] + ", " + listmonth[month] + " " + ddate + ", " + year

}


// 3. Count Down

function birthdaycountDown(birthdate) {


    var today = new Date(),
        bd = new Date(birthdate),

        // age = today.getYear() - bd.getYear(),

        bd = bd.setFullYear(today.getYear() + 1, 0, 21),

        end = new Date(birthdate),
        date = today.getDate(),
        datee = end.getDate(),

        end = new Date(bd),

        duf = (end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000),
        rduf = (end.getTime() - today.getTime()) % (24 * 60 * 60 * 1000),
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

    return "There are " + days + " day(s), " + hours + " hour(s), and " + minutes + " minute(s) until my next birthday";


}
