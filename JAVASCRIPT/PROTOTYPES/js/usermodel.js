function User(username, password, email, job){
    
    this.username = username
    this.password = password
    this.email = email
    this.job = job
    this.users = []

}

User.Prototype.getUsers = function(){
    console.log(this.users);
} 

User.prototype.addUser = function(){
    this.users.push({
        user:this.username,
        pass:this.password,
        email:this.email,
        job:this.job

    })
}

let user1 = new User('admin','admin123','admin@admin.com','developer');
let user2 = ('root','root123','root@root.com','sysadmin')
