// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('contact').controller('ListContactController', ListContactController);

    ListContactController.$inject = [
        '$uibModal',
        '$state',
        '$stateParams',
        'NgTableParams',
        'toastr',
        'contactService',
        'notebookConfig',
        'contacts'
    ];

    function ListContactController(
        $uibModal,
        $state,
        $stateParams,
        NgTableParams,
        toastr,
        contactService,
        notebookConfig,
        contacts
    ) {
        const vm = this;

        vm.removeContact = removeContact;
        vm.showModal = showModal;

        function activate() {
            showContactsTable();
        }

        function removeContact(contactId) {
            contactService.removeById(contactId)
                .then(successRemoveContactById)
                .catch(errorRemoveContactById);

            function successRemoveContactById() {
                $state.go(
                    'list',
                    {},
                    { reload: true }
                );
            }

            function errorRemoveContactById(response) {
                toastr.error(response.data.message);
            }
        }

        function showModal(contactId) {
            $uibModal.open({
                templateUrl: 'module/contact/view/contact.html',
                controller: 'EditContactController',
                controllerAs: 'vm',
                resolve: {
                    contact() {
                        return (contactId === undefined)
                            ? {}
                            : contactService.getById(contactId)
                                .then(successGetContactById)
                                .catch(errorGetContactById);
                    }
                }
            });

            function successGetContactById(response) {
                return response.data;
            }

            function errorGetContactById(response) {
                toastr.error(response.data.message);
            }
        }

        function showContactsTable() {
            const initialParams = {
                count: notebookConfig.itemsPerPage
            };

            const initialSettings = {
                // page size buttons (right set of buttons in demo)
                counts: [],
                // determines the pager buttons (left set of buttons in demo)
                paginationMaxBlocks: 13,
                paginationMinBlocks: 2,
                dataset: contacts
            };

            vm.contactsTable = new NgTableParams(initialParams, initialSettings);
        }

        activate();
    }
})();
