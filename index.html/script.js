'use strict';

(function () {
  //timer
  var display = document.querySelector('.time'),
      anim = void 0,
      watch = void 0,
      displayBreak = document.querySelector('.break-time'),
      watchBreak = void 0,
      animBreak = void 0,
      audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  // define function for setInterval
  function getSeconds(hour) {
    var min = hour.textContent.split(':');
    return parseInt(min[0], 10) * 60;
  }
  // define function for setInterval
  function circularLoop(init, min, action) {
    var current = init;
    return function () {
      action(current);
      if (current - 1 === min) {
        current = min;
      } else if (current > 0) {
        current--;
      }
    };
  }
  watch = function watch() {
    var seconds = void 0,
        minutes = void 0;
    anim = setInterval(circularLoop(getSeconds(display), 0, function (currSecond) {
      //parseInt() return integer ex 110/ 60 = 1.83333 with parseInt it's 1
      //I'm using Math.floor, both do the same work
      minutes = parseInt(currSecond / 60, 10);
      // seconds = 122s / 60 = 120 and remain 2
      seconds = parseInt(currSecond % 60, 10);

      //time
      //20
      //console.log((currSecond) / (25 * 60)); //percentage
      //console.log(( (currSecond) / (25 * 60) * 472).toFixed() )
      //console.log(currSecond );

      //SVG
      //transform second to perimetre
      //path(stroke-dasharray='472', stroke-dashoffset='0.00', \
      //1== 1s donc 472 sec = 7.8 minutes soit 472/60 pour avoir les minutes
      //min * 60 = seconds 
      //donc 10min * 60 on obtient le resutat en seconde et le diametre du 
      //perimetre
      //let t = currSecond / (25 * 60) * 472
      //let distancePerPoint = 1
      //let orig = document.querySelector('#my-svg path'), length, timer;
      //let pathLength = orig.getTotalLength();

      //orig.style.stroke = '#000';
      //orig.style.strokeDasharray = t.toFixed();
      //console.log(t.toFixed());
      //console.log( pathLength  );

      //function increaseLength(){
      ////var pathLength = orig.getTotalLength();
      //length += distancePerPoint;
      ////length=0 and path lenght = stroke-dasharray soit 472
      //orig.style.strokeDasharray = [length,pathLength].join(' ');
      ////console.log([length,pathLength].join(' '));
      //if (length >= pathLength) 
      //clearInterval(timer);
      //}

      //sessionTime  

      //print a 0 first if minuste is less than 10 minutes 
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;

      if (currSecond === 0) {
        clearInterval(anim);
        watchBreak();
        audio.play();
      }
    }), 1000);
  };
  watchBreak = function watchBreak() {
    var seconds = void 0,
        minutes = void 0;
    animBreak = setInterval(circularLoop(getSeconds(displayBreak), 0, function (currSecond) {
      minutes = parseInt(currSecond / 60, 10);
      seconds = parseInt(currSecond % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (currSecond === 0) {
        clearInterval(animBreak);
        audio.play();
      }
    }), 1000);
  };
  //END TIMER

  //Event + and -
  //
  var sessionPlus = document.querySelector('.session__plus'),
      sessionMinus = document.querySelector('.session__minus'),
      breakPlus = document.querySelector('.break__plus'),
      breakMinus = document.querySelector('.break__minus'),
      time = document.querySelector('.time'),
      breakTime = document.querySelector('.break-time'),
      play = document.querySelector('.play'),
      stop = document.querySelector('.icon-stop'),
      pause = document.querySelector('.pause');

  function previousMinus(e) {
    var prev = this.previousSibling,
        val = parseInt(prev.textContent, 10);
    if (val > 0) {
      prev.textContent--;
      if (val === 1) {
        prev.classList.add('alert');
      }
    }
    if (!this.classList.contains('break__minus')) {
      time.textContent = prev.textContent + ':00';
      clearInterval(anim);
    } else {
      breakTime.textContent = prev.textContent + ':00';
    }

    play.classList.add('show');
    play.classList.remove('hide');
    pause.classList.add('hide');
    pause.classList.remove('show');
    stop.classList.remove('show');
    stop.classList.add('hide');

    e.preventDefault();
  }
  function nextPlus(e) {
    var next = this.nextSibling;
    var val = parseInt(next.textContent, 10);
    next.textContent++;
    if (val === 0) {
      next.classList.remove('alert');
    }
    if (!this.classList.contains('break__plus')) {
      time.textContent = next.textContent + ':00';
      clearInterval(anim);
    } else {
      breakTime.textContent = next.textContent + ':00';
    }
    play.classList.add('show');
    play.classList.remove('hide');
    pause.classList.add('hide');
    pause.classList.remove('show');
    stop.classList.remove('show');
    stop.classList.add('hide');
    e.preventDefault();
  }

  sessionMinus.addEventListener('click', previousMinus);
  sessionPlus.addEventListener('click', nextPlus);
  breakMinus.addEventListener('click', previousMinus);
  breakPlus.addEventListener('click', nextPlus);
  play.addEventListener('click', playPodomoro);
  pause.addEventListener('click', pausePodomoro);
  stop.addEventListener('click', stopPodomoro);

  function playPodomoro(e) {
    watch(display);
    play.classList.add('hide');
    play.classList.remove('show');
    pause.classList.add('show');
    pause.classList.remove('hide');
    stop.classList.remove('hide');
    stop.classList.add('show');
    stop.classList.remove('pause');
  }
  function pausePodomoro(e) {
    clearInterval(anim);
    play.classList.add('show');
    play.classList.remove('hide');
    pause.classList.add('hide');
    pause.classList.remove('show');
    stop.classList.add('pause');
  }
  function stopPodomoro(e) {
    clearInterval(anim);
    clearInterval(animBreak);
    play.classList.add('show');
    play.classList.remove('hide');
    pause.classList.add('hide');
    pause.classList.remove('show');
    stop.classList.remove('show');
    stop.classList.add('hide');
    var sessionTime = document.querySelector('.session__time ').innerHTML;
    time.textContent = sessionTime + ':00';
  }
})(); //END
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJkaXNwbGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYW5pbSIsIndhdGNoIiwiZGlzcGxheUJyZWFrIiwid2F0Y2hCcmVhayIsImFuaW1CcmVhayIsImF1ZGlvIiwiQXVkaW8iLCJnZXRTZWNvbmRzIiwiaG91ciIsIm1pbiIsInRleHRDb250ZW50Iiwic3BsaXQiLCJwYXJzZUludCIsImNpcmN1bGFyTG9vcCIsImluaXQiLCJhY3Rpb24iLCJjdXJyZW50Iiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJzZXRJbnRlcnZhbCIsImN1cnJTZWNvbmQiLCJjbGVhckludGVydmFsIiwicGxheSIsInNlc3Npb25QbHVzIiwic2Vzc2lvbk1pbnVzIiwiYnJlYWtQbHVzIiwiYnJlYWtNaW51cyIsInRpbWUiLCJicmVha1RpbWUiLCJzdG9wIiwicGF1c2UiLCJwcmV2aW91c01pbnVzIiwiZSIsInByZXYiLCJwcmV2aW91c1NpYmxpbmciLCJ2YWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwibmV4dFBsdXMiLCJuZXh0IiwibmV4dFNpYmxpbmciLCJhZGRFdmVudExpc3RlbmVyIiwicGxheVBvZG9tb3JvIiwicGF1c2VQb2RvbW9ybyIsInN0b3BQb2RvbW9ybyIsInNlc3Npb25UaW1lIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVc7QUFDVjtBQUNBLE1BQUlBLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUFBLE1BQThDQyxhQUE5QztBQUFBLE1BQW9EQyxjQUFwRDtBQUFBLE1BQ0FDLGVBQWVKLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FEZjtBQUFBLE1BQ3FESSxtQkFEckQ7QUFBQSxNQUNrRUMsa0JBRGxFO0FBQUEsTUFFQUMsUUFBUSxJQUFJQyxLQUFKLENBQVUsdURBQVYsQ0FGUjtBQUdBO0FBQ0EsV0FBU0MsVUFBVCxD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O0FBQ0FQLFVBQU1NLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCLE1BQXZCO0FBQ0FWLFNBQUtPLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixNQUF0QjtBQUNBVixTQUFLTyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQSxRQUFJVyxjQUFjbEQsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENrRCxTQUE1RDtBQUNBdEIsU0FBS2pCLFdBQUwsR0FBbUJzQyxjQUFlLEtBQWxDO0FBQ0Q7QUFFRixDQW5NQSxHQUFELEMsQ0FtTUsiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAvL3RpbWVyXG4gIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKSxhbmltLCB3YXRjaCAsXG4gIGRpc3BsYXlCcmVhayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmVhay10aW1lJyksd2F0Y2hCcmVhayAsIGFuaW1CcmVhayxcbiAgYXVkaW8gPSBuZXcgQXVkaW8oJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9mcmVlY29kZWNhbXAvc2ltb25Tb3VuZDEubXAzJyk7XG4gIC8vIGRlZmluZSBmdW5jdGlvbiBmb3Igc2V0SW50ZXJ2YWxcbiAgZnVuY3Rpb24gZ2V0U2Vjb25kcyhob3VyKSB7XG4gICAgbGV0IG1pbiA9IGhvdXIudGV4dENvbnRlbnQuc3BsaXQoJzonKVxuICAgIHJldHVybiBwYXJzZUludChtaW5bMF0sIDEwKSogNjBcbiAgfVxuICAvLyBkZWZpbmUgZnVuY3Rpb24gZm9yIHNldEludGVydmFsXG4gIGZ1bmN0aW9uIGNpcmN1bGFyTG9vcChpbml0LCBtaW4sIGFjdGlvbikge1xuICAgIGxldCBjdXJyZW50ID0gaW5pdDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBhY3Rpb24oY3VycmVudCk7XG4gICAgICBpZiAoY3VycmVudCAtIDEgPT09IG1pbikge1xuICAgICAgICBjdXJyZW50ID0gbWluO1xuICAgICAgfSBlbHNlIGlmKGN1cnJlbnQgPiAwKXtcbiAgICAgICAgY3VycmVudC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB3YXRjaCA9ICgpID0+IHtcbiAgICBsZXQgc2Vjb25kcywgbWludXRlcztcbiAgICAgIGFuaW0gPSBzZXRJbnRlcnZhbChjaXJjdWxhckxvb3AoZ2V0U2Vjb25kcyhkaXNwbGF5KSAsIDAsIGZ1bmN0aW9uKGN1cnJTZWNvbmQpIHtcbiAgICAgIC8vcGFyc2VJbnQoKSByZXR1cm4gaW50ZWdlciBleCAxMTAvIDYwID0gMS44MzMzMyB3aXRoIHBhcnNlSW50IGl0J3MgMVxuICAgICAgLy9JJ20gdXNpbmcgTWF0aC5mbG9vciwgYm90aCBkbyB0aGUgc2FtZSB3b3JrXG4gICAgICBtaW51dGVzID0gcGFyc2VJbnQoY3VyclNlY29uZCAgLyA2MCwgMTApO1xuICAgICAgLy8gc2Vjb25kcyA9IDEyMnMgLyA2MCA9IDEyMCBhbmQgcmVtYWluIDJcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludChjdXJyU2Vjb25kICAlIDYwLCAxMCk7XG5cblxuICAgICAgLy90aW1lXG4gICAgICAgIC8vMjBcbiAgICAgICAgLy9jb25zb2xlLmxvZygoY3VyclNlY29uZCkgLyAoMjUgKiA2MCkpOyAvL3BlcmNlbnRhZ2VcbiAgICAgICAgLy9jb25zb2xlLmxvZygoIChjdXJyU2Vjb25kKSAvICgyNSAqIDYwKSAqIDQ3MikudG9GaXhlZCgpIClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyU2Vjb25kICk7XG5cbiAgICAgICAgLy9TVkdcbiAgICAgICAgLy90cmFuc2Zvcm0gc2Vjb25kIHRvIHBlcmltZXRyZVxuICAgICAgICAvL3BhdGgoc3Ryb2tlLWRhc2hhcnJheT0nNDcyJywgc3Ryb2tlLWRhc2hvZmZzZXQ9JzAuMDAnLCBcXFxuICAgICAgICAvLzE9PSAxcyBkb25jIDQ3MiBzZWMgPSA3LjggbWludXRlcyBzb2l0IDQ3Mi82MCBwb3VyIGF2b2lyIGxlcyBtaW51dGVzXG4gICAgICAgIC8vbWluICogNjAgPSBzZWNvbmRzIFxuICAgICAgICAvL2RvbmMgMTBtaW4gKiA2MCBvbiBvYnRpZW50IGxlIHJlc3V0YXQgZW4gc2Vjb25kZSBldCBsZSBkaWFtZXRyZSBkdSBcbiAgICAgICAgLy9wZXJpbWV0cmVcbiAgICAgICAgLy9sZXQgdCA9IGN1cnJTZWNvbmQgLyAoMjUgKiA2MCkgKiA0NzJcbiAgICAgICAgLy9sZXQgZGlzdGFuY2VQZXJQb2ludCA9IDFcbiAgICAgICAgLy9sZXQgb3JpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1zdmcgcGF0aCcpLCBsZW5ndGgsIHRpbWVyO1xuICAgICAgICAvL2xldCBwYXRoTGVuZ3RoID0gb3JpZy5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICAgIC8vb3JpZy5zdHlsZS5zdHJva2UgPSAnIzAwMCc7XG4gICAgICAgIC8vb3JpZy5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSB0LnRvRml4ZWQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0LnRvRml4ZWQoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coIHBhdGhMZW5ndGggICk7XG5cbiAgICAgICAgLy9mdW5jdGlvbiBpbmNyZWFzZUxlbmd0aCgpe1xuICAgICAgICAgIC8vLy92YXIgcGF0aExlbmd0aCA9IG9yaWcuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICAgICAgICAvL2xlbmd0aCArPSBkaXN0YW5jZVBlclBvaW50O1xuICAgICAgICAgIC8vLy9sZW5ndGg9MCBhbmQgcGF0aCBsZW5naHQgPSBzdHJva2UtZGFzaGFycmF5IHNvaXQgNDcyXG4gICAgICAgICAgLy9vcmlnLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IFtsZW5ndGgscGF0aExlbmd0aF0uam9pbignICcpO1xuICAgICAgICAgIC8vLy9jb25zb2xlLmxvZyhbbGVuZ3RoLHBhdGhMZW5ndGhdLmpvaW4oJyAnKSk7XG4gICAgICAgICAgLy9pZiAobGVuZ3RoID49IHBhdGhMZW5ndGgpIFxuICAgICAgICAgICAgLy9jbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgLy99XG5cbiAgICAgIC8vc2Vzc2lvblRpbWUgIFxuXG4gICAgICAvL3ByaW50IGEgMCBmaXJzdCBpZiBtaW51c3RlIGlzIGxlc3MgdGhhbiAxMCBtaW51dGVzIFxuICAgICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcbiAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xuXG4gICAgICBpZiAoY3VyclNlY29uZCA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGFuaW0pXG4gICAgICAgIHdhdGNoQnJlYWsoKVxuICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICB9XG4gICAgfSksIDEwMDApO1xuICB9XG4gIHdhdGNoQnJlYWsgPSAoKSA9PiB7XG4gICAgbGV0IHNlY29uZHMsIG1pbnV0ZXM7XG4gICAgICBhbmltQnJlYWsgPSBzZXRJbnRlcnZhbChjaXJjdWxhckxvb3AoZ2V0U2Vjb25kcyhkaXNwbGF5QnJlYWspICwgMCwgZnVuY3Rpb24oY3VyclNlY29uZCkge1xuICAgICAgbWludXRlcyA9IHBhcnNlSW50KGN1cnJTZWNvbmQgIC8gNjAsIDEwKTtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludChjdXJyU2Vjb25kICAlIDYwLCAxMCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xuICAgICAgZGlzcGxheS50ZXh0Q29udGVudCA9IG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XG4gICAgICBpZiAoY3VyclNlY29uZCA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGFuaW1CcmVhaylcbiAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgfVxuICAgIH0pLCAxMDAwKTtcbiAgfVxuICAvL0VORCBUSU1FUlxuXG4gIC8vRXZlbnQgKyBhbmQgLVxuICAvL1xuICBsZXQgc2Vzc2lvblBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vzc2lvbl9fcGx1cycpLFxuICAgIHNlc3Npb25NaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXNzaW9uX19taW51cycpLFxuICAgIGJyZWFrUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmVha19fcGx1cycpLFxuICAgIGJyZWFrTWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJlYWtfX21pbnVzJyksXG4gICAgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyksXG4gICAgYnJlYWtUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyZWFrLXRpbWUnKSxcbiAgICBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKSxcbiAgICBzdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tc3RvcCcpLFxuICAgIHBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlJylcblxuICBmdW5jdGlvbiBwcmV2aW91c01pbnVzIChlKSB7XG4gICAgbGV0IHByZXY9IHRoaXMucHJldmlvdXNTaWJsaW5nLFxuICAgICAgdmFsID0gcGFyc2VJbnQocHJldi50ZXh0Q29udGVudCwgMTApXG4gICAgaWYgKHZhbCA+IDApIHtcbiAgICAgIHByZXYudGV4dENvbnRlbnQtLVxuICAgICAgaWYgKHZhbCA9PT0gMSkge1xuICAgICAgICBwcmV2LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYnJlYWtfX21pbnVzJykpIHtcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBwcmV2LnRleHRDb250ZW50ICsgJzowMCdcbiAgICAgIGNsZWFySW50ZXJ2YWwoYW5pbSlcbiAgICB9IGVsc2V7XG4gICAgICBicmVha1RpbWUudGV4dENvbnRlbnQgPSBwcmV2LnRleHRDb250ZW50ICsgJzowMCdcblxuICAgIH0gXG5cbiAgICBwbGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIHBsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgcGF1c2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgcGF1c2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgc3RvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgICBzdG9wLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGZ1bmN0aW9uIG5leHRQbHVzKGUpIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMubmV4dFNpYmxpbmdcbiAgICBsZXQgdmFsID0gcGFyc2VJbnQobmV4dC50ZXh0Q29udGVudCwgMTApXG4gICAgbmV4dC50ZXh0Q29udGVudCsrXG4gICAgaWYgKHZhbCA9PT0gMCkge1xuICAgICAgbmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdhbGVydCcpXG4gICAgfVxuICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2JyZWFrX19wbHVzJykpIHtcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBuZXh0LnRleHRDb250ZW50ICsgJzowMCdcbiAgICAgIGNsZWFySW50ZXJ2YWwoYW5pbSlcbiAgICB9IGVsc2V7XG4gICAgICBicmVha1RpbWUudGV4dENvbnRlbnQgPSBuZXh0LnRleHRDb250ZW50ICsgJzowMCdcbiAgICB9IFxuICAgIHBsYXkuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICBwYXVzZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBwYXVzZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgICBzdG9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgIHN0b3AuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2Vzc2lvbk1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwcmV2aW91c01pbnVzICk7XG4gIHNlc3Npb25QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFBsdXMpO1xuICBicmVha01pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwcmV2aW91c01pbnVzICk7XG4gIGJyZWFrUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRQbHVzKTtcbiAgcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlQb2RvbW9ybyk7XG4gIHBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGF1c2VQb2RvbW9ybyk7XG4gIHN0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUG9kb21vcm8pO1xuXG4gIGZ1bmN0aW9uIHBsYXlQb2RvbW9ybyhlKSB7XG4gICAgd2F0Y2goZGlzcGxheSlcbiAgICBwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIHBsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgcGF1c2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgcGF1c2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgc3RvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICBzdG9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIHN0b3AuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2UnKVxuICB9XG4gIGZ1bmN0aW9uIHBhdXNlUG9kb21vcm8oZSkge1xuICAgIGNsZWFySW50ZXJ2YWwoYW5pbSlcbiAgICBwbGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIHBsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgcGF1c2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgcGF1c2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgc3RvcC5jbGFzc0xpc3QuYWRkKCdwYXVzZScpXG5cbiAgfVxuICBmdW5jdGlvbiBzdG9wUG9kb21vcm8oZSkge1xuICAgIGNsZWFySW50ZXJ2YWwoYW5pbSlcbiAgICBjbGVhckludGVydmFsKGFuaW1CcmVhaylcbiAgICBwbGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIHBsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgcGF1c2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgcGF1c2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgc3RvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgICBzdG9wLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIGxldCBzZXNzaW9uVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXNzaW9uX190aW1lICcpLmlubmVySFRNTFxuICAgIHRpbWUudGV4dENvbnRlbnQgPSBzZXNzaW9uVGltZSAgKyAnOjAwJ1xuICB9XG5cbn0oKSk7Ly9FTkRcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
