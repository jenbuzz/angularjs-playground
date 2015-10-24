'use strict';

angular.module('angularjsPlaygroundApp')
  .controller('CarouselCtrl', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 730 + slides.length;
      slides.push({
        image: 'http://lorempixel.com/' + newWidth + '/300',
        text: 'Image Caption'
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  });

