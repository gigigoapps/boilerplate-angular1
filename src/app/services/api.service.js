import Base from 'app/utils/base';

export class ApiService extends Base {
    constructor($log, $http, $q, API_URL) {
        super(__filename,arguments);
    }
    _error(data) {

        let message = null;

        switch(data.code) {
            case 401:

            break;
            case 404:
                message = data.message;
            break;
            default:
                message = data.message;
            break;
        }

        this.$log.debug('[ERROR]', message);

    }
    request(options) {
        let defer = this.$q.defer();

        options.url = this.API_URL + options.url;

        this.$http({
            method: options.method,
            url: options.url,
            data: options.data,
            headers: options.headers
        })
        .then((response) => {
            this.$log.debug('[RESPONSE]', response);
            defer.resolve(response.data);
        })
        .catch((response) => {
            if (response.data.error) {
                this._error(response.data.error);
                return false
            }
        });

        return defer.promise;
    }
}


export function ApiConfig($httpProvider, $logProvider, TIMEOUT, LOG) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.timeout = TIMEOUT;
    //$httpProvider.defaults.withCredentials = true;
    $httpProvider.useApplyAsync(true);
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['x-dev-html-off'] = 1;
    $httpProvider.defaults.headers.common['x-device-id'] = '1000';

    $logProvider.debugEnabled(LOG);
}
