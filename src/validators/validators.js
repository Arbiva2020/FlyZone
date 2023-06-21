export const validateMinMax = (str,min,max,val) => {
    if(val.length < min || val.length > max){
        return {isSuccess:false, errorMessage: `${str} requires ${min} letters or max ${max} letters`}
    } return {isSuccess:true, errorMessage:''}
}

export const validateEmail = (str) => {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)){
    return {isSuccess:true, errorMessage:''}
  }
    return {isSuccess:false, errorMessage:'email is not Valid'}
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

export const validateFileType = (file) => {
    if(!file.name.match(/\.(jpg|jpeg|png|gif)$/)){
        return false
    } return true
}
