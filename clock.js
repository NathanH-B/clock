function clock(){ 
  var date = new Date();
  var meridiem;
  var minute;
  var second;
  var hour = date.getHours();
  var day = date.getDate();
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Tursday", "Friday", "Saturday"];
  var dayOfWeek = daysOfWeek[date.getDay()];
  var dayOfWeek = dayOfWeek.toUpperCase();

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = months[date.getMonth()];
  var month = month.toUpperCase();
  
  var year = date.getFullYear();

  if (date.getMinutes() < 10) {
    minute = "0" + date.getMinutes();
  } else {
    minute = date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    second = "0" + date.getSeconds();
  } else {
    second = date.getSeconds();
  }
  if (hour == 12) {
    meridiem = "PM";
  } else if (hour > 12) {
    meridiem = "PM";
    hour = hour - 12;
  } else {
    meridiem = "AM";
  }

  var fullTime = hour+":"+minute+":"+second+" "+meridiem;
  var fullDate = dayOfWeek+", "+day+" "+month+" "+year;

  document.getElementById("fullTime").innerHTML = fullTime;
  document.getElementById("fullDate").innerHTML = fullDate;
}
setInterval(clock, 1000);