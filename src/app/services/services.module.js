import { ApiService, ApiConfig } from 'services';

const moduleName = 'app.services';

angular.module(moduleName, [])

register(moduleName)
    .service('ApiService', ApiService)
    .config(ApiConfig)

export default moduleName;
