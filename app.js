console.log("Hellooozz")

const submitButton=document.getElementById("submitButton");
const emailInput=document.getElementById("emailInput");
const passwordInput=document.getElementById("passwordInput");



// submitButton.addEventListener('click',emailInput);
// submitButton.addEventListener('click',passwordInput);
//addeventlistener fel onclick bt3ha,
btn = document.getElementById('btn');

btn.addEventListener('click',async()=>{
    console.log("hello")
    const response = await fetch("https://darderaz.onrender.com/login", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: `{
       "email": "nournagah89@gmail.com",
       "password":"1234",
      }`,
    });
    
    response.json().then(data => {
      console.log(data);
    });
    });