(function() {
  'use strict';

  $(document).ready(function() {

  var selectedEnemy;
  var selectedHero;

  //start button
  $('.start-button').on('click', charSel);
  $('.init-fight').on('click', playGame);
  $('.replay-button').on('click', replay);

  function replay() {
    location.reload();
  }

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


  // add and remove functions

  function addElement() {

    var ni = document.getElementById('myDiv');
    var numi = document.getElementById('theValue');

    var num = (document.getElementById('theValue').value -1)+ 2;
      numi.value = num;

    var newdiv = document.createElement('div');

    var divIdName = 'my'+num+'Div';

      newdiv.setAttribute('id',divIdName);

      newdiv.innerHTML = 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement('+divIdName+')\'>Remove the div "'+divIdName+'"</a>';

      ni.appendChild(newdiv);

  }

  function removeElement(divNum) {
    var d = document.getElementById('myDiv');
    var olddiv = document.getElementById(divNum);
      d.removeChild(olddiv);

  }
 }} 
})();
