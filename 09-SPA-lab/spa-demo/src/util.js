

export function checkUserNav(){
    
    const user = JSON.parse(sessionStorage.getItem('userData'))
    
    if(user==null){
       
        document.getElementById('userNav').style.display='none';
        document.getElementById('guestNav').style.display='inline-block';
    }else{
       
        document.getElementById('userNav').style.display='inline-block';
        document.getElementById('guestNav').style.display='none';
        document.getElementById('greeting').textContent = user.email;
    }
}