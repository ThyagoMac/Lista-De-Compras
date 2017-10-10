var app = angular.module('meuApp', []);
app.controller('meuCtrl', function ($scope) {

    $scope.lista = ['Pickles', 'Salgueds'];
    $scope.aviso = '';
    $scope.addItem = function () {
        $scope.aviso = '';
        if ($scope.addTexto != '') {
            if ($scope.lista.indexOf($scope.addTexto) == -1) {
                $scope.lista.push($scope.addTexto);
            } else {
                $scope.aviso = 'Item já adicionado';
            }
        }
        $scope.addTexto = '';
    }
    $scope.removeItem = function(x) {
        $scope.aviso = '';
        $scope.lista.splice(x, 1);
    }
});