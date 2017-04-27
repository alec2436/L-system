'use strict';

class Alphabet {
	constructor(V) {
		this.V = V;
	}

	get alphabet() {
		return this.V;
	}

	get length() {
		return this.V.length;
	}

	showLength() {
		return this.V.length;
	}
}