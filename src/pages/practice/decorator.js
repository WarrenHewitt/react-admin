// import React, { Component } from 'react';
import { deprecate } from 'core-decorators';

@addStaticProperty
class DecoratorClass {
    constructor() {
        this.name = 'con-name'
    }

    @deprecate('We stopped facepalming')
    facepalmHard() { }

    @log
    add(a, b) {
        return a + b;
    }

    @readonly
    getName() {
        console.log('getName', this.name);
    }
}

function addStaticProperty(target) {
    target.SName = 'name-core'
}

function readonly(target, name, descriptor) {
    console.log('readonly fn：', name); // readonly fn： getName
    descriptor.writable = false;
    return descriptor;
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`Calling ${name} method`);
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}

const dc = new DecoratorClass();

dc.facepalmHard();
dc.add(1, 2);
dc.getName();

console.log(DecoratorClass.SName); // name-core
