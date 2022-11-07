
const userName = 'kalifa';
const pass = 12345;

console.log("Hi");
function afterClick(){
    if(document.getElementById('inpMail').value == userName){
        if(document.getElementById('inpPass').value == pass){
            alert('Welcome');
        }
        else{
            alert('Your Password is wrong');
        }
    }else{
        alert('Your User Name is wrong');
    }
}
