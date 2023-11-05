var form = document.getElementById('myform');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    var email = document.getElementById('email');
    var title = document.getElementById('title');
    var body = document.getElementById('body');

    const apiURL = 'http://randomblogs.herokuapp.com/api/3a6b9c12d';
    const LocalHost = 'http://localhost:8080/api/3a6b9c12d';

    const data = {
        email:email.value,
        title:title.value,
        body:body.value
    };

    const option = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };

    const res = await fetch(apiURL,option);
    const JSONres = res.json();

    console.log(JSONres);
    window.navigator.vibrate(200);
    window.location.href = `http://randomblogs.herokuapp.com`;


});
