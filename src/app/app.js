import angular from 'angular';

import constants from './constants';
import templates from './templates';
import register from 'app/utils/register';

import uiRouter from 'angular-ui-router';
import uiRouterComponent from 'ui-router-components';

import Core from './core/core.module';
import Directives from './directives/directives.module';

import { Home, Contact } from 'components';

const app = angular.module('app', [
    'constants',
    'templates',
    'ui.router',
    'ui.router.components',
    Core,
    Directives,
    Home,
    Contact
]);

export default app;
