// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('notebook').controller('AuthController', AuthController);

    AuthController.$inject = [
        'toastr',
        'authService',
        'userSessionService',
        'locationService'
    ];

    function AuthController(
        toastr,
        authService,
        userSessionService,
        locationService
    ) {
        const vm = this;

        vm.login = login;
        vm.logout = logout;
        vm.signup = signup;
        vm.changeMode = changeMode;

        activate();

        function activate() {
            vm.loginLabel = getLoginLabel();
            vm.user = userSessionService.getUser();
        }

        function login() {
            authService.login(vm.user)
                .then(successLogin)
                .catch(errorLogin);

            function successLogin(response) {
                userSessionService.createUser(response.data);

                locationService.changeUrl('/');
            }

            function errorLogin(response) {
                toastr.error(response.data.errors);
            }
        }

        function logout() {
            authService.logout(vm.user);

            userSessionService.removeUser();

            locationService.changeUrl('/');
        }

        function signup() {
            authService.signup(vm.user)
                .then(successSignup)
                .catch(errorSignup);

            function successSignup(response) {
                userSessionService.createUser(response.data);

                locationService.changeUrl('/');
            }

            function errorSignup(response) {
                toastr.error(response.data.errors);
            }
        }

        function changeMode() {
            vm.loginLabel = vm.loginLabel.loginMode ? getSignUpLabel() : getLoginLabel();
        }

        function getLoginLabel() {
            return {
                loginMode: true,
                title: 'Log in',
                button: 'Entrar',
                textMode: 'Não está cadastrado?',
                textModeLink: 'Cadastre agora!'
            };
        }

        function getSignUpLabel() {
            return {
                loginMode: false,
                title: 'Sign Up',
                button: 'Cadastrar',
                textMode: 'Já está cadastrado?',
                textModeLink: 'Entrar aqui!'
            };
        }
    }
})();
