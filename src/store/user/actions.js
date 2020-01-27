import Parse from 'parse'
export const ActionLogin = async ({ commit }, payload) => {
  await Parse.User.logIn(payload.username, payload.password).then(user => {
    if (user) {
      commit('login', { user: user.toJSON(), token: user.get('sessionToken') })
      localStorage.setItem('user',
        JSON.stringify({
          userName: user.get('username'),
          fullName: user.get('fullName'),
          objectId: user.id
        })
      )
      localStorage.setItem('token', user.get('token'))
    }
  }).catch(err => {
    return err
  })
}
