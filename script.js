function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Asia/Shanghai' };
    const beijingTime = now.toLocaleString('en-US', options);

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();

    const hourDeg = (hours + minutes / 60) * 360 / 12;
    const minuteDeg = (minutes + seconds / 60) * 360 / 60;
    const secondDeg = (seconds / 60) * 360;

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    dateElement.textContent = `${month} ${day}, ${year}`;
    timeElement.textContent = beijingTime;
}

setInterval(updateClock, 1000);
updateClock();
