(function () {
	'use strict';



angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService )
	

function ShoppingListCheckOffService() 
{
	var service = this; 
	service.toBuyItems = []; 
	service.boughtItems = []; 
	
	
    service.addItem = function (itemName, quantity) {
		var item = {
			name     : itemName,
			quantity : quantity, 
			// bought   : false 
		};
	
		service.toBuyItems.push(item);
		console.log('Added item ', itemName, ' quantity ', quantity);
    };

	
	service.GetToBuyItems = function() 
	{
		// return service.items.filter( function(o) { return o.bought == false } ); 
		return service.toBuyItems;
	}
	
	service.GetAlreadyBoughtItems = function() 
	{
		// return service.items.filter( function(o) { return o.bought == true } ); 
		return service.boughtItems; 
	}
	
	service.BuyItem = function ( index ) 
	{
		console.log('gonna buy item at index',index,' name=', service.toBuyItems[index].name );
		var item = service.toBuyItems[ index ]; 
		service.boughtItems.push( item ); 
		service.toBuyItems.splice( index, 1 ); 
		// service.items[ index ].bought = true; 
		console.log('To Buy items :', service.GetToBuyItems() );
		console.log('Bought Items :', service.GetAlreadyBoughtItems() ); 
	}


	service.addItem('Chips', 10); 
	service.addItem('Cookies', 20); 
	service.addItem('Pizza', 3); 
	service.addItem('Potatoes', 100); 
	service.addItem('Dumplings', 20); 
	service.addItem('Pop', 24); 
//	service.BuyItem(0); 
	
	
	
}


ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService)
{
	var toBuy = this; 
	toBuy.items = ShoppingListCheckOffService.GetToBuyItems(); 
	
	toBuy.BuyItem = function( index ) {
		return ShoppingListCheckOffService.BuyItem(index);
	}
	
	toBuy.IsEmpty = function() 
	{
		return ShoppingListCheckOffService.GetToBuyItems().length == 0; 
	}
	
	
	$scope.message = "To Buy Controller"; 
	
}

AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService)
{
	var alreadyBought = this; 
	alreadyBought.items = ShoppingListCheckOffService.GetAlreadyBoughtItems();

	alreadyBought.IsEmpty = function() 
	{
		return ShoppingListCheckOffService.GetAlreadyBoughtItems().length == 0; 
	}
	
	$scope.message = "Already Bought Controller"; 
}



})();
