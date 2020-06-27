import {isWeekend, getDayName} from "./date-helper.js"

const calendar = document.querySelector('app-calander')


for (let day = 1; day < 31 ; day++) {


    const dayName = getDayName(day);
  
    const weekend = isweekend(day);
    calendar.insertAdjacentElementHTML('beforeend',` <div class = "day ${weekend ? "weekend" : ''}">${day}</div>`);

  
}
