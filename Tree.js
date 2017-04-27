'use strict';

class Tree {
	constructor(V,w,P) {
		this.V = V; // alphabet
		this.w = w; // axiom (start)
		this.P = P; // production rules
	}

	stringLSystem() {
		return "Alphabet == " + this.V + "\n"
			+ "Axiom == " + this.w + "\n"
			+ "Rules == " + this.P;
	}
}