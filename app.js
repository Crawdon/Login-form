document.addEventListener("DOMContentLoaded",()=>{

    
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click",e=>{
        
        e.preventDefault();
        loginForm.classList.add("form-hiden");
        createAccountForm.classList.remove("form-hiden");
        
    })
    
    document.querySelector("#link").addEventListener("click",e=>{
        
        e.preventDefault();
        createAccountForm.classList.add("form-hiden");
        loginForm.classList.remove("form-hiden");

    })
})

