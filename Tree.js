'use strict';

class Tree {
	constructor(V,w,P) {
		this.V = V; // alphabet
		this.w = w; // axiom (start)
		this.P = P; // production rules
	}

	get axiom() {
		return this.w.axiom;
	}

	toString() {
		return "Alphabet == " + this.V.alphabet + "\n"
			+ "Axiom == " + this.w.axiom + "\n"
			+ "Rules == " + this.P.showRules();
	
	}

	buildTree(N) {
		return this.buildTreeRecusion(N, this.w.axiom);
	}

	buildTreeRecusion(N, treeString) { // N is the number of iterations
		if (N == 0)
			return treeString;
		return this.buildTreeRecusion(N-1,this.P.iterateString(treeString));
	}	
}