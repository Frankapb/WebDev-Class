const [user, pass] = document.querySelectorAll('input');
const registerBtn = document.querySelector('.registerBtn');

console.log(user, pass, registerBtn);

function Register() {
    this.users = []



    this.add = () => {

        // Math.random().toString(16).slice(2)   ******* create an unique user ID(alpha numeric ID in the console)
        // console.log(user.value,pass.value);
        let singleUser = {
            id: Math.random().toString(16).slice(2),   // create an unique user ID(alpha numeric ID in the console)
            user: user.value,
            pass: pass.value,
            regTime: new Date().getTime() / 1000
        }
        // console.log(singleUser);
        return this.users.push(singleUser);
    }

    this.show = () => {
        this.users.forEach(user => {
            console.log(user);
        })
    }


}

registerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let user = new Register();
    user.add();
    user.show();
})