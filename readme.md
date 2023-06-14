[![NPM](https://nodei.co/npm/dnd-dice.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dnd-dice/)

A simple collection of classes for quickly creating and using standard dice rolls and even coin flips.

```js
import { Die, Coin } from 'dnd-dice';

const d = new Die(50);
console.log(d.getValue()); // 1-50

const c = new Coin();
console.log(c.getResult()); // Heads or Tails
```

# All available classes:

- Coin
- Die
- D4 (Extends Die)
- D6 (Extends Die)
- D8 (Extends Die)
- D10 (Extends Die)
- D12 (Extends Die)
- D20 (Extends Die)
- D100 (Extends Die)

<hr>

# Coin Class
## Coin#flip()<br>
Takes no arguments, and returns either "heads" or "tails".<br>
Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Coin#getResult
A getter that returns the result of the latest coin flip.<br>
Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

# Die Classes
All the die class extend from this, but don't actually add anything to it.<br>
They simply serve as a quick way to create a die of a specific size.

## Die#roll()
Takes no arguments, and returns the result of the dice roll.<br>
Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
## Die#getValue
A getter that returns the result of the latest dice roll.<br>
Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
## Die#getFaces
A getter that returns the number of faces on the die.<br>
Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)