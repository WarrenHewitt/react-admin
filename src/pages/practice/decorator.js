// import React, { Component } from 'react';
import { deprecate } from 'core-decorators';

import './a.js';

// import * as a from './a.js'



// @addProperty
class DecoratorClass{
    @deprecate('We stopped facepalming')
    facepalmHard() {}

    @log
    add(a, b) {
      return a + b;
    }
}

function addProperty(target) {
    target.name = 'name-core'
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;
  
    descriptor.value = function() {
      console.log(`Calling ${name} with`, arguments);
      return oldValue.apply(this, arguments);
    };
  
    return descriptor;
}

const dc = new DecoratorClass();


dc.facepalmHard();
dc.add(1,2);
console.log(dc.name);

// function testable(target) {

//     return class extends target {
//         name = 'werr';
//     }
// }
  
// @testable
// class MyTestableClass {}

// // MyTestableClass.name = 'hew'


// console.log(new MyTestableClass().name) // true
