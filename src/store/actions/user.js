import { addNumberAuto, login, registrationNewUser,
  getDatByCarNumber, currentUser, signOut } from "../../service/service"

export function registrationNewUserPost (params) {
  return async (dispatch) => {
    try {
      let registeredUser = await registrationNewUser(params)
      let resNumberRc = await addNumberAuto(registeredUser, params)
      console.log(resNumberRc)
      dispatch({
        type : 'REGISTRATION',
        payload: params
      })
      return resNumberRc
    } catch (e) {
    }
  }
}

export function loginUserPost (params) {
  return async (dispatch) => {
    try {
      let auth = await login(params)
      localStorage.setItem('userUid', auth.user.uid)
      dispatch({
        type : 'user/login',
        payload: auth
      })
      return auth
    } catch (e) {
    }
  }
}

export function logoutUserPost () {
  return async (dispatch) => {
    try {
      let auth = await signOut()
      console.log(auth)
      localStorage.removeItem('userUid')
      dispatch({
        type : 'user/logout',
        payload: auth
      })
      return auth
    } catch (e) {
      console.log(e)
    }
  }
}

export function checkStatusCurrentUser () {
  return async (dispatch) => {
    try {
      let auth = await currentUser()
      setTimeout(() => {
        console.log(auth.currentUser)
        if (auth.currentUser) {
          dispatch({
            type : 'user/login',
            payload: auth
          })
        }
      }, 1000);
      // localStorage.setItem('userUid', auth.user.uid)
      return auth
    } catch (e) {
      console.log(e)
    }
  }
}

export function getDataByCar (params) {
  return async (dispatch) => {
    try {
      let querySnapshot = await getDatByCarNumber(params.number_rc)
      let data = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data = [...data, doc.data()]
    })
      dispatch({
        type : 'data/getData',
        payload: data
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }
}