/**
 * Created by Administrator on 2014/9/23.
 */
var app = angular.module('myApp', []);

app.controller('PlayerController', function ($scope) {
    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.src = "audio/2.mp3";
    $scope.play = function () {
        $scope.audio.play();
        $scope.playing = true;
    };
    $scope.stop = function () {
        $scope.audio.pause();
        $scope.playing = false;
    };
    $scope.audio.addEventListener('ended', function () {
        $scope.$apply(function () {
            $scope.stop();
        });
    });
});
app.controller('RelatedController',function ($scope) {
});