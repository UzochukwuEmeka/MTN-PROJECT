// Calender

const currentDate = document.querySelector(".current-date"),
  daysTags = document.querySelector(".days"),
  preNexticon = document.querySelectorAll(".icons .chveron-solid");
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

  // Select Clicked Date
  let lists = document.querySelectorAll("li");
  lists.forEach((list) => {
    list.addEventListener("click", function () {
      lists.forEach((li) => li.classList.remove("event"));
      this.classList.add("event");
      console.log( list  )

    });
  });
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

