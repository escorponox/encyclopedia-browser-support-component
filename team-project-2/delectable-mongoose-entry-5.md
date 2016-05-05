# `String.prototype.toLowerCase()`

## Introduction

`String.prototype` represents the prototype object of the global `String` object.

Instances of the global `String` object **has access** to the prototype object.

In other words, all instances of the global `String` object inherits from `String.prototype`.

The string prototype object comes with many native methods that are useful for string manipulation namely `String.prototype.toLowerCase()`, `String.prototype.toUpperCase()`, `String.prototype.charAt()` and many more.

Most native methods have name that are rather verbose, for example the native method `String.prototype.toLowerCase()`. By just looking at the name of the method `.toLowerCase()`, we can know it's purpose - i.e. it converts the character within a string to lower case.

## Usage

Usage is simple, all you have to do is call the `.toLowerCase()` method on a string, and the Javascript engine is smart enough to do heavy lifting.

```js
// String literals (primitive)
const string = 'LoWeR CaSE'

console.log(string.toLowerCase()); // 'lower case'

// String Objects
const stringObj = new String(string);

console.log(stringObj.toLowerCase()); // 'lower case'
```

### How it works

In Javascript, there are two ways to create a string, via string literals or the string constructor object.

**String literals**

```js
var one = 'hello';
var two = "hello";
```

**String Constructor Object**

```js
var one = 'hello';
var one_obj = new String(one);
```

NOTE: String literals are primitives. Primitives are not object, hence they do not have methods. String literals have the string primitive type.

So you might be wondering, since String literals are primitive type, how and why does calling `'AWSOME'.toLowerCase()` work ?

Well it works because the Javascript engine **automatically converts** string primitives to String objects so that you can use all the string methods on the `String.prototype` object on primitive strings.

 How awesome is that?
