import {ErrorMessageLibrary} from "./formerrors"


export const passwordErrorMessages:ErrorMessageLibrary = {
   
    EMPTY_FIELD: {
        type: "manual",
        message: "You must enter a password."
    },

    DOES_NOT_EXIST: {
        type: "manual",
        message: "The username or password you entered does not exist."
    },

    MIN_LENGTH: {
        type: "manual",
        message: "Your password must be at least 8 characters long."
    },

    MAX_LENGTH: {
        type: "manual",
        message: "Your password must be less than 16 characters long."
    },

    MISSING_UPPERCASE: {
        type: "manual",
        message: "Your password must have at least one upper case character"
    },

    MISSING_DIGIT: {
        type: "manual",
        message: "Your password must contain at least one digit"
    }
};