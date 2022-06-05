
// LOADER //

// const loader = document.querySelector('.loader');
// const inscription = document.querySelector('.btn');
// const connexion = document.querySelector('.btn');


// window.addEventListener('load', () => {
//     loader.classList += " hidden";
// })



// ANIAMTION DE L'OEIL DANS L'INPUT MOT DE PASSE //

// Cacher/voir le mot de passe pour la connexion //

const signIn_Hidden_Btn = document.querySelector('.password-sign-in');
const signIn_Show_Btn = document.querySelector('.eye-sign-in');


signIn_Show_Btn.addEventListener("click", () => {
    
    if(signIn_Hidden_Btn.type === "password") {
        signIn_Hidden_Btn.type = "text";
        signIn_Show_Btn.classList.replace('fa-eye', 'fa-eye-slash');

    } else {
        signIn_Hidden_Btn.type = "password";
        signIn_Show_Btn.classList.replace('fa-eye-slash', 'fa-eye');
    }
})


// Cacher/voir le mot de passe pour l'inscription //

const signUp_Hidden_Btn = document.querySelector('.password-sign-up');
const signUp_Show_Btn = document.querySelector('.eye-sign-up');

signUp_Show_Btn.addEventListener("click", () => {
    
    if(signUp_Hidden_Btn.type === "password") {
        signUp_Hidden_Btn.type = "text";
        signUp_Show_Btn.classList.replace('fa-eye', 'fa-eye-slash');

    } else {
        signUp_Hidden_Btn.type = "password";
        signUp_Show_Btn.classList.replace('fa-eye-slash', 'fa-eye');
    }
})


// Cacher/voir le mot de passe pour la confirmation de l'inscription //

const signUp_Hidden_Btn_Confirm = document.querySelector('.password-sign-up-confirm');
const signUp_Show_Btn_confirm = document.querySelector('.eye-sign-up-confirm');

signUp_Show_Btn_confirm.addEventListener("click", () => {
    
    if(signUp_Hidden_Btn_Confirm.type === "password") {
        signUp_Hidden_Btn_Confirm.type = "text";
        signUp_Show_Btn_confirm.classList.replace('fa-eye', 'fa-eye-slash');

    } else {
        signUp_Hidden_Btn_Confirm.type = "password";
        signUp_Show_Btn_confirm.classList.replace('fa-eye-slash', 'fa-eye');
    }
})



// ANIMATION : COULEUR DE L'OUTLINE DES INPUTS EN CAS DE SUCCÈS OU D'ERREUR //

const form = document.querySelector('#form');
const prenom = document.querySelector('.prénom');
const nom = document.querySelector('.nom');
const email = document.querySelector('.email');
const password_sign_in = document.querySelector('.password-sign-in');
const password_sign_up = document.querySelector('.password-sign-up');
const passwordConfirm = document.querySelector('.password-sign-up-confirm');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();

});



const setError = (element, message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}


const isValidEmail = () => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}



const validateInputs = () => {

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const passwordSignUpValue = password_sign_up.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();
    const passwordSignInValue = password_sign_in.value.trim();
    

    // Le prénom //
    if(prenomValue === '') {
        setError(prenom, 'Le prénom est manquant');
    } else {
        setSuccess(prenom);
    }


    // Le nom //
    if(nomValue === '') {
        setError(nom, 'Le nom est manquant');
    } else {
        setSuccess(nom);
    }



    // L'email //
    if(emailValue === '') {
        setError(email, 'L\'adresse email est manquant');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Entrez une adresse mail valide')
    } else {
        setSuccess(email);
    }

    
    // Le mot de passe pour l'inscription //
    if(passwordSignUpValue === '') {
        setError(password_sign_up, 'Le mot de passe est incorrect');
    } else if(passwordSignUpValue.length < 8) {
        setError(password_sign_up, 'Le mot de passe doit contenir 8 caractères valide')
    } else {
        setSuccess(password_sign_up);
    }

    
    // Confirmation du mot de passe //
    if(passwordConfirmValue === '') {
        setError(passwordConfirm, 'Le mot de passe est incorrect');
    } else if(passwordConfirmValue !== passwordSignUpValue) {
        setError(passwordConfirm, 'Le mot de passe ne correspond pas')
    } else {
        setSuccess(passwordConfirm);
    }



    // Le mot de passe de la connexion //
    if(passwordSignInValue === '') {
        setError(password_sign_in, 'Le mot de passe est incorrect');
    } else if(passwordSignInValue.length < 8) {
        setError(password_sign_in, 'Le mot de passe est incorrect')
    } else {
        setSuccess(password_sign_in);
    }


    
    
};



// ANIMATION DE CONNEXION ET DE L'INSCRIPTION //

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})