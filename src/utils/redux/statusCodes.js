const statusCodeState = {
  signUp: 0,
  logIn: 0,
  update: 0,
};

export function setSignUpCode(code) {
  return {
    type: "SET_SIGN_UP_CODE",
    payload: code,
  };
}

export function setLogInCode(code) {
  return {
    type: "SET_LOG_IN_CODE",
    payload: code,
  };
}

export function setUpdateCode(code) {
  return {
    type: "SET_UPDATE_CODE",
    payload: code,
  };
}

export default function statusCodeReducer(
  statusCode = statusCodeState,
  action
) {
  switch (action.type) {
    case "SET_SIGN_UP_CODE":
      return {
        ...statusCode,
        signUp: action.payload,
      };
    case "SET_LOG_IN_CODE":
      return {
        ...statusCode,
        logIn: action.payload,
      };
    case "SET_UPDATE_CODE":
      return {
        ...statusCode,
        update: action.payload,
      };
    default:
      return statusCode;
  }
}
