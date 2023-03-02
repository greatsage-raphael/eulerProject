// We start on a Monday, so 0 represents Monday, 1 represents Tuesday, and so on.
let currentDayOfWeek = 1; // 1 Jan 1901 was a Tuesday.

let numSundaysOnFirstOfMonth = 0;

for (let year = 1901; year <= 2000; year++) {
  for (let month = 0; month < 12; month++) {
    // Check if the first day of the month is a Sunday.
    if (currentDayOfWeek === 0) {
      numSundaysOnFirstOfMonth++;
    }

    // Get the number of days in the current month.
    let numDaysInMonth;
    if (month === 3 || month === 5 || month === 8 || month === 10) {
      numDaysInMonth = 30;
    } else if (month === 1) {
      // Check if this is a leap year.
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        numDaysInMonth = 29;
      } else {
        numDaysInMonth = 28;
      }
    } else {
      numDaysInMonth = 31;
    }

    // Update the current day of the week.
    currentDayOfWeek = (currentDayOfWeek + numDaysInMonth) % 7;
  }
}

console.log(numSundaysOnFirstOfMonth); // Output: 171
