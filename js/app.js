
// set to check for DOM load before running
$(() => {

  //setup a variable as a function that will run the game.
  const memzy = {
    //
    // timer: () => {
    //   var timeleft = 20;
    //   var downloadTimer = setInterval(function(){
    //     document.getElementById('progressBar').value = 20 - --timeleft;
    //     if(timeleft <= 0)
    //       clearInterval(downloadTimer);
    //   },1000);
    // },



    //an array made up of 6 sets of 'pairs'
    symbols: ['Cat', 'Cat', 'Dog', 'Dog', 'Mouse', 'Mouse', 'Horse', 'Horse', 'Chicken', 'Chicken', 'Turkey', 'Turkey'],

    //empty array to check for game win once filled.
    totalMatches: [],



    //execution of games' functions.
    startGame: () => {
      memzy.timer();
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

      console.log('Symbols shuffled! - ' + memzy.symbols);
    },

    // define a function to designate symbols to respective clickable panels
    symbolDesignation: function() {
      $('.symbol').each(function(index) {
        $(this).attr('data-symbol-value', memzy.symbols[index]);
      });
    },

    // showAll: () => {
    //   if ($('div').hasClass('data-symbol-value')) {
    //     console.log('yep, has class.');
    //     $('body').animate({right: -700}, 2000);
    //   }
    //   // if ($('div').attr === 'data-symbol-value') {
    //   //   $('body').show(500);
    //   // }
    // },
    //
    //
    timer: () => {
      $('.starttime').on('click', () => {
        var timeleft = 20;
        var downloadTimer = setInterval(function(){
          document.getElementById('progressBar').value = 20 - --timeleft;
          if(timeleft <= 0)
            clearInterval(downloadTimer);
        });
      },1000);
    },

    showAll: () => {
      //Any danger of making this DRY-er?.....
      $('.clicky').on('click', () => {
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
        setTimeout(() => {
          $('.selected').each(function() {
            $(this).html('').removeClass('selected');
          });
        }, 5000);
      });
    },


    // make a function that when a tile is clicked it will add the class 's'
    clicky: () => {
      $('.symbol').on('click', function() {
        $(this).html('<p>' + $(this).data('symbolValue') + '</p>').addClass('selected');
        memzy.checkMatch();
      });
    },

    //create a function that will alert user of a win if they've matched 6 pairs
    checkWin: function() {
      if (memzy.totalMatches.length === 6) {
        alert('You Won!');
      }
    },

    checkLose: function() {
      // let lives = 5;
      if ($('.lives').text() === '0') {
        alert('You lost!');
      }
    },

    //check for match on selected 2 symbols
    checkMatch: function() {
      if ($('.selected').length === 2) {

        //compare the first selected symbol with the second selected symbol.
        if ($('.selected').first().data('symbolValue') === $('.selected').last().data('symbolValue')) {

          // add a tally into empy array called totalMatches
          memzy.totalMatches.push('i');

          const el = parseInt($('.matches').text());
          $('.matches').text(el+1);

          memzy.checkWin();
          //console log to check tally being added.
          console.log(memzy.totalMatches);



          $('.selected').each(function() {
            $(this).animate({
              opacity: 0.25
            });
          });

          //remove the div class 'se'
          $('.selected').each(function() {
            $(this).removeClass('selected');

          });

        } else {
          const mi = parseInt($('.lives').text());
          $('.lives').text(mi-1);
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

/*
//Pseudocode: All pseudocode will be written in this JS file prior to MVP developemnt.


'->' signifys pseudocode for HTML

'**' signifys pseudocode for CSS

'~' signifys pseudocode for JAVASCRIPT & JQUERY

'--' signifys non markup/code tasks

'@' signifys an expected behaviour on loading the page


//pseudocode as follows (work in progress..): Steps to be completed in sequence.



-> Setup link in the HTML for Jquery library

->Create the HTML structure to allow CSS & DOM manipulation for a grid layout (4x4)

-> a class assigned for row1, row2, row3, ro4

-> a class assigned for col1, col2, col3, col4

-> an ID for each indiviual grid item (12 total)

-> input ID names into each grid element for visual identification on page load


** Apply generic colour scheme to background, grid and grid items

** Establish alignment, padding and margin to have the page present symetrically and ready for initial js/jquery/dom manipulation.

** CSS to be left at this point until MVP is established.






-- generate 6 sets of generic, but distinctive symblols/icons to be applied to the tiles

-> add the 12 symbols/icon assets to the project folder and assign them at random to each of the 12 grid items.


@ on loading the page user should see and 4x4 grid with 6 pairs (12 items total) of symbols displaying in said grid.

@ After 10 second the grid symbols will disappear and an alert message "Let's test you memory..." should appear.

@ clicking any grid item should present the user with the symbol/icon currently assigned to that grid item in the HTML.


@ click a grid item will now present a symbol/icon for 1.5 seconds, then return to original (hidden) state.


@ click a grid item and it will persistent-present. click a second grid item and it will present for 1.5 seconds before hiding itself and the previously clicked grid item.

-> add 6 classes to the HTML to allow for identification of 'pairs' or 'matches'.


** apply MVP styling as per project plan pdf.



















*/
