// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('notebook', ['contact']).config(notebookConfig);

    notebookConfig.$inject = ['$httpProvider'];

    function notebookConfig($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }
})();
