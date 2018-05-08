// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('contact', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'ngTable',
        'toastr'
    ]).config(contactConfig);

    contactConfig.$inject = ['$stateProvider'];

    function contactConfig($stateProvider) {
        $stateProvider
            .state('list', {
                resolve: {
                    contacts(contactService) {
                        return contactService.load()
                            .then(successLoadContacts)
                            .catch(errorLoadContacts);
                    }
                },
                templateUrl: 'module/contact/view/list.html',
                controller: 'ListContactController',
                controllerAs: 'vm'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'template/home.html'
            });

        function successLoadContacts(response) {
            return response.data;
        }

        function errorLoadContacts(response, toastr) {
            toastr.error(response.data.message);
        }
    }
})();
