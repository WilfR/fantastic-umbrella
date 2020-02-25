(function () {
	'use strict';
	
function CustomFilterFactory()
{
	return function(s) {
		return "<<<" + s + ">>>";
	}
}

function UmbrellaController($scope,$filter,customFilter) 
{
	$scope.name = '';
	$scope.value = 0; 
		
	$scope.upper = function () {
		var upcase = $filter('uppercase'); 
		$scope.name = upcase( $scope.name ); 
	}
		
	$scope.displayNumeric = function() {
		var totalNameValue = computeValueFromString($scope.name); 
		console.log('ok displayNumeric is called')
		$scope.value = totalNameValue; 
	}
		
	$scope.biteMe = function() {
		return "Bite Me!"; 
	}
	
	$scope.changed = function() { 
	    console.log( 'changed function called' ); 
	}
	
} 

angular.module('FantasticUmbrellaApp',[])
    .controller('UmbrellaController', UmbrellaController)
	.filter('custom',CustomFilterFactory); 
	
	
	
function computeValueFromString( string ) {
	console.log('Now computeValueFromString is called');
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
}
	
})();