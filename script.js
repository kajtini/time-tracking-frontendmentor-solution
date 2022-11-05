"use strict";

const statsData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const allActivities = document.querySelectorAll("[data-activity]");
const allTimeframes = document.querySelectorAll(".timeframe");
const allCurrentTimes = document.querySelectorAll(".user-stat__time");
const allPreviousTimes = document.querySelectorAll(".user-stat__time-previous");

const statsContainer = document.querySelector(".user-stats");
const timeFramesContainer = document.querySelector(".timeframes");

const addActiveState = (target) => {
  allTimeframes.forEach((frame) => {
    frame.classList.remove("timeframe--active");
  });
  target.classList.add("timeframe--active");
};

const insertAccordingData = (target) => {
  let html;
  let statTimeCurr;
  let statTimePrev;
  let lastTime = "";

  while (statsContainer.firstChild) {
    statsContainer.firstChild.remove();
  }

  allActivities.forEach((_, i) => {
    const statTitle =
      statsData[i].title.toLowerCase().split(" ").length > 1
        ? statsData[i].title.toLowerCase().split(" ").join("-")
        : statsData[i].title.toLowerCase();

    if (target.classList.contains("timeframes__daily")) {
      statTimeCurr = statsData[i].timeframes.daily.current;
      statTimePrev = statsData[i].timeframes.daily.previous;
      lastTime = "Day";
    }

    if (target.classList.contains("timeframes__weekly")) {
      statTimeCurr = statsData[i].timeframes.weekly.current;
      statTimePrev = statsData[i].timeframes.weekly.previous;
      lastTime = "Week";
    }

    if (target.classList.contains("timeframes__monthly")) {
      statTimeCurr = statsData[i].timeframes.monthly.current;
      statTimePrev = statsData[i].timeframes.monthly.previous;
      lastTime = "Month";
    }

    html = `
    <article data-activity="${statTitle}" class="user-stat">
      <div class="user-stat__icon icon-${statTitle}">
        <img src="images/icon-${statTitle}.svg" alt="" class="icon" />
      </div>
      <div class="user-stat__detail detail-grid">
        <p class="user-stat__type">${statTitle.toUpperCase()}</p>
        <img
          src="images/icon-ellipsis.svg"
          alt=""
          class="user-stat__more-icon"
        />
        <p class="user-stat__time">${statTimeCurr}hrs</p>
        <div class="user-stat__time-previous">Last ${lastTime} - ${statTimePrev}hrs</div>
      </div>
    </article>`;

    statsContainer.insertAdjacentHTML("beforeend", html);
  });
};

timeFramesContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("timeframes__daily")) {
    addActiveState(e.target);
    insertAccordingData(e.target);
  }

  if (e.target.classList.contains("timeframes__weekly")) {
    addActiveState(e.target);
    insertAccordingData(e.target);
  }

  if (e.target.classList.contains("timeframes__monthly")) {
    addActiveState(e.target);
    insertAccordingData(e.target);
  }
});
