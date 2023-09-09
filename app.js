const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

window.onload = function () {
  const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  const currentDate = new Date();
  currentDayOfTheWeekElement.textContent =
    daysOfTheWeek[currentDate.getUTCDay()];
  currentUTCTimeElement.textContent = currentDate.getTime();
};
