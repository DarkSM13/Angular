app.config(function ($routeProvider) {
$routeProvider
	.when('/',{
		templateUrl: "default/default.html"
	})
	.when('/list',{
		templateUrl:"/list/list.tpl.html",
		controller:"listCtrl"
	})	
	.when('/edit',{
		templateUrl:"script/core/edit/edit.tpl.html",
		controller:"editCtrl"
	})		
	.when('/json',{
		templateUrl:"script/core/json/json.tpl.html"
	})			
	.otherwise({
		template:"Brak strony"
	})		
	
});