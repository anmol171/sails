/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

    addUser:addUser
}

async function addUser(req,res){

    var obj = req.body;
    console.log('obj',obj);  
    console.log('obj.fname',JSON.stringify(obj.fname));  
    
    var createdUser = await User.create({fname:obj.fname,lname:obj.lname,emailAddress:obj.email, password:obj.password}).fetch();
    
    return res.redirect("/third");


}


   

