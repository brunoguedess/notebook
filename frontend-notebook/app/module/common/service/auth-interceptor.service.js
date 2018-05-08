// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('notebook').factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = [
        '$q',
        '$injector',
        'notebookConfig',
        'locationService'
    ];

    function authInterceptorService(
        $q,
        $injector,
        notebookConfig,
        locationService
    ) {
        return {
            request,
            response,
            responseError
        };

        function request(req) {
            const userSessionService = $injector.get('userSessionService');
            const isAuthPage = locationService.containsPage(notebookConfig.authPage);

            if (!userSessionService.hasUser() && !isAuthPage) {
                locationService.changeUrl(notebookConfig.authPage);

                return null;
            }

            return req;
        }

        function response(res) {
            return res;
        }

        function responseError(res) {
            if (res.status === 403) {
                const userSessionService = $injector.get('userSessionService');

                userSessionService.removeUser();

                locationService.changeUrl(notebookConfig.authPage);
            }

            return $q.reject(res);
        }
    }
})();
