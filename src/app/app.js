import angular from 'angular';
import register from './utils/register';

import uiRouter from 'angular-ui-router';
import uiRouterComponent from 'ui-router-components';

import Core from './core/core.module';
import Directives from './directives/directives.module';
import Services from './services/services.module';

import oclazyload from 'oclazyload'


import "./../assets/scss/general.scss";


import { Home} from 'components';

const app = angular.module('app', [
    'ui.router',
    'ui.router.components',
    oclazyload,
    Core,
    Directives,
    Services,
    Home

])


export default app;
