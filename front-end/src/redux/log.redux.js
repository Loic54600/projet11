const initial = {
  isLoggedIn:
    !!sessionStorage.getItem("token") || !!localStorage.getItem("token"),
};

export default function loginRedux(state = initial, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

