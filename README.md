# distance and similarity

## Distance

You can calculate distance of two strings (levenshtein distance):

```javascript
const { distance } = require('@agarimo/similarity');

console.log(distance('p', 'potatoe')); // 6
console.log(distance('potatoe', 'potatoe')); // 0
console.log(distance('potatoe', 'Potatoe')); // 1
console.log(distance('distance', 'eistancd')); // 2
console.log(distance('mikailovitch', 'Mikhaïlovitch')); // 3
```

## Distance normalized

You can calculate distance of two strings (levenshtein distance) using normalization:

```javascript
const { distance } = require('@agarimo/similarity');

console.log(distance('p', 'potatoe', true)); // 6
console.log(distance('potatoe', 'potatoe', true)); // 0
console.log(distance('potatoe', 'Potatoe', true)); // 0
console.log(distance('distance', 'eistancd', true)); // 2
console.log(distance('mikailovitch', 'Mikhaïlovitch', true)); // 1
```

## Similarity

You can calculate similarity between two strings. If both strings are equal, it will return 1, otherwise will return (1 - leven(a, b) / a.length) considering that a is the longest string.

```javascript
const { similarity } = require('@agarimo/similarity');

console.log(similarity('p', 'potatoe')); // 0.1428571428571429
console.log(similarity('potatoe', 'potatoe')); // 1
console.log(similarity('potatoe', 'Potatoe')); // 0.8571428571428572
console.log(similarity('distance', 'eistancd')); // 0.75
console.log(similarity('mikailovitch', 'Mikhaïlovitch')); // 0.7692307692307692
```

## Similarity

You can calculate similarity between two strings using normalization. If both strings are equal, it will return 1, otherwise will return (1 - leven(a, b) / a.length) considering that a is the longest string.

```javascript
const { similarity } = require('@agarimo/similarity');

console.log(similarity('p', 'potatoe', true)); // 0.1428571428571429
console.log(similarity('potatoe', 'potatoe', true)); // 1
console.log(similarity('potatoe', 'Potatoe', true)); // 1
console.log(similarity('distance', 'eistancd', true)); // 0.75
console.log(similarity('mikailovitch', 'Mikhaïlovitch', true)); // 0.9230769230769231
```
