require('@webcomponents/webcomponentsjs/webcomponents-lite');
import {RouterHandler} from './router/router-handler';
import {Authentication} from './auth/authentication';
import {Core} from './core/core';
import {Http} from './http/http';
import './style/sass/style.scss';

/**
 * Order is important !
 */
class App {
    constructor() {
        new Authentication();
        const router = new RouterHandler();
        new Core();
        new Http();
        router.init();
    }
}

if ('registerElement' in document
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template')) {
    new App();
} else {
    setTimeout(() => {
        new App();
    });
}
