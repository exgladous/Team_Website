// 1. Random Greeting


// 2. Print Date


// 3. Count Down

function countDown(datestring) {

    var today = new Date(),
        end = new Date(datestring),

        date = today.getDate(),
        datee = end.getDate(),

        daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        day = daylist[today.getDay()],
        daye = daylist[end.getDay()],

        monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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

    return "Today is " + day + ", " + month + " " + date + ", " + year + "<br> Your end date is " + daye + ", " + monthe + " " + datee + ", " + yeare + "<br>" + "There are " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until the end date.";

}

