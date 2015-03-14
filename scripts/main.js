(function() {
  'use strict';

  $(document).ready(function() {

//domain/data

  var selectedEnemy;
  var selectedHero;

//interaction

  //start button
  $('.start-button').on('click', function(){
  	$('#enemy').addClass('hidden');
  	$('#hero').addClass('hidden');
	$('.start-button').addClass('hidden');
	$('.charSel').removeClass('hidden');
	$('.left-container').removeClass('hidden');
	$('.middle-container').removeClass('hidden');
	$('.right-container').removeClass('hidden');
	$('.init-fight').removeClass('hidden');
	console.log("hello");

  });
  $('.init-fight').on('click', playGame);
  $('.replay-button').on('click', replay);

  function replay() {
    location.reload();
  }

  function playGame() {}
    

//domain/data

  //vars

  var dmgAmt = "";


  var JCVD = function() {
    this.name = "jcvd";
    this.vit = 100;
    this.dmg = 0;
  };

  var astralAlpaca = function() {
    this.name = "Space Llama";
    this.vit = 100;
    this.dmg = 0;
  };

  // Jean Claude van Damme's constructor

  JCVD.prototype.attack1 = function(nemesis) {
    if (Math.random() < 0.75 ) {
	    dmgAmt = Math.floor(Math.random() * 20 + 1);
	    nemesis.vit = nemesis.vit - dmgAmt;
	    nemesis.dmg = dmgAmt;
	    console.log("You Karate Chopped " + nemesis.name + " in the throat!" + dmgAmt + " damage!");
    } else {
	  console.log("YOU MISSED! Prepare for a beatdown!");
	  nemesis.dmg = 0;
    }
  };

  JCVD.prototype.attack2 = function(nemesis) {
    if (Math.random() < 0.3 ) {
	    dmgAmt = Math.floor(Math.random() * 25 + 15);
	    nemesis.dmg = dmgAmt;
	    nemesis.vit = nemesis.vit - dmgAmt;
	    console.log("Double Impact!" + nemesis.name + " now has " + nemesis.health + " hitpoints remaining!");
    } else {
	    console.log("YOU MISSED!" + nemesis.name + "\'s Gonna be...angry!");
	    nemesis.damage = 0;
    }
  };

  // Space Llama's constructor

  astralAlpaca.prototype.attack = function(nemesis) {
    if (Math.random() < 0.5) {
      if(Math.random() < 0.75) {
        dmgAmt = Math.floor(Math.random() * 20 + 1);
        nemesis.dmg = dmgAmt;
        nemesis.vit = nemesis.vit - dmgAmt;
        console.log("Got suplexed by a friggin' Llama!" + dmgAmt + " damage!"+  nemesis.health + " HP left!");
      } else {
      if (Math.random() < 0.4) {
        dmgAmt = Math.floor(Math.random() * 25 + 10);
        nemesis.vit = nemesis.vit - dmgAmt;
        nemesis.dmg = dmgAmt;
        console.log("Space Llama ate your buttons, and your pants fall down!" + nemesis.vit + " HP remain!");
      } else {
        console.log("You skillfully kung fu your way out of a beating!");
        nemesis.dmg = 0;
       }
      }
     }
   };

  // Health Bars

//application state


}); 
})();
