import React, { Component } from 'react';

function decoratorPrc(target) {
    target.fn = function() {
        alert(123);
    }
}

// @decoratorPrc
// class DecoratorClass extends Component{
    
// }

// export default DecoratorClass;