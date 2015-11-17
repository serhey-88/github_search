'use strict';

import 'chai';
import 'angular';
import "angular-mocks";
import MainCtrl from "./../assets/js/angular/MainCtrl";
import githubService from "./../assets/js/angular/githubService";

angular.module('App',[])
	.controller('MainCtrl', MainCtrl)	
	.service("githubService", githubService);


describe('githubService', function() {

	var temp;

	beforeEach(angular.mock.module("App"))

	beforeEach(inject(function( githubService ) {
		temp = githubService;
	}));

	beforeEach(inject(function($httpBackend) {
		$httpBackend.expect('GET', "https://api.github.com/search/repositories?&page=1&per_page=100&q=angular").respond(
		{
			items: [
			{
				"id": 24195339,
				"name": "angular",
				"full_name": "angular/angular",
				"url": "https://api.github.com/repos/angular/angular"
			}
			]
		});
		temp.event("angular");
		$httpBackend.flush();
	}));

	it('should return an Object', function() {
		expect(temp.event()).should.be.object;
	});

	it('the object items property is Array', function(){
		expect(temp.event().items).should.be.array;
	});

});

