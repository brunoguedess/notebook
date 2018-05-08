describe('Contact service', () => {

    beforeEach(module('notebook'));
    beforeEach(module('contact'));

    var contactService, notebookConfig, $httpBackend;

    beforeEach(inject(($injector) => {
        notebookConfig = $injector.get('notebookConfig')
        $httpBackend = $injector.get('$httpBackend');
        contactService = $injector.get('contactService');
   
        $httpBackend.when(
            'GET',
            `${notebookConfig.backendUrl}/api/contato/1`
        ).respond(
            200,
            {
                codigo: 1,
                nome: 'CONTACT 1',
                idade: 36
            }
        );
    }))

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should get a contact by id', () => {
        contactService.getById(1).then((response) => {
            expect(response.data.nome).toEqual('CONTACT 1');
        });

        $httpBackend.flush();
    });

});