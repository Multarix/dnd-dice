/**
 * A very simple module that contains classes for standard dice rolls and coin flips.
 *
 * @remarks
 * The module contains the following classes:
 * - Die
 * - D4 (Extends Die)
 * - D6 (Extends Die)
 * - D8 (Extends Die)
 * - D10 (Extends Die)
 * - D12 (Extends Die)
 * - D20 (Extends Die)
 * - D100 (Extends Die)
 * - Coin
 *
 * @packageDocumentation
 */


/**
 * Represents a multi-faced die.\
 * Generates a random number from 1 to the provided number.
 * ```js
 * const d = new Die(15);
 * console.log(d.value); // 3
 * console.log(d.faces); // 15
 * ```
 */
export default class Die {
	private numberOffaces: number = 4;
	private rolledValue: number = 1;

	constructor(faces?: number) {
		if(faces) this.setFaces = faces;
		this.rolledValue = this.numberGenerator(1, this.numberOffaces);
	}

	/**
	 * Generates a random number between the minimum and maximum numbers.
	 */
	private numberGenerator(min: number, max: number): number {
		if(min >= max) return min;

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	/**
	 * Sets the number of faces on the die.\
	 * Re-rolls the die and sets the value to a random number from 1 to the new number of faces on the die.
	 *
	 * ```js
	 * const d = new Die(15);
	 * console.log(d.faces); // 15
	 * console.log(d.value); // 3
	 * d.setFaces = 20;
	 * console.log(d.faces); // 20
	 * console.log(d.value); // 12
	 * ```
	 */
	protected set setFaces(numfaces: number) {
		if(typeof numfaces !== "number") throw new TypeError("The number of faces must be a number.");
		if(numfaces <= 1) throw new RangeError("The number of faces must be greater than 1.");
		this.numberOffaces = numfaces;
		this.roll(); // Roll the die again as we changed the number of die faces
	}
	
	/**
	 * Re-rolls the die and sets the value to a random number between 1 and the number of faces on the die.
	 * ```js
	 * const d = new Die(15);
	 * console.log(d.value); // 3
	 * d.roll();
	 * console.log(d.value); // 12
	 * ```
	 */
	roll(): number {
		this.rolledValue = this.numberGenerator(1, this.numberOffaces);
		return this.rolledValue;
	}
	
	/**
	 * The current value of the die.
	 */
	get getValue() { // Getter so the value can't be changed
		return this.rolledValue;
	}
	
	/**
	 * The number of faces on the die.
	 */
	get getFaces() { // Getter so the value can't be changed
		return this.numberOffaces;
	}
}


/**
 * Represents a standard 4 sided die.\
 * Generates a random number from 1 to 4.
 * ```js
 * const d = new D4();
 * console.log(d.value); // 2
 * console.log(d.faces); // 6
 * ```
 */
export class D4 extends Die {
	constructor() {
		super(4)
	}
}

/**
 * Represents a standard 6 sided die.\
 * Generates a random number from 1 to 6.
 * ```js
 * const d = new D6();
 * console.log(d.value); // 4
 * console.log(d.faces); // 6
 * ```
 */
export class D6 extends Die {
	constructor() {
		super(6)
	}
}

/**
 * Represents a standard 8 sided die.\
 * Generates a random number from 1 to 8.
 * ```js
 * const d = new D8();
 * console.log(d.value); // 6
 * console.log(d.faces); // 8
 * ```
 */
export class D8 extends Die {
	constructor() {
		super(8)
	}
}

/**
 * Represents a standard 10 sided die.\
 * Generates a random number from 1 to 10.
 * ```js
 * const d = new D10();
 * console.log(d.value); // 4
 * console.log(d.faces); // 10
 * ```
 */
export class D10 extends Die {
	constructor() {
		super(10)
	}
}

/**
 * Represents a standard 12 sided die.\
 * Generates a random number from 1 to 12.
 * ```js
 * const d = new D12();
 * console.log(d.value); // 6
 * console.log(d.faces); // 12
 * ```
 */
export class D12 extends Die {
	constructor() {
		super(12)
	}
}

/**
 * Represents a standard 20 sided die.\
 * Generates a random number from 1 to 20.
 * ```js
 * const d = new D20();
 * console.log(d.value); // 6
 * console.log(d.faces); // 20
 * ```
 */
export class D20 extends Die {
	constructor() {
		super(20)
	}
}

/**
 * Represents a standard 100 sided die.\
 * Generates a random number from 1 to 100.
 * ```js
 * const d = new D100();
 * console.log(d.value); // 55
 * console.log(d.faces); // 100
 * ```
 */
export class D100 extends Die {
	constructor() {
		super(100)
	}
}

/**
 * Represents a coin.\
 * Has an equal chance of heads or tails being selected each time it is flipped.
 * ```js
 * const c = new Coin();
 * console.log(c.getResult); // Heads
 * c.flip();
 * console.log(c.getResult); // Tails
 * ```
 */
type CoinResult = "heads" | "tails";
export class Coin {
	private value: CoinResult = "heads";

	constructor() {
		this.flip();
	}

	flip(): CoinResult {
		const value = Math.floor(Math.random() * 2);
		this.value = (value === 0) ? "heads" : "tails";
		return this.value;
	}

	get getResult(): CoinResult {
		return this.value;
	}
}