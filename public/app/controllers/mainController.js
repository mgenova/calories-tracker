(function(){
    
    var mainController = function($scope) {
       $scope.init = function(){
            $scope.idealCalories = 1500;
            $scope.totalCalories = 0;
            $scope.isNegative = false;
            $scope.isHighCalories = false;
            $scope.items = []; //item list array


            $scope.items = [
                {
                    food: 'Banana',
                    calories: 105,
                    workout: 'Running',
                    caloriesBurned: 500              
                },
                {
                    food: 'Oatmeal',
                    calories: 450,
                    workout: 'Cycling',
                    caloriesBurned: 400     
                },
                {
                    food: 'Brown rice with curry',
                    calories: 600,
                    workout: 'Swimming',
                    caloriesBurned: 200     
                }
            ];   
           
           $scope.totalCalories = $scope.calcTotalCalories();
       }

       
        
        //add an item to the list
        $scope.addItem = function(item){
            var food = item.food || 'N/A';
            var calories = item.calories || 0;
            var workout = item.workout || 'N/A';
            var caloriesBurned = item.caloriesBurned || 0;
            
            var newItem = {
                food:food,
                calories: calories,
                workout: workout,
                caloriesBurned: caloriesBurned
            }
            
            $scope.items.push(newItem);
            $scope.totalCalories = $scope.calcTotalCalories();
                if($scope.totalCalories < 0){
                    $scope.isNegative = true;
                } else {
                    $scope.isNegative = false;
                }
            
            $scope.item = {};
            
            }

               
        //subtracts food and workout calories
        $scope.calcTotalCalories = function(){
            var total = 0;
            for(count=0;count<$scope.items.length;count++){
                total += $scope.items[count].calories-$scope.items[count].caloriesBurned;
            }
                if(total > 1500){
                    $scope.isHighCalories = true;
                }else{
                    $scope.isHighCalories = false;
                }
            return total;
        }   
        
        $scope.init();

        
    };
    

    mainController.$inject = ['$scope'];
    
    angular.module('myApp').controller('mainController', mainController);
 
}());
























/*
myApp.controller('mainController', ['$scope', function($scope) {
    
   
    $scope.totalCalories;
    $scope.idealCalories = 1500;
   
 
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
    
    
    function getTotalCalories() {
        var total = $scope.foodCalories - $scope.burnedCalories;
        $scope.totalCalories = total;

        $scope.totalCalories = ($scope.totalCalories  < 0) ? 'success' : 'danger';
        $scope.totalCalories = ($scope.totalCalories  < $scope.idealCalories) ? 'success' : 'danger';
        $scope.totalCalories = ($scope.totalCalories  > 0 | $scope.totalCalories > $scope.idealCalories) ? 'success' : 'danger';
        return $scope.totalCalories;
    }
                  
                 
}]);
*/