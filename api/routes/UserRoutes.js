module.exports = function(app) {
	var userData = require('../controller/UserController');
	var authordet=require('../controller/UserController');
	var isAuth = require('../Middleware/isAuth')


 // To add or create user
 app.route('/signup')
 .post(userData.userSignup)
 .get(userData.getAllUsers)

 app.route('/signin',isAuth)
 .post(userData.userSignin);
 


//  .get(userData.getAllUsers);
 app.route('/getUser/:emailId')
 .get(userData.getUser);

 //To update user date 
 app.route('/updateUser')
 .put(userData.updateUser);



 

// Insert author and books details
 app.route('/details')
 .post(authordet.authorDetails)

 // To get detail by using Id
 .get(authordet.list_all_tasks)
 app.route('/details/:taskId')
 .get(authordet.read_a_task)
 put(authordet.read_a_task)

};
