const {
    toUTF8,
    fromUTF8
} = require('./');

console.log(fromUTF8(toUTF8('hello')));
console.log(fromUTF8(toUTF8('你好')));