const countDownDate = new Date("Oct 31, 2020 12:00 :00").getTime();

const timerFunction = setInterval(() => {

    const currentDate = new Date().getTime();
    const finalTime = countDownDate - currentDate;

    if (finalTime > 0) {

        const days = Math.floor(finalTime / (1000 * 60 * 60 * 24));

        const hours = Math.floor((finalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((finalTime % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((finalTime % (1000 * 60)) / (1000));

        document.getElementById('days').innerHTML = days;

        document.getElementById('hours').innerHTML = hours;

        document.getElementById('minutes').innerHTML = minutes;

        document.getElementById('seconds').innerHTML = seconds;


        /*   console.log(days);
          console.log(hours);
          console.log(minutes);
          console.log(seconds); */
    } else {
        clearInterval(timerFunction);
        document.getElementById("timer").innerHTML = "The Countdown is Over!";
    }
}, 1000);

// console.log(countDownDate);