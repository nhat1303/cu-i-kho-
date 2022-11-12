// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const gender1 = document.getElementById("male");
// const gender2 = document.getElementById("female");
// const form = document.getElementById("form");
// const error = document.getElementById("error")

// form.addEventListener("submit", (e)=>{
//     let message = [];
//     if(email.value ===""|| email.value == null){
//         message.push("email is required")
//     }
//     if(password.value ===""|| password.value == null){
//         message.push("password is required")
//     }
//     if(gender1.checked==true){
//         message.push("gender is required")
//     }
//     if(gender2.checked==true){
//         message.push("gender is required")
//     }
//     if (messages.length > 0) {
//         e.preventDefault()
//         error.innerText = messages.join(', ')
//     }})

const email = document.getElementById('email')
const password = document.getElementById('password')
const mail =document.getElementById("mail")
const male = document.getElementById("male")
const female = document.getElementById("female")
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const success = document.getElementById("success")
form.addEventListener('submit', (e) => {
  let messages = [];
  if (email.value === '' || email.value == null) {
    messages.push('Name is required')
  }

  if (password.value ==='' || password.value == null){
    messages.push("Password is required")
  } else messages.push("")
  if (mail.value ==='' || mail.value == null){
    messages.push("Message is required")
  }
if (female.checked==true){
    messages.push("")
  }else if (male.checked== true){
    messages.push("")
  }else {
    messages.push("Gender is required")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(" ")
    errorElement.style.color = "red"
  } else {
    
  }
  
})

