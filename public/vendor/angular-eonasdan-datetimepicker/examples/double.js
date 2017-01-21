(function () {
    'use strict';

    angular.module('plunker', ['ae-datetimepicker'])
        .controller('controller', function () {
            var vm = this;

            vm.dateFrom = moment().add(-1, 'd');
            vm.dateTo = moment();

            vm.optionsFrom = {format: 'DD.MM.YYYY'};
            vm.optionsTo = {format: 'DD.MM.YYYY'};

            vm.update = function (dateFrom, dateTo) {
                vm.optionsFrom.maxDate = dateTo;
                vm.optionsTo.minDate = dateFrom;
            };
            vm.update(vm.dateFrom, vm.dateTo);

            vm.print = function () {
                console.log('vm.dateTo: ' + vm.dateTo.format('YYYY/MM/DD'));
                console.log('vm.optionsTo: ' + angular.toJson(vm.optionsTo));
                console.log('vm.dateFrom: ' + vm.dateFrom.format('YYYY/MM/DD'));
                console.log('vm.optionsFrom: ' + angular.toJson(vm.optionsFrom));
            };

        });
})();
