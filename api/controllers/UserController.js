/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

    addUser:addUser,
    fetchuser:fetchuser
}

async function addUser(req,res){

    var obj = req.body;
    console.log('obj',obj);  
    console.log('obj.fname',JSON.stringify(obj.fname));  
    
    var createdUser = await User.create({fname:obj.fname,lname:obj.lname,emailAddress:obj.email, password:obj.password}).fetch();
    
    // //return res.redirect("/third");
    // var usersNamedFinn = await User.find({fname:obj.fname});

    // return res.json(usersNamedFinn);
       

}


async function fetchuser(req,res) {

    // var obj = req.body;
 console.log(req.body.fname,"dasadsadscaaedcaecedas");
     var obj = req.body.fname;
     console.log(obj,"sasaasssasaobject");
    // var fetchOne = await User.findOne({fname:obj.fname});
    // console.log(fetchOne,"sasaasssasaobject");


    //return res.json(fetchOne);
    //return res.redirect("/fourth");


    // var usersNamedFinn = await User.find({
    //     where: obj,
    //     select: ['fname','lname','emailAddress','password']
    //   });
    User.find().exec(function (error, results) {
        console.log('res--', results);
        res.view('pages/test5', 
            {data: results, message:'sdfd'}
        );
    });
    //   console.log(usersNamedFinn,"userbanmerfinnnnnnededd");
    //   res.view('pages/test5', 
    //     {message: usersNamedFinn}
    // );
     // return res.json(usersNamedFinn);





}















// async function fetchuser(req,res) {

//     // var obj = req.body;
 
//     var obj = req.body;
//      console.log(obj,"sasaasssasaobject",obj.fname);
//     var fetchOne = await User.findOne({fname:obj.fname});

//     //return res.json(fetchOne);
//     console.log(fetchOne)
//     req.session.abc = fetchOne || 'unknown';
//     if(!fetchOne){
//         req.session.abc="hardiiii";
//     }
   
//     console.log(req.session.abc,"fetch");
    
//     return res.redirect("/fourth");
// }


// async function returnuser(req,res) {
 
//     console.log(req.session.abc,"return");
//     return res.json(req.session.abc);
// }
