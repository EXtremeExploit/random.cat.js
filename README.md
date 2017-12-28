<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/random.cat.js"><img src="https://img.shields.io/npm/v/random.cat.js.svg" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/random.cat.js"><img src="https://img.shields.io/npm/dt/random.cat.js.svg" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/hydrabolt/random.cat.js"><img src="https://travis-ci.org/hydrabolt/random.cat.js.svg" alt="Build status" /></a>
  </p>
</div>

## About
random.cat.js is a  [node.js](https://nodejs.org) module that allows you to interact with the
[random.cat API](http://random.cat) very easily.

- Predictable abstractions

## Installation

`npm install random.cat.js --save`

## Example usage
```js
const randomCat = require('random.cat.js');
const randomCatApi = randomCat.api();

randomCatApi.getCat().then((cat) => console.log(cat.file))
```
