export const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} needs to be at least three characters`;
    }
    return null;
};


export const emailValidation = (email) => {
    if (email.trim() === '') {
        return 'Email is required';
    }
    return null;
};

export const passwordValidation = (password) => {
    if(password.trim === ''){
        return "Password is required";
    }
    if(password.length < 8){
        return "Password must be at least 8 characters";
    }
    if(password.length > 20){
        return "Password must be maximum 20 characters long";
    }
    if (password.search(/[a-z]/) < 1) {
        return "Your password must contain at least one lower case letter";;
    }
}

export const passwordMatchValidation = (password1, password2) => {
    if(password1 !== password2){
        return "Passwords do not match";
    }
}