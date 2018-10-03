import {Component} from 'angular2/core';

class PlutoComponent {
    constructor () {
        this.exists = true;
    }
}

PlutoComponent.annotations = [
    new Component({
        selector: "pluto-lives",
        templateUrl: "./pluto.component.template.html"
    })
];

export {PlutoComponent};