// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('notebook').factory('locationService', locationService);

    locationService.$inject = ['$window'];

    function locationService($window) {
        return {
            changeUrl,
            containsPage,
            getUrl
        };

        function changeUrl(href) {
            $window.location.href = href;
        }

        function containsPage(page) {
            return $window.location.href.includes(page);
        }

        function getUrl() {
            return $window.location.href;
        }
    }
})();
