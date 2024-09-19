
export const validateForm = (name , email , password , isSignInForm) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const nameRegex = /^[A-Za-z\s]+$/

    if(!isSignInForm && (name === null || !nameRegex.test(name) ) ) return "Invalid Name"
    if(!emailRegex.test(email) ) return "Email ID is Not Valid" 
    if(!passwordRegex.test(password)) return "Password is not valid"
    return null
}