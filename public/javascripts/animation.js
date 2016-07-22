$(function(){

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //==================================
  //this animation is a combination of
  //vanilla JS, Jquery, and Velocity.
  //One way of controlling animation
  //timing and advance form of time
  //handling. Not practical.
  //consider this an anti-pattern
  //demonstration.
  //==================================
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  window.setTimeout(function(){
    //3000ms total animation time v, chained example, notice no semicolon at the end
    $('#animate')
      .velocity({color: '#3e32b1'}, 1500)
      .velocity({color: '#303f20'}, 1500);
    //takes place after the above animation^, total time of 1500ms
    $('#animate')
      .velocity({margin: 0},1500);
    //read the comments from bottom to top to understand how this animation works
    window.setTimeout(function(){
      $('#animate').css({textAlign: 'center'});

      window.setTimeout(function(){
        $('#animate').css({textAlign: 'right'});
        //1. this takes place once the 1750ms timer reaches 0.
        //2. this is instant
        //3. if there were more code after this instant change that would take place once the 5000ms timer reached 0
      },5000);
      //after the 5000ms delay, this delay countdown starts, and the inner css change happens instantly on start of countdown.
    },1750);
    //this delays the initial start of the animation
  }, 5000);
  console.log('hello from the other side');
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //==================================
  //end of anti-pattern demonstration.
  //==================================
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //==================================
  // onClick animation!
  //==================================
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var limiter = 0;
  var finalLimiter = 0;
  $('#animate-btn').on('click', function(){
    limiter++;
    $('.animateTxt').css({fontSize: '+=3em'});
    if (limiter > 6) {
      alert('watch it, you reached your boundries.');
      $('.animateTxt').css({fontSize: '1em'});
      limiter = 0;
      $('.animateTxt')
      .velocity({translateY: '+=50px'}, 500)
      .velocity({rotateX: '+=360'}, 1000);
      finalLimiter++;
      if(finalLimiter == 3){
        //returns to original position
        $('.animateTxt')
        .velocity({translateY: '0px'}, 2000);
        finalLimiter = 0;
      }
    }
  })
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //==================================
  //end of onClick animation!
  //==================================
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //==================================
  //Gears looping nicely.
  //==================================
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //without function
  $('.gearRight').velocity({  rotateZ: "+=360" }, { duration: 5000, easing: "linear", loop: true});

  //with function
  function loopMeLeft () {
    $('.gearLeft').velocity({  rotateZ: "-=360" }, { duration: 5000, easing: "linear", complete: loopMeLeft});
  }
  loopMeLeft();
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //==================================
  //end of nice gear's loop. ):
  //==================================
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
});
