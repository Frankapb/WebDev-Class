$(document).ready(function() {
    $('select').material_select();
  });

  const [Name,surname,E-mail,Password] = document.querySelectorAll('input')
  const RegisterBtn = document.querySelector('button')

RegisterBtn.addEventListener('click',Auth)

function Auth(event){
    event.preventDefault();
    console.log('testing');
    if(typeof (storage)!== 'undefined'){
        if(sessionStorage.name ==  name.value && sessionStorage.last == surname.value && 
            sessionStorage.email == e-mail.value && sessionStorage.pass == password.value) {
                // success
                location.href='dashboard.html'
            }else{
                alert('Information is incorrect. Please try again!!')
            }
    }
}