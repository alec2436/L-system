'use strict';

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

var LTree = new Tree(AB, AX, LRules);

// console.log(LTree.axiom);
// console.log(LTree.buildTree(4));

for (var i = 0; i < 5; i++)
	console.log(LTree.buildTree(i));