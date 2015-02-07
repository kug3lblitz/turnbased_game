//vars

var dmgAmt = "";


var JCVD = function() {
  this.name = "jcvd";
  this.health = 100;
  this.dmg = 0;
};

var spaceLlama = function() {
  this.name = "Astral Alpaca";
  this.health = 100;
  this.dmg = 0;
};

JCVD.prototype.attack1 = function(nemesis) {
  if (Math.random() < 0.75 ) {
	  dmgAmt = Math.floor(Math.random() * 20 + 1);
	  nemesis.health = nemesis.health - dmgAmt;
	  nemesis.dmg = dmgAmt;
	  console.log("You Karate Chopped " + nemesis.name + " in the throat!" + dmgAmt + " damage!");
			  } else {
				 console.log("YOU MISSED! Prepare for a beatdown!");
				 nemesis.dmg = 0;
		}
	};
};


