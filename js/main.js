/**
 * Created by Administrator on 2014/9/23.
 */
var app = angular.module('myApp', []),
    apiKey = 'MDE2ODM0MDMzMDE0MTE2MDk5NzdjZWJmNw001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';
app.controller('PlayerController', function ($scope, $http) {
    $http({
        method: 'JSONP',
        url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success(function (data, status) {
        $scope.programs = data.list.story;
    }).error(function (data, status) {

    });
    $scope.playing = false;
    $scope.audio = document.createElement('audio');

    $scope.play = function (program) {
        if ($scope.playing) {
            $scope.audio.pause();
        }
        var url = program.audio[0].format.mp4.$text;
        $scope.audio.src = url;
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
app.controller('RelatedController', function ($scope) {
});