
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');

  start.on('click', startCountdown);

  function startCountdown(){
    setInterval(function(){
      var secondsVal = +seconds.text(); //the plus sign makes this behave like a number
      var minutesVal = +minutes.text();
      if(secondsVal === 0 && minutesVal === 0){
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
      }
      if(secondsVal === 0){
        minutes.text(minutesVal -1);
        seconds.text(59);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal - 1));
        } else {
          seconds.text(secondsVal - 1);
        }

      }

    }, 1000);
  }
});
