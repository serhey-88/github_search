import angular from 'angular';
import './../../css/main.scss';
import MainCtrl from "./MainCtrl";
import githubService from "./githubService";
import * as Pagination from 'angular-utils-pagination';

angular.module('App',[])
	.controller('MainCtrl', MainCtrl)	
	.service("githubService", githubService)
	
	






// angular.module('App',[])
// 	.controller('MainCtrl', MainCtrl)
// 	.service("githubService", githubService);


// function githubService($http) {

// 	var runUserRequest = function(reponame){
// 		return $http({
// 			method: 'GET',
// 			url: 'https://api.github.com/search/repositories?',
// 			params: {q: reponame}
// 		})
// 	};
// 	return {
// 		event: function(reponame) {
// 			return	runUserRequest(reponame);
// 		}
// 	}
	
// };


// function MainCtrl($scope, $timeout, githubService){
// 	var timeout;
// 	$scope.$watch('reponame', function(newRepoName) {
// 		if(newRepoName){
// 			if (timeout) $timeout.cancel(timeout);

// 			timeout = $timeout(function(){
// 				githubService.event(newRepoName).success(function(items){
// 					console.log(items);
// 					if (items.items[1]) 
// 					$scope.events = items.items
// 					else $scope.events = {
// 						'items': {
// 							'full_name': 'Your search did not match any repository'}
						
// 					};

// 				});
// 			}, 300);
// 		}

// 	});
// 	MainCtrl.$inject = ['githubService'];
// };