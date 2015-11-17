'use strict';

let MainCtrl = ($scope, $timeout, githubService) => {
	let timeout;
	$scope.$watch('reponame', newRepoName => {
		if(newRepoName){
			if (timeout) $timeout.cancel(timeout);

			timeout = $timeout(()=>{
				githubService.event(newRepoName).success(items=>{
					console.log(items);
					if (items.items[0]) 
					$scope.events = items.items
					else $scope.events = {
						'items': {
							'full_name': 'Your search did not match any repository'}
						
					};

				});
			}, 300);
		}

	});
	
};
MainCtrl.$inject = ['$scope', '$timeout', 'githubService'];
export default MainCtrl;


