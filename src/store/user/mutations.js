
// import router from '../../router/index'
export async function login (state, payload) {
  console.log(payload)
  state.user = {
    userName: payload.user.username,
    fullName: payload.user.fullName,
    objectId: payload.user.objectId
  }
  state.token = payload.token
  this.$router.push({ path: '/' })
}
