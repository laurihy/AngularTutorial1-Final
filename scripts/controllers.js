angular.module('ListController', ['ngResource']);

function ListController($scope){

	$scope.items = [
	    {text:'Hello', deleted: false, archived: false}
	];

	$scope.addNewItem = function(){
	    newItem = {
	        text: $scope.itemText,
	        deleted: false,
	        archived: false
	    }
	    $scope.items.push(newItem);

	    // clear the form text, 2-way binding \o/
	    $scope.itemText = '';
	}

	$scope.deleteItem = function(item){
	    item.deleted = true;
	}

	$scope.archiveItems = function(){
		for(i in $scope.items){
			if($scope.items[i].deleted){
				$scope.items[i].archived = true;
			}
		}
	}

}