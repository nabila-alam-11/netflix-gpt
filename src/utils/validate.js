export const checkValidData = (email, password, name) => {
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid =     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid) return "Please enter a valid email address."
    if(!isPasswordValid) return "Password is not valid."
    if(name === null) {
        return "Please enter a name."
    }
    return null;
    };