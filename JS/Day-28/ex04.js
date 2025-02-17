const time1 = new Date("04-08-2002");
const time2 = new Date();

// let day = Math.floor((time2 - time1) / 86400000);
// let day2 = (time2 - time1) % 86400000
// console.log(day);
// console.log(day2);

const getMinutesWeek = () => {
    let now = new Date();
    let nowDay = now.getDay();
    let nowMinutes = now.getMinutes();
    let nowHours = now.getHours();
    
    if(nowDay === 0) {
        nowDay = 7;
    }

    return nowMinutes + nowHours * 60 + (nowDay - 1) * 1440;

}

console.log(getMinutesWeek());

