# Coffee Tester's Flavor Wheel

[Information](https://sca.coffee/research/coffee-tasters-flavor-wheel)

![GitHub Actions Status](https://github.com/harshzalavadiya/coffee-flavor-wheel/workflows/NodeJS/badge.svg)
![NPM](https://img.shields.io/npm/v/coffee-flavor-wheel.svg)
![gzip](https://badgen.net/bundlephobia/minzip/coffee-flavor-wheel)

## ⚡ Features

- No Dependency ⛔
- Cross Framework 🖖
- Strictly typed with `TypeScript` (you can still use it with JavaScript) 💂

## 🔧 Installation

```sh
npm i coffee-flavor-wheel
```

## 📦 Usage

```javascript
import { ICoffeeFlavor, CoffeeFlavors, CreditText } from "coffee-flavor-wheel";

console.log("Flavors", CoffeeFlavors);
console.log("Credits", CreditText);
```

> `ICoffeeFlavor` is an exported TypeScript Interface

## 👀 Output

```json
{
    "name": "roasted",
    "color": "#D33727",
    "children": [
      {
        "name": "pipe tobacco",
        "color": "#A49663"
      },
      ...
    ]
}
```

## 🤠 Credits

The Coffee Taster's Flavor Wheel by SCA and WCR (&copy;2016) is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/).  Please review the license terms carefully to ensure that your intended use of this digital file meets license requirements.