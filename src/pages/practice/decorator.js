import React, { Component } from 'react';



@decoratorPrc
class DecoratorClass{
    fn() {
        console.log('fn: ', this.name);
    }
}

function decoratorPrc(target) {
    console.log('target', target);

    return class extends target {
        name= 'hew'
    }
}


console.log(new DecoratorClass().fn());

export default {a:12};