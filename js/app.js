/*
//Pseudocode: All pseudocode will be written in this JS file prior to MVP developemnt.


'->' signifys pseudocode for HTML

'**' signifys pseudocode for CSS

'~' signifys pseudocode for JAVASCRIPT & JQUERY

'--' signifys non markup/code tasks

'@' signifys an expected behaviour on loading the page


//pseudocode as follows (work in progress..): Steps to be completed in sequence.
*/



$(() => {
  const game = {
    symbols: [1,1,2,2,3,3,4,4,5,5,6,6],
    init: () => {
      game.shuffle();
    },
    shuffle: () => {
      let random = 0;
      let temp = 0;
      for(i= 1; i < game.symbols.length; i++){
        random = Math.round(Math.random() * i);
        console.log(random);

      }
    },
    clickHandlers: () =>{

    }
  };
  game.init();
});
//
//   console.log('working');
//
//   const playerIcons = [];
//   const



/*


-> Setup link in the HTML for Jquery library

->Create the HTML structure to allow CSS & DOM manipulation for a grid layout (4x4)

-> a class assigned for row1, row2, row3, ro4

-> a class assigned for col1, col2, col3, col4

-> an ID for each indiviual grid item (12 total)

-> input ID names into each grid element for visual identification on page load


** Apply generic colour scheme to background, grid and grid items

** Establish alignment, padding and margin to have the page present symetrically and ready for initial js/jquery/dom manipulation.

** CSS to be left at this point until MVP is established.


~ Setup and test listener to check for DOM load

~ setup global variables and tie them to their HTML counterparts

~ setup code to have all 12 grid items to 'show' on page load as default

~ wait 10 seconds before hiding each grid item's resepctive symbols

~ setup alert for player "Let's test your memory! Click on 2 items to reveal them. Once you guess 6 pairs correctly, you win!"

~ setup click listeners for grid objects. clicking a specific grid item should return the grid item's ID in the cosole log.

-- generate 6 sets of generic, but distinctive symblols/icons to be applied to the tiles

-> add the 12 symbols/icon assets to the project folder and assign them at random to each of the 12 grid items.

~ swap out the console.log "ID of grid item" with jquery hide/display of grid item symbols/icons

@ on loading the page user should see and 4x4 grid with 6 pairs (12 items total) of symbols displaying in said grid.

@ After 10 second the grid symbols will disappear and an alert message "Let's test you memory..." should appear.

@ clicking any grid item should present the user with the symbol/icon currently assigned to that grid item in the HTML.

~ setup logic for each grid item to hide itself 1.5 seconds after initial click of grid item

@ click a grid item will now present a symbol/icon for 1.5 seconds, then return to original (hidden) state.

~ setup logic to allow a 2nd grid items to be clicked before initiating the 1.5second wait before hiding both clicked tiles.

@ click a grid item and it will persistent-present. click a second grid item and it will present for 1.5 seconds before hiding itself and the previously clicked grid item.

-> add 6 classes to the HTML to allow for identification of 'pairs' or 'matches'.

~ setup logic to check if both items presenting are a match (ie do they have the same class name), if true, then persistent-present (do not trigger 1.5sec timer and do not toggle to hide state)

~ apply logic to each of the other 5 sets

~ setup win conditions to check if all 6 matches are 'true' if so, user presented with an alert "you did it, nice memory!"

** apply MVP styling as per project plan pdf.



















*/
