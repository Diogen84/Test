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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnQXBwJywgW10pO1xyXG5hcHAuY29udHJvbGxlcignVGFicycsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgJHNjb3BlLnRhYnNCbG9jayA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLnRhYiA9IDE7XHJcbiAgICAkc2NvcGUuc2V0VGFiID0gZnVuY3Rpb24obmV3VGFiKSB7XHJcbiAgICAgICAgJHNjb3BlLnRhYiA9IG5ld1RhYjtcclxuICAgICAgICAkc2NvcGUudGFic0Jsb2NrID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmlzU2V0ID0gZnVuY3Rpb24odGFiTnVtKSB7XHJcbiAgICAgICAgcmV0dXJuICRzY29wZS50YWIgPT09IHRhYk51bTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnRhYnNCbG9jayA9ICEkc2NvcGUudGFic0Jsb2NrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRGb2N1c0xhYmVscyhwYXJlbnRfY2xhc3MpIHtcclxuICAgICQocGFyZW50X2NsYXNzKS5maW5kKCcucm93JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbGFiZWwgPSAkKHRoaXMpLmZpbmQoJ2xhYmVsJyksXHJcbiAgICAgICAgICAgIGlucHV0ID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpZihsYWJlbCAhPSBudWxsICYmIGxhYmVsICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZihpbnB1dCAhPSBudWxsICYmIGlucHV0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlucHV0Lm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnc2VsZWN0JykuenNlbGVjdCh7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgdmFsdWUgICAgIDogJzAnLFxyXG4gICAgICAgICAgICBub19vcHRpb25zOiAnTm8gaXRlbXMgc2VsZWN0ZWQnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpbml0Rm9jdXNMYWJlbHMoJy50YWIyJyk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
