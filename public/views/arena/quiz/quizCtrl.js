angular.module('arena').controller('quizCtrl', function ($scope, $location, $rootScope, eventsFactory, localStorageService, $routeParams, SessionService, $timeout) {
    console.log($routeParams);
    eventsFactory.get($routeParams.id).then(function (res) {
        console.log(res.data);
        $scope.event = res.data;
        $rootScope.$broadcast('data.loaded');
        $scope.questions = [{
            question: "Lorem <a href='ipsum'> dolor </a>sit amet, consectetur adipisicing elit. Accusantium tenetur eligendi consequatur quo a asperiores in, eius illum dolorem alias necessitatibus aspernatur, et voluptate, placeat dolores, quis dolore ab officiis. ",
            time: "2 mins",
            options: ["A", "B", "C", "D"]
        }, {
            question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, eum! Fuga autem optio beatae assumenda modi esse provident ad ea ut ratione sunt voluptatibus impedit fugit nulla voluptas, sequi corporis. ",
            time: "2 mins",
            options: ["A", "B", "C", "D"]
        }];
        // var ansList = Array.apply(null, Array($scope.questions.length)).map(Number.prototype.valueOf, -1);
        var ansList = [];
        $scope.quiz = {
            start: false,
            finish: false,
            length: $scope.questions.length
        };
        console.log($scope.quiz.length);
        $scope.current = {
            index: 0
        };

        function checkAns(index, ans) {
            console.log(index);
            ansList[index] = parseInt(ans);
        }
        // $scope.quiz.start = true;
        //Comment above line for production
        $scope.selectQues = function (ques, index) {
            checkAns($scope.current.index, $scope.current.ans);
            $scope.current.ques = ques;
            $scope.current.index = parseInt(index);
            $scope.current.ans = -1;
        }
        $scope.nextQues = function () {
            checkAns($scope.current.index, $scope.current.ans);
            $scope.current.index += 1;
            $scope.current.index %= $scope.quiz.length;
            $scope.current.ans = -1;
            $scope.current.ques = $scope.questions[$scope.current.index];
        }
        $scope.prevQues = function (ques, index) {
            checkAns($scope.current.index, $scope.current.ans);
            $scope.current.index -= 1;
            if ($scope.current.index < 0) {
                $scope.current.index = $scope.quiz.length - 1;
            }
            $scope.current.ans = -1;
            $scope.current.ques = $scope.questions[$scope.current.index];
        }
        $scope.startQuiz = function () {
            $(window).scrollTop(0);
            $scope.quiz.start = true;
            $scope.current.ques = $scope.questions[$scope.current.index];
        }
        $scope.finishQuiz = function () {
            checkAns($scope.current.index, $scope.current.ans);
            $(window).scrollTop(0);
            $scope.quiz.finish = true;
            console.log(ansList);
        }
    });
});
