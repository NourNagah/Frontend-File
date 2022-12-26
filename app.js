console.log("Hellooozz")

const submitButton=document.getElementById("submitButton");
const emailInput=document.getElementById("emailInput");
const passwordInput=document.getElementById("passwordInput");



submitButton.addEventListener('click',emailInput);
submitButton.addEventListener('click',passwordInput);
//addeventlistener fel onclick bt3ha,


btn.addEventListener('click',async()=>{
    console.log("hello")
    const response = await fetch("http://localhost:3000/registration", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: `{
       "email": "mmm@gmail.com",
       "password":"12345",
      }`,
    });
    
    response.json().then(data => {
      console.log(data);
    });
    });