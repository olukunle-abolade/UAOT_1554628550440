<?php /** 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5ca6fb6b3e3a575750171757
*
* You will get 10% discount for each one of your friends
* 
*/
?>
<?php
	require_once './db/dbUAOT_dbManager.php';
	
/*
 * SCHEMA DB User
 * 
	{
		mail: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		password: {
			type: 'String', 
			required : true
		},
		roles: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/user',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'mail'	=> isset($body->mail)?$body->mail:'',
		'name'	=> isset($body->name)?$body->name:'',
		'password'	=> $body->password,
		'roles'	=> isset($body->roles)?$body->roles:'',
		'surname'	=> isset($body->surname)?$body->surname:'',
		'username'	=> $body->username,
			);

	$obj = makeQuery("INSERT INTO user (_id, mail, name, password, roles, surname, username )  VALUES ( null, :mail, :name, :password, :roles, :surname, :username   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/user/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM user WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/user/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM user WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/user',	function () use ($app){
	makeQuery("SELECT * FROM user");
});


//CRUD - EDIT

$app->post('/user/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'mail'	    => isset($body->mail)?$body->mail:'',
		'name'	    => isset($body->name)?$body->name:'',
		'password'	    => $body->password,
		'roles'	    => isset($body->roles)?$body->roles:'',
		'surname'	    => isset($body->surname)?$body->surname:'',
		'username'	    => $body->username	);

	$obj = makeQuery("UPDATE user SET  mail = :mail,  name = :name,  password = :password,  roles = :roles,  surname = :surname,  username = :username   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */


/*
 Name: changePassword
 Description: Change password of user from admin
 Params: 
 */
$app->post('/user/:id/changePassword',	function ($key) use ($app){	
	makeQuery("SELECT 'ok' FROM DUAL");
});
	
			
?>