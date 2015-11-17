'use strict';

let githubService = $http => {

	let runUserRequest = reponame => {
		return $http({
			method: 'GET',
			url: 'https://api.github.com/search/repositories?',
			params: {q: reponame,
					page: 1,
					per_page: 100}
		})
	};
	return {
		event: reponame => {
			return	runUserRequest(reponame);
		}
	}
	
};
githubService.$inject = ['$http'];
export default githubService;


