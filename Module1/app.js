(function () {
	'use strict';
	


angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController); 
	

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) 
{
	$scope.lunchItems = ''; 
	$scope.nLunchItems = -1; 
	$scope.isTooMuch = false; 
	$scope.userMessage = ''; 
	

	// Process the input lunch items, expected to be available as $scope.lunchItems
	
	$scope.checkItems = function() 
	{
		// Count the number of items entered. Note that we do NOT consider 
		// empty list items as valid lunch items. 
		
		var itemsArray = $scope.lunchItems.split(','); 
		var nItems = 0; 
		itemsArray.forEach( function(item,index) {
			if ( item.trim().length > 0 ) 
			{
				nItems++; 
			}
		});	
		$scope.nLunchItems = nItems; 
		
		$scope.isTooMuch = $scope.nLunchItems > 3; 
		
		if ($scope.nLunchItems == 0 ) 
		{
			$scope.userMessage = "Please enter data first";
		}
			
		else if ($scope.isTooMuch) 
		{
			$scope.userMessage = "Too much!";
		}
		else
		{
			$scope.userMessage = "Enjoy!";
		}			
	}
} 


	
})();