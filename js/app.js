
// set to check for DOM load before running
$(() => {






  // function countdown(){
  //   var count=30;
  //   var counter=setInterval(clock, 1000); //1000 will  run it every 1 second
  //   function clock()  {
  //     count=count-1;
  //     if (count <= 0){
  //       clearInterval(counter);
  //       //counter ended, do something here
  //       return;
  //     }

  //     //Do code for showing the number of seconds here
  //   }
  // }

  var myCounter = new Countdown({
    seconds: 60,  // number of seconds to count down
    onUpdateStatus: function(sec){
      $('#timer').fadeOut(100).fadeIn(100);
      console.log(sec);
      const mi = parseInt($('#timer').text());
      $('#timer').text(mi-1);

    }, // callback for each second
    onCounterEnd: function(){
      alert('Time\'s up! You loose, sucka!');
      location.reload(memzy);
    } // final action
  });

  //countdown function
  function Countdown(options) {
    var timer,
    instance = this,
    seconds = options.seconds || 10,
    updateStatus = options.onUpdateStatus || function () {},
    counterEnd = options.onCounterEnd || function () {};

    //stop from hitting minus figures
    function decrementCounter() {
      updateStatus(seconds);
      if (seconds === 0) {
        counterEnd();
        instance.stop();
      }
      seconds--;
    }

    this.start = function () {
      clearInterval(timer);
      timer = 0;
      seconds = options.seconds;
      timer = setInterval(decrementCounter, 1000);
    };

    this.stop = function () {
      clearInterval(timer);
    };
  }


  () => {
    $('.starttime').click(function() {
      memzy.timer();
    });
  };

  //setup game under variable 'memzy'.
  const memzy = {


    //an array made up of 9 sets of 'pairs'
    symbols: ['&#9832', '&#9832', '&#9790', '&#9790', '&#9776', '&#9776', '&#9731', '&#9731', '&#9733', '&#9733', '&#9873', '&#9873', '&#x2716', '&#x2716', '&#x265b', '&#x265b', '&#x2663', '&#x2663'],

    //empty array to check for game win once filled.
    totalMatches: [],

    //empty array to check for lives lost
    livesLost: [],

    //execution of games' functions.
    startGame: () => {
      memzy.shuffle();
      memzy.symbolDesignation();
      memzy.clicky();
      memzy.checkWin();
      memzy.showAll();
      memzy.checkLose();

    },

    //setup a means to shuffle the symbols.
    shuffle: () => {
      let randomizer = 0;
      let temp = 0;

      for (i = 1; i < memzy.symbols.length; i++) {
        randomizer = Math.floor(Math.random() * i);
        temp = memzy.symbols[i];
        memzy.symbols[i] = memzy.symbols[randomizer];
        memzy.symbols[randomizer] = temp;
      }
      // console.log('Symbols shuffled! - ' + memzy.symbols);
    },

    // define a function to designate symbols to respective clickable panels use jquery.
    symbolDesignation: function() {
      $('.symbol').each(function(index) {
        $(this).attr('data-symbol-value', memzy.symbols[index]);
      });
    },
    //function to display all tiles to user for 7 seconds ebfore hiding. use removal of class attributes.
    showAll: () => {
      //Any danger of making this DRY-er?.....
      $('.clicky').on('click', () => {
        $('#bg').animate({opacity: 0}, 6800, function() {
          $(this).css({'background-image': 'url(bkgrnd_blr.jpg)'}).animate({opacity: 1});
        });
        $('#symbol1').html('<p>' + $('#symbol1').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol2').html('<p>' + $('#symbol2').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol3').html('<p>' + $('#symbol3').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol4').html('<p>' + $('#symbol4').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol5').html('<p>' + $('#symbol5').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol6').html('<p>' + $('#symbol6').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol7').html('<p>' + $('#symbol7').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol8').html('<p>' + $('#symbol8').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol9').html('<p>' + $('#symbol9').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol10').html('<p>' + $('#symbol10').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol11').html('<p>' + $('#symbol11').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol12').html('<p>' + $('#symbol12').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol13').html('<p>' + $('#symbol13').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol14').html('<p>' + $('#symbol14').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol15').html('<p>' + $('#symbol15').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol16').html('<p>' + $('#symbol16').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol17').html('<p>' + $('#symbol17').data('symbolValue') + '</p>').addClass('selected');
        $('#symbol18').html('<p>' + $('#symbol18').data('symbolValue') + '</p>').addClass('selected');
        setTimeout(() => {
          $('.selected').each(function() {
            $(this).html('').removeClass('selected');
          });
        }, 7000);
        memzy.timer();
      });
    },

    // small countdown timer for user's tile-view at start of game.
    timer: () => {

      var timeleft = 700;
      var downloadTimer = setInterval(function(){
        document.getElementById('progressBar').value = 700 - --timeleft;
        if(timeleft === 0)clearInterval(downloadTimer);
        myCounter.start();
        // alert('hi');
      },10);
    },

    // make a function that when a tile is clicked it will add the class 'selected'
    clicky: () => {
      $('.symbol').on('click', function() {
        $(this).html('<p>' + $(this).data('symbolValue') + '</p>').addClass('selected');
        memzy.checkMatch();
      });
    },

    //create a function that will alert user of a win if they've matched 6 pairs. check array length for win criteria
    checkWin: function() {
      if (memzy.totalMatches.length === 9) {
        alert('You Won!');
        location.reload(memzy);
      }
    },

    //make a lose logic, check array for times failed.
    checkLose: function() {
      if (memzy.livesLost.length === 10) {
        alert('You Lost!');
        location.reload(memzy);

      }
    },

    //check for match on selected 2 symbols
    checkMatch: function() {
      if ($('.selected').length === 2) {

        //compare the first selected symbol with the second selected symbol.
        if ($('.selected').first().data('symbolValue') === $('.selected').last().data('symbolValue')) {

          // add a tally into empy array totalMatches
          memzy.totalMatches.push('i');
          var audio = new Audio('pop.wav');
          audio.play();

          //update the html to reflect matches
          const el = parseInt($('.matches').text());
          $('.matches').text(el+1);

          $('.matches').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

          memzy.checkWin();
          //console log to check tally being added.
          // console.log(memzy.totalMatches);
          $('.selected').each(function() {
            $(this).animate({
              opacity: 0.25
            });
          });

          //remove the div class 'selected'
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
        } else {
          const mi = parseInt($('.lives').text());
          $('.lives').text(mi-1);
          var audio2 = new Audio('fail.wav');
          audio2.play();

          $('.lives').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

          memzy.livesLost.push('j');
          // console.log(memzy.livesLost);

          memzy.checkLose();

          setTimeout(() => {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 600);
        }
      }
    }

  };
  memzy.startGame();

});
