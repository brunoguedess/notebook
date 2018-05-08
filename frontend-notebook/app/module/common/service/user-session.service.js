// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('notebook').factory('userSessionService', userSessionService);

    userSessionService.$inject = [
        '$http',
        '$rootScope',
        'storageService'
    ];

    function userSessionService(
        $http,
        $rootScope,
        storageService
    ) {
        return {
            createUser,
            removeUser,
            getUser,
            hasUser
        };

        function createUser(user) {
            storageService.setItemLocalStorage('user', user);

            setUserTokenInHeader(user.token);
        }

        function removeUser() {
            storageService.removeItemLocalStorage('user');

            setUserTokenInHeader('');
        }

        function getUser() {
            const user = storageService.getItemLocalStorage('user');
            const userToken = user !== null ? user.token : '';

            setUserTokenInHeader(userToken);

            return user;
        }

        function hasUser() {
            return getUser() !== null;
        }

        function setUserTokenInHeader(token) {
            $http.defaults.headers.common.Authorization = token;
        }
    }
})();
