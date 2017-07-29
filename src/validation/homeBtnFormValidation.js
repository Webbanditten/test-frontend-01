export function homeBtnFormInputValidation(input) {
    if( /[^a-zA-Z0-9]/.test( input )) {
       return false;
    }else if(input.length > 10) {
        return false;
    }else if(input.length < 1) {
        return false;
    }
    return true;
}