// 1. Random Greeting


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

return "Today is " + day + ", " + month + " " + ddate

}


// 3. Count Down

function birthdaycountDown(datestring) {

    var end = new Date(datestring),
        date = today.getDate(),
        datee = end.getDate(),

        day = daylist[today.getDay()],
        daye = daylist[end.getDay()],

        month = monthlist[today.getMonth()],
        monthe = monthlist[end.getMonth()],

        year = today.getFullYear(),
        yeare = end.getFullYear();

    var duf = (end.getTime() - today.getTime()) / 86400000,
        rduf = (end.getTime() - today.getTime()) % 86400000,
        days = Math.floor(duf),

        huf = rduf / 3600000,
        rhuf = rduf % 3600000,
        hours = Math.floor(huf),

        muf = rhuf / 60000,
        rmuf = rhuf % 60000,
        minutes = Math.floor(muf),

        suf = rmuf / 1000,
        rsuf = rmuf % 1000,
        seconds = Math.floor(suf);

    return <br> Your end date is " + daye + ", " + monthe + " " + datee + ", " + yeare + "<br>" + "There are " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until the end date.";

}
