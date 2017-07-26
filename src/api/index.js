import { requestLogin, getUserList, getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from './api'

export default {
  api_user_get(params) {
    return axios.get(`${base}/user/add`, {
      params: params
    })
  },
requestLogin, getUserList, getUserListPage, removeUser, batchRemoveUser, editUser, addUser}
