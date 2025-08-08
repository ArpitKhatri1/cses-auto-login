
setTimeout(()=>{
    const username = document.querySelector('input[name="nick"]')
    const password = document.querySelector('input[name="pass"]')

    username.value = "" // Your cses username
    password.value = "" // Your cses password

    const button = document.querySelector('input[type="submit"]')
    button.click();
    
},1000)
