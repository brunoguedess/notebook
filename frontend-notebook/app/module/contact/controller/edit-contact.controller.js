// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('contact').controller('EditContactController', EditContactController);

    EditContactController.$inject = [
        '$uibModalInstance',
        '$state',
        '$stateParams',
        'toastr',
        'contactService',
        'contact'
    ];

    function EditContactController(
        $uibModalInstance,
        $state,
        $stateParams,
        toastr,
        contactService,
        contact
    ) {
        const vm = this;

        vm.saveContact = saveContact;
        vm.close = close;
        vm.cancel = cancel;

        function activate() {
            vm.contact = contact;
        }

        function saveContact(paramContact) {
            contactService.addOrUpdate(paramContact)
                .then(successAddOrUpdateContact)
                .catch(errorAddOrUpdateContact);

            function successAddOrUpdateContact() {
                toastr.success('Contato salvo');

                $state.go('list', {}, { reload: true });

                vm.close();
            }

            function errorAddOrUpdateContact(response) {
                toastr.error(response.data.message);
            }
        }

        function close() {
            $uibModalInstance.close();
        }

        function cancel() {
            $uibModalInstance.close(false);
        }

        activate();
    }
})();
