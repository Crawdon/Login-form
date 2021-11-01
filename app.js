function setFormMessage(formElement,type,message){
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success","form-message-error");
    messageElement.classList.add(`form-message-${type}`);
}

function setInputError(inputElement,message){
    inputElement.classList.add("form-input-error")
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message
}
function clearInput(inputElement){
    inputElement.classList.remove("form-input-error")
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = ""
}

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

    loginForm.addEventListener("submit",e =>{
        e.preventDefault();
        //Ajax or fetch login
        //setFormMessage(loginForm,"success","Sesión iniciada!")

        setFormMessage(loginForm,"error","Usuario o contraseña invalida")
    })

    document.querySelectorAll(".form-input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e =>{
            if (e.target.id === "singUpUsername" && e.target.value.length >0 && e.target.value.length< 10 ){
                setInputError(inputElement, "El nombre de usuario debe tener al menos 10 caracteres")
            }
            if (e.target.id === "singUpEmail"  && e.target.value.length >0){
                let mail = e.target.value
                const word = '@';
                if (!mail.includes(word)){
                    setInputError(inputElement, "El mail ingresado es invailido")
                }
                
            } 
            
            inputElement.addEventListener("input",e=>{
                clearInput(inputElement);

            })
            
        })
    })

})

