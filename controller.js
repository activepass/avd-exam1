angular.module('portfolioApp', [])
  .controller('PortfolioController', function($scope, $location, $anchorScroll) {	
    $scope.isVisible = false;
    $scope.response = {"name":"", "email":"", "subject":"", "message":""};
	$scope.sendMeMessage = function() {
        $scope.response = {"name":$scope.name, "email":$scope.email, "subject":$scope.subject, "message":$scope.message};
        console.log($scope.response);
        $scope.isVisible = true;

        // Scroll to the response
        $location.hash('response');
        $anchorScroll();
	};	
	
});