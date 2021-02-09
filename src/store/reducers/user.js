
const initialState = {
  list: [],
  fetch: false,
  courseById: {
    item: {},
    fetch: false
  }
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/addNewUser': {
      return {
        ...state,
      }
    }
    case 'user/login': {
      return {
        ...state,
        isLogin: true
      }
    }
    case 'user/logout': {
      return {
        ...state,
        isLogin: false
      }
    }
    case 'data/getData': {
      return {
        ...state,
        cars: action.payload
      }
    }
    default:
      return state
  }
}