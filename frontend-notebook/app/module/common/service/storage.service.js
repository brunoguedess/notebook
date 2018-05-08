// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('notebook').factory('storageService', storageService);

    storageService.$inject = ['$window'];

    function storageService($window) {
        return {
            setItemLocalStorage,
            getItemLocalStorage,
            removeItemLocalStorage
        };

        function setItemLocalStorage(key, value) {
            $window.localStorage.setItem(key, JSON.stringify(value));
        }

        function getItemLocalStorage(key) {
            return JSON.parse($window.localStorage.getItem(key));
        }

        function removeItemLocalStorage(key) {
            $window.localStorage.removeItem(key);
        }
    }
})();
