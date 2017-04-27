'use strict';

var algae_alphabet = new Alphabet(["A","B"]);
var algae_axiom = new Axiom("A");
var algae_rules_defined = function(Lstring) {
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
var algae_rules = new Rules(algae_rules_defined);
var algae_tree = new Tree(algae_alphabet, algae_axiom, algae_rules);


var cantor_alphabet = new Alphabet(["A","B"]);
var cantor_axiom = new Axiom("A");
var cantor_rules_defined = function(Lstring) {
	var newLString = "";

	for (var i = 0; i < Lstring.length; i++) {
		if (Lstring[i] == "A")
			newLString = newLString + "ABA";
		if (Lstring[i] == "B")
			newLString = newLString + "BBB";
	}

	return newLString;
}
var cantor_rules = new Rules(cantor_rules_defined);
var cantor_tree = new Tree(cantor_alphabet, cantor_axiom, cantor_rules);


var koch_alphabet = new Alphabet("F", "+", "-");
var koch_axiom = new Axiom("F");
var koch_rules_defined = function(Lstring) {
	var newLString = "";

	for (var i = 0; i < Lstring.length; i++) {
		if (Lstring[i] == "F")
			newLString = newLString + "F+F-F-F+F";
	}

	return newLString;
}
var koch_rules = new Rules(koch_rules_defined);
var koch_tree = new Tree(koch_alphabet, koch_axiom, koch_rules);

console.log(koch_tree.buildTree(2));