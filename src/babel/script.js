(function() {
  //timer
  let display = document.querySelector('.time'),anim, watch ,
  displayBreak = document.querySelector('.break-time'),watchBreak , animBreak
  
  // define function for setInterval
  function getSeconds(hour) {
    let min = hour.textContent.split(':')
    return parseInt(min[0], 10)* 60
  }
  // define function for setInterval
  function circularLoop(init, min, action) {
    let current = init;
    return function() {
      action(current);
      if (current - 1 === min) {
        current = min;
      } else if(current > 0){
        current--;
      }
    }
  }
  watch = () => {
    let seconds, minutes;
      anim = setInterval(circularLoop(getSeconds(display) , 0, function(currSecond) {
      //parseInt() return integer ex 110/ 60 = 1.83333 with parseInt it's 1
      //I'm using Math.floor, both do the same work
      minutes = parseInt(currSecond  / 60, 10);
      // seconds = 122s / 60 = 120 and remain 2
      seconds = parseInt(currSecond  % 60, 10);

      //print a 0 first if minuste is less than 10 minutes 
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;

      if (currSecond === 0) {
        clearInterval(anim)
        watchBreak()
      }
    }), 1000);
  }
  watchBreak = () => {
    let seconds, minutes;
      animBreak = setInterval(circularLoop(getSeconds(displayBreak) , 0, function(currSecond) {
      minutes = parseInt(currSecond  / 60, 10);
      seconds = parseInt(currSecond  % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (currSecond === 0) {
        clearInterval(animBreak)
      }
    }), 1000);
  }
  //END TIMER

  //Event + and -
  //
  let sessionPlus = document.querySelector('.session__plus'),
    sessionMinus = document.querySelector('.session__minus'),
    breakPlus = document.querySelector('.break__plus'),
    breakMinus = document.querySelector('.break__minus'),
    time = document.querySelector('.time'),
    breakTime = document.querySelector('.break-time'),
    play = document.querySelector('.play'),
    stop = document.querySelector('.icon-stop'),
    pause = document.querySelector('.pause')

  function previousMinus (e) {
    let prev= this.previousSibling,
      val = parseInt(prev.textContent, 10)
    if (val > 0) {
      prev.textContent--
      if (val === 1) {
        prev.classList.add('alert')
      }
    }
    if (!this.classList.contains('break__minus')) {
      time.textContent = prev.textContent + ':00'
      clearInterval(anim)
    } else{
      breakTime.textContent = prev.textContent + ':00'

    } 

    play.classList.add('show')
    play.classList.remove('hide')
    pause.classList.add('hide')
    pause.classList.remove('show')
    stop.classList.remove('show')
    stop.classList.add('hide')

    e.preventDefault();
  }
  function nextPlus(e) {
    let next = this.nextSibling
    let val = parseInt(next.textContent, 10)
    next.textContent++
    if (val === 0) {
      next.classList.remove('alert')
    }
    if (!this.classList.contains('break__plus')) {
      time.textContent = next.textContent + ':00'
      clearInterval(anim)
    } else{
      breakTime.textContent = next.textContent + ':00'
    } 
    play.classList.add('show')
    play.classList.remove('hide')
    pause.classList.add('hide')
    pause.classList.remove('show')
    stop.classList.remove('show')
    stop.classList.add('hide')
    e.preventDefault();
  }

  sessionMinus.addEventListener('click',previousMinus );
  sessionPlus.addEventListener('click', nextPlus);
  breakMinus.addEventListener('click',previousMinus );
  breakPlus.addEventListener('click', nextPlus);
  play.addEventListener('click', playPodomoro);
  pause.addEventListener('click', pausePodomoro);
  stop.addEventListener('click', stopPodomoro);

  function playPodomoro(e) {
    watch(display)
    play.classList.add('hide')
    play.classList.remove('show')
    pause.classList.add('show')
    pause.classList.remove('hide')
    stop.classList.remove('hide')
    stop.classList.add('show')
    stop.classList.remove('pause')
  }
  function pausePodomoro(e) {
    clearInterval(anim)
    play.classList.add('show')
    play.classList.remove('hide')
    pause.classList.add('hide')
    pause.classList.remove('show')
    stop.classList.add('pause')

  }
  function stopPodomoro(e) {
    clearInterval(anim)
    clearInterval(animBreak)
    play.classList.add('show')
    play.classList.remove('hide')
    pause.classList.add('hide')
    pause.classList.remove('show')
    stop.classList.remove('show')
    stop.classList.add('hide')
    let sessionTime = document.querySelector('.session__time ').innerHTML
    time.textContent = sessionTime  + ':00'
  }
  //SVG
  //transform second to perimetre
  //path(stroke-dasharray='472', stroke-dashoffset='0.00', \
  //1== 1s donc 472 sec = 7.8 minutes soit 472/60 pour avoir les minutes
  //min * 60 = seconds 
  //donc 10min * 60 on obtient le resutat en seconde et le diametre du 
  //perimetre
  let distancePerPoint = 1;
  let drawFPS          = 1000/10;
  let orig = document.querySelector('path'), length, timer;

  orig.addEventListener('mouseover',startDrawingPath,true);
  orig.addEventListener('mouseout', stopDrawingPath, true);

  function startDrawingPath(){
    length = 0;
    orig.style.stroke = '#f60';
    timer = setInterval(increaseLength, 1000 );
  }

  function increaseLength(){
    var pathLength = orig.getTotalLength();
    length += distancePerPoint;
    //length=0 and path lenght = stroke-dasharray soit 472
    orig.style.strokeDasharray = [length,pathLength].join(' ');
    console.log([length,pathLength].join(' '));
    if (length >= pathLength) clearInterval(timer);
  }

  function stopDrawingPath(){
    clearInterval(timer);
    orig.style.stroke = '';
    orig.style.strokeDasharray = '';
  }

}());//END

