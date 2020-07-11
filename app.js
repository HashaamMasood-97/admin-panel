var express 				= require("express"),
	app 					= express();





app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/assets"));





app.get("/", function(req, res){
	res.render("dashboard/index");
});

app.get("/orders_delivered", function(req, res){
	res.render("orders/orders_delivered");
});


app.get("/orders_pending", function(req, res){
	res.render("orders/orders_pending");
});


app.get("/orders_dispatched", function(req, res){
	res.render("orders/orders_dispatched");
});

	 


app.get("/dispatched", function(req, res){
	res.render("order_details/dispatched");
});

app.get("/pending", function(req, res){
	res.render("order_details/pending");
});


app.get("/delivered", function(req, res){
	res.render("order_details/delivered");
});

app.get("/add_product", function(req, res){
	res.render("product_form/add_product");
});

app.get("/user_detail", function(req, res){
	res.render("users/user_detail");
});


app.get("/user_table", function(req, res){
	res.render("users/user_table");
});
	
	 

app.listen(3000, function(){
	console.log("Server started");
});



