// eslint-disable-next-line func-names
(function () {
    angular.module('notebook').component('loginField', {
        bindings: {
            id: '@',
            type: '@',
            placeholder: '@',
            model: '=',
            hide: '<'
        },
        template: `
            <div ng-if="!$ctrl.hide">
                <label for="{{ $ctrl.id }}" class="sr-only">{{ $ctrl.placeholder }}</label>
                <input type="{{ $ctrl.type }}" id="{{ $ctrl.id }}" class="form-control" 
                    placeholder="{{$ctrl.placeholder}}" ng-model="$ctrl.model" required autofocus/>
            </div>
        `
    });
})();
