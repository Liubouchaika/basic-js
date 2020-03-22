const LETTER_A_CODE = 65;
const LETTER_Z_CODE = 90;

let ALPHABET = [];
for (let i = LETTER_A_CODE; i <= LETTER_Z_CODE; i++) {
	ALPHABET.push(String.fromCharCode(i));
}


class VigenereCipheringMachine {
	constructor(reverse) {
		this.reverse = reverse;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Missing required parameter');
		}

		let m = message.toUpperCase().split('');
		let k = key.toUpperCase().split('');

		let result = [];
		let j = 0;

		for (let i = 0; i < m.length; i++) {
			if (ALPHABET.indexOf(m[i]) === -1) {
				result.push(m[i]);
				continue;
			}

			let sum = ALPHABET.indexOf(m[i]) + ALPHABET.indexOf(k[j]);
			let finIndex = -1;

			if (ALPHABET.length - 1 - sum < 0) {
				finIndex = Math.abs(ALPHABET.length - 1 - sum) - 1;
			} else {
				finIndex = sum;
			}

			result.push(ALPHABET[finIndex]);

			j++;
			if (j === k.length) {
				j = 0;
			}
		}

		return !this.reverse ? result.reverse().join('') : result.join('');
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error('Missing required parameter');
		}

		let m = message.toUpperCase().split('');
		let k = key.toUpperCase().split('');

		let result = [];
		let j = 0;

		for (let i = 0; i < m.length; i++) {
			if(ALPHABET.indexOf(m[i]) === -1) {
				result.push(m[i]);
				continue;
			}

			let mI = ALPHABET.indexOf(m[i]);
			let kI = ALPHABET.indexOf(k[j]);

			let finIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
			if(finIndex < 0) {
				finIndex = ALPHABET.length + finIndex;
			}

			result.push(ALPHABET[finIndex]);

			j++;
			if (j === k.length) j = 0;
		}

		return (this.reverse === false) ? result.reverse().join('') : result.join('');
	}
}

module.exports = VigenereCipheringMachine;