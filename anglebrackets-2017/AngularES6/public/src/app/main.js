import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {PlutoComponent} from './pluto.component';

let boot = document.addEventListener('DOMContentLoaded', () => {
    bootstrap(AppComponent);
    bootstrap(PlutoComponent);
});

module.exports = boot;