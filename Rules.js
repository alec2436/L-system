'use strict';

class Rules {
	constructor(R) {
		this.R = R;
	}

	get rules() {
		return this.R;
	}

	showRules() {
		return this.R.toString();
	}

	iterateString(LString) {
		return this.R(LString);
	}
}