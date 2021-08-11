let user = {
    username:"joe",
    printUser:function(){
        console.log(`welcome ${this.username}`);
    }
}

// capsulation
setTimeout(function(){
    user.printUser()},2000);

    // bind
    
    let printer = user.printUser.bind(user);

    // setTimeout(user,printUser,2000)  //fail
    setTimeout(printer,2000)   //works




    let Intec = function(){
        console.log("intec",this);
    }

    let intecBrussel = Intec.bind([1,2,3])

   intecBrussel();