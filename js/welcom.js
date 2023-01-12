
// Open and Close navbar modal
document.getElementById("popModal").addEventListener( "mouseover", function () {
  document.querySelector(".departmental-selection").style.display="flex"

})

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".departmental-selection").style.display="none"
  
})

// Calender

const currentDate = document.querySelector(".current-date"),
  daysTags = document.querySelector(".days"),
  preNexticon = document.querySelectorAll(".icons .fa-solid");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

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
  "Octoberr",
  "November",
  "December",
];
const renderCalender = () => {
  let firstDateOfMonth = new Date(currYear, currMonth, 1).getDay(); //   get first day of the month of month
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //   get last date of month
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); //   get last date of previous month
  let LastDayOfMonth = new Date(
    currYear,
    currMonth,
    lastDateOfLastMonth
  ).getDay(); //   get last day of month
  let liTag = "";
  for (let i = firstDateOfMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    // creating li of all days of current month
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "actives"
        : "";

    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = LastDayOfMonth; i < 6; i++) {
    // creating li of next month first days

    liTag += `<li class="inactive">${i - LastDayOfMonth + 1}</li>`;
  }
  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTags.innerHTML = liTag;
};
renderCalender();
preNexticon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is previous icon then decrement it by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); // update current year with new date year
      currMonth = date.getMonth(); // update current month with new date year
    } else {
      date = new Date();
    }
    renderCalender();
  });
});




// For tabs in the News section

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
} 

function openAll() {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
  }
}

let tablinks = document.querySelectorAll(".tab-links");
for (let i = 0; i < tablinks.length; i++) {
tablinks[i].addEventListener("click",function () {
  tablinks[i].classList.toggle("active")
  console.log("boy")
})
  
}





  // Open and Close navbar modal
  document.getElementById("popModal").addEventListener( "mouseover", function () {
    
    document.querySelector(".departmental-selection").style.display="flex"
  
  })
  
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".departmental-selection").style.display="none"
    
  })

// Departmental Tabs
function showThistabs(activatedtabs, contentTabs) {
  var navtabs=document.querySelectorAll(".navs-tabs")
  var tabContent=document.querySelectorAll(".navigation-department-container")
  var i=0

while (i < navtabs.length) {
  navtabs[i].classList.remove("activate");
  tabContent[i].classList.remove("showThis");
  i++;
      }
    activatedtabs.classList.add('activate')
    document.getElementById(contentTabs).classList.add('showThis')
}


function showInfo(activatedinfo, infocontent) {
let departmentTab = document.querySelectorAll(".department-tabs");
let deparmntpic = document.querySelectorAll(".departmental-leader-profile")
let i = 0;
while (i < departmentTab.length) {
  departmentTab[i].classList.remove("activates");
for (let i = 0; i < deparmntpic.length; i++) {

deparmntpic[i].classList.remove("uploaded")
  
}
  i++;
}
activatedinfo.classList.add("activates");
document.getElementById(infocontent).classList.add("uploaded");
}