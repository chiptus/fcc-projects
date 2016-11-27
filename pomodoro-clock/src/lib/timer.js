export default class Timer {
  constructor(countMinutes, countSeconds) {
    this.countMinutes = countMinutes;
    this.countSeconds = countSeconds;
    this.counting = false;
  }



  startClock() {
    this.counting = true;
    this.updateTimer();
    this.interval = setInterval(this.updateTimer.bind(this), 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
    this.counting = false;
  }

  updateTimer() {
    this.substractSecond();
  }

  addMinute() {
    this.changeTime(this.countMinutes + 1, this.countSeconds);
  }

  addSecond() {
    this.changeTime(this.countMinutes, this.countSeconds + 1);
  }

  substractMinute() {
    this.changeTime(this.countMinutes - 1, this.countSeconds);
  }

  substractSecond() {
    this.changeTime(this.countMinutes, this.countSeconds - 1);
  }

  changeTime(minutes, seconds) {
    this.countMinutes = minutes;
    this.countSeconds = seconds;
    if (this.countSeconds < 0) {
      this.countMinutes -= 1;
      this.countSeconds = 59;
    }
    if (this.countSeconds > 59) {
      this.countMinutes += 1;
      this.countSeconds = 0;
    }
    if (this.countMinutes < 0) {
      if (this.timeEnd) {
        this.timeEnd();
      }
      this.pause();
      return;
    }
    if (this.timeChanged) {
      this.timeChanged(this.countMinutes, this.countSeconds);
    }
  }

  calculcateEndTime() {
    const now = (new Date()).getTime();
    this.endtime = new Date(now + (this.countMinutes * 60000) + (this.countSeconds * 1000));
    return this.endtime;
  }

  getTimeRemaining() {
    const total = Date.parse(this.endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
