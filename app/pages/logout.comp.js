import {Authentication} from "../auth/authentication";
import {RouterHandler} from "../router/router-handler";
'use strict';

export class CLogoutComponent extends HTMLElement {
    constructor() {
        localStorage.removeItem('auth');
        location.href = '/';
    }

    render() {
        return ``;
    }
}
