var app = angular.module('home', []);
app.controller('bodyController', ['$scope',
	function($scope){
		$scope.username = 'My Nigga';
		// $scope.submit = function(text){
		// 	alert('You wrote ' + text);
		// };
	}]
);

app.controller('stationsController', ['$scope', '$http',
	function($scope, $http){
		$scope.stations = [
			{
				stationName : 'My niggas\' station, yo',
				description : 'SWAG'
			},
			{
				stationName : 'Gentlemen',
				description : 'Style only'
			}
		];
                
                $scope.stationsMap = [];
                for(var i = 0; i < $scope.stations.length; i++){
                    $scope.stationsMap[$scope.stations[i].stationName] = $scope.stations[i];
                }

                $scope.printName = function(name){
                    alert($scope.stationsMap[name]);
                }
                
		$scope.createNew = function(){
			//do stuff.
			var newStation = {stationName : 'new one', description : 'This is new as fuck.'};
			$http.post('http://localhost:8888/newStation', {'newStation' : newStation}).success(
				function(data, status){
					$scope.stations.push(data);
				}
			);
		};
	}]
);