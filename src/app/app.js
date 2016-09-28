import angular from 'angular';
import register from './utils/register';

import uiRouter from 'angular-ui-router';
import uiRouterComponent from 'ui-router-components';

import Core from './core/core.module';
import Directives from './directives/directives.module';
import Services from './services/services.module';

import "./../assets/scss/general.scss";


import { Home, Contact, Gallery } from 'components';

const app = angular.module('app', [
    'ui.router',
    'ui.router.components',
    Core,
    Directives,
    Services,
    Home,
    Contact,
    Gallery
]);

export default app;
