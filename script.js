var app = angular.module('app', []);

app.controller('myCtrl', function($scope) {

    $scope.textareaFocused = function (event) {
        $(event.target)[0].style.height=$(event.target)[0].scrollHeight + 'px';
        $(event.target).bind('change keyup input', function(event) {
            $(event.target)[0].style.height='auto';
            if ($(event.target)[0].clientHeight < $(event.target)[0].scrollHeight) {
					$(event.target)[0].style.height=$(event.target)[0].scrollHeight + 'px';
				}
        });
    };

    $scope.textareaBlured = function (event) {
        $(event.target).unbind('change keyup input');
        $(event.target)[0].style.height = '50px'; 
    };

});
