'use strict';

console.log("create L-system");

var AB = new Alphabet(["A","B"]);
var AX = new Axiom("A");


var LRulesDef = function(Lstring) {
	var newLString = "";
	for (var i = 0; i < Lstring.length; i++) {
		if (Lstring[i] == "A") {
			newLString = newLString + "AB";
		}
		if (Lstring[i] == "B") {
			newLString = newLString + "A";
		}
	}

	return newLString;
}

var LRules = new Rules(LRulesDef);

console.log(LRules.showRules());

