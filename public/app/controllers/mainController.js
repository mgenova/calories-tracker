

myApp.controller('mainController', ['$scope', function($scope) {
    
    /*
    $scope.totalCalories;
    $scope.idealCalories = 1500;
    */
 
    $scope.food ={
        desc: '',
        calories: 0
    }
    
    $scope.workout = {
        desc: '',
        caloriesBurned: 0
    }
    
    $scope.tracker = {
        diet: [],
        workouts:[],
        totalCaloriesConsumed: 0,
        totalCaloriesBurned: 0,
        calorieBalance: 0,
        idealCalories: 1500
    }
    
    $scope.addFoodCalories = function(){		
	    $scope.tracker.diet.push({desc: $scope.food.desc, calories: $scope.food.calories });
        $scope.food ={
            desc: '',
            calories: 0
        }   
    }
                  
    $scope.addWorkoutCalories = function(){		
	    $scope.tracker.workouts.push({desc: $scope.workout.desc, calories: $scope.workout.caloriesBurned });
        $scope.workout = {
            desc: '',
            caloriesBurned: 0
        }	
    }      
    
    /*
    $scope.tracker = {
        foodTrackerfoodItem:'',
        foodCalories:0,
        workoutType:'',
        burnedCalories:0
        
    }

    
    $scope.calories = [];

    
        

    $scope.calories = [];
    
    $scope.addCalories =  function(){
	    $scope.calories.push({
            foodItem:$scope.tracker.foodItem, 
            foodCalories:$scope.tracker.foodCalories, 
            workoutType: $scope.tracker.workoutType, 
            burnedCalories:$scope.tracker.burnedCalories 
        });
        
	   
    }          
   */
    
    
    function getTotalCalories() {
        var total = $scope.foodCalories - $scope.burnedCalories;
        $scope.totalCalories = total;

        $scope.totalCalories = ($scope.totalCalories  < 0) ? 'success' : 'danger';
        $scope.totalCalories = ($scope.totalCalories  < $scope.idealCalories) ? 'success' : 'danger';
        $scope.totalCalories = ($scope.totalCalories  > 0 | $scope.totalCalories > $scope.idealCalories) ? 'success' : 'danger';
        return $scope.totalCalories;
    }
    
                 
                 
                 
}]);