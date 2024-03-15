export const ValidateForm = (email,password,name) =>{

    const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const validateName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!validateEmail) return "Email is not valid"
    if(!validatePassword) return "Password is not valid"
    // if(!validateName) return "Please Enter Valid Name"
    return null

}
