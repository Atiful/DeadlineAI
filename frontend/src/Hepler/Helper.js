export const FormValidation = (userDetails) => {
    if(userDetails.email === "" || userDetails.password === ""){
      return true;
    }
    return false;
}


