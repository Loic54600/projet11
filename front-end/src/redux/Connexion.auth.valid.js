

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
} 

export const ValidEmail = (email) => {
    const Validcaract = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
    return Validcaract.test(email);
};

export const ValidPassword = (password) => {
    const Validcaract = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
    return Validcaract.test(password);
};