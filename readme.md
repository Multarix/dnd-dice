[![NPM](https://nodei.co/npm/dnd-dice.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dnd-dice/)

A simple collection of classes for quickly creating and using standard dice rolls and even coin flips.

```js
import { Die, Coin } from 'dnd-dice';

const faces = 50;
const dice = new Die(faces);
console.log(d.value); // 1-50

const coin = new Coin();
console.log(c.result); // Heads or Tails
```

---

# Documentation
For details about class methods and properties please check the [documentation](https://projects.multarix.com/dice).<br>

---

# **Need help?**
If you've encountered a bug or would like to suggest a feature, feel free to create either a pull request or an issue on the [github](https://github.com/Multarix/dnd-dice).