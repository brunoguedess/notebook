// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('contact').factory('contactService', contactService);

    contactService.$inject = ['$http', 'notebookConfig'];

    function contactService($http, notebookConfig) {
        const contactApiUrl = `${notebookConfig.backendUrl}/api/contato`;

        return {
            addOrUpdate,
            count,
            getById,
            load,
            removeById
        };

        function load() {
            return $http.get(contactApiUrl);
        }

        function addOrUpdate(contact) {
            if (contact._id === undefined) {
                return save(contact);
            }

            return update(contact);
        }

        function save(contact) {
            return $http.post(contactApiUrl, contact);
        }

        function update(contact) {
            return $http.put(`${contactApiUrl}/${contact._id}`, contact);
        }

        function removeById(contactId) {
            return $http.delete(`${contactApiUrl}/${contactId}`, contactId);
        }

        function getById(contactId) {
            return $http.get(`${contactApiUrl}/${contactId}`, contactId);
        }

        function count() {
            return $http.get(`${contactApiUrl}/count`);
        }
    }
})();
