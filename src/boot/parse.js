import Parse from 'parse'

export default ({ app, router, Vue }) => {
  Parse.initialize('br.com.allterra')
  // if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
  //   let port = '1337'
  //   Parse.serverURL = `${window.location.protocol}//${window.location.hostname}:${port}/parse`
  // } else {
  //   let subDomain = window.location.host.split('.')[0]
  //   if (subDomain === 'dev') {
  //     Parse.serverURL = `${window.location.protocol}//${window.location.hostname}/parse`
  //   } else {
  //     let serverURL = window.location.hostname.replace('app.', 'server.')
  //     Parse.serverURL = `${window.location.protocol}//${serverURL}/parse`
  //   }
  // }
  Parse.serverURL = 'http://all-terra.herokuapp.com/parse'
  Vue.prototype.$parse = Parse
}
