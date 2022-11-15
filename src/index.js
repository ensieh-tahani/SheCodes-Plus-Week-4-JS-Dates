//JS Challenge 1
let currentTime = new Date();
console.log(currentTime);
//JS Challenge 2
console.log(currentTime.getMilliseconds());
//JS Challenge 3
console.log(currentTime.getDay());

//JS Challenge 4
console.log(currentTime.getFullYear());
//JS Challenge 5
console.log(currentTime.getMonth());
//JS Challenge 6 and 7
function formatDate(date) {
    const weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];

    let currentYear = date.getFullYear();
    let currentDay = weekDay[date.getDay()];
    let currentMonth = months[date.getMonth()];
    let currentDate = date.getDate();
  
    let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  
    return formattedDate;


}

console.log(formatDate(currentTime));