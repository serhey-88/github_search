'use strict';

function githubService($http) {

	let runUserRequest = function(reponame){
		return $http({
			method: 'GET',
			url: 'https://api.github.com/search/repositories?',
			params: {q: reponame}
		})
	};
	return {
		event: function(reponame) {
			return	runUserRequest(reponame);
		}
	}
	
};
githubService.$inject = ['$http'];
export default githubService;


