import axios from 'axios';
import * as constants from './constants';

const changeLoginAction = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})
export const logout = () => ({
  type:constants.LOGOUT,
  value:false
})
export const loginAction = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?acconut=' + account + '&password' + password).then((res) => {
      const data = res.data.data;
      if (data) {
        dispatch(changeLoginAction())
      } else {
        alert('账号或者密码输入错误！')
      }
    })
  }
}