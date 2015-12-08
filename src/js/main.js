var app = angular.module('App', []);
app.controller('Tabs', function($scope) {
    $scope.tabsBlock = false;
    $scope.tab = 1;
    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
        $scope.tabsBlock = false;
    };
    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };
    $scope.toggle = function() {
        $scope.tabsBlock = !$scope.tabsBlock;
    }
});

function initFocusLabels(parent_class) {
    $(parent_class).find('.row').each(function() {
        var label = $(this).find('label'),
            input = $(this).find('input');

        if(label != null && label != undefined) {
            if(input != null && input != undefined) {
                input.on('focus', function() {
                    label.addClass('focus');
                });
                input.on('blur', function() {
                    label.removeClass('focus');
                });
            }
        }
    });
}

$(function() {
    $('select').zselect({
        placeholder: {
            value     : '0',
            no_options: 'No items selected'
        }
    });
    initFocusLabels('.tab2');
});