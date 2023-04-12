export const validateMinMax = (str,min,max) => {
    if(str.length < min || str.length > max){
        return false
    } return true
}

export const validateEmail = (str) => {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)){
    return true
  }
    return (false)
}

//To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
export const validatePassword = (str) => {
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(str)){
        return true
    } return false
}

// export const validateUserName = (str, userName) => {
//     if(str !== userName){
//         return false
//     } return true
// }

export const confirmPassword = (password, str) => {
    if(password !== str){
        return false
    } return true
}
