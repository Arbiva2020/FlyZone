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
