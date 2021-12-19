
import { ErrorMessageLibrary } from "./formerrors";


export const usernameErrorMessages: ErrorMessageLibrary =  {
    
    EMPTY_FIELD:{
        type:"manual",
        message: "You must enter a username."
    },
  
    DOES_NOT_EXIST:{
        type:"manual",
        message: "The username you have entered does not exist."
    },
  
    DUPLICATE_USERNAME: {
        type:"manual",
        message: "The username you entered already exists."
    },
    
    MAX_LENGTH: {
        type: "manual",
        message: "Your username must be less than 20 characters long."
    },

    MIN_LENGTH: {
        type: "manual",
        message: "Your username must be at least 8 characters long."
    },
    
    WHITESPACE: {
        type:"manual",
        message: "Your username must not have any whitespace characters."
    }
};